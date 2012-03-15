/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* @namespace The PushService object allows you to leverage the BlackBerry push architecture to receive push data in your application. 
* The push solution includes a push-enabled application on a BlackBerry device and a Push Initiator server-side application. 
* The Push Initiator can deliver up to 8 KB of content (images, text, etc...) and headers (meta-data name-value pairs) through the BlackBerry Push 
* Service (to the general public) or through the BlackBerry Enterprise Server (to enterprise users). These servers are also known as PPGs (Push Proxy Gateway). The PushService
* object will allow your application receive push message sent through either of these PPGs.
* <br/><br/>
* The PushService object must be created as an instance using the new keyword. Only one instance is needed per application.
* </p></div>
* @toc {Push} PushService 
* @class The PushService object allows you to perform all the push-related operations.
* @constructor Constructor for a new PushService object. 
* @featureID blackberry.push
* @param {Object} options Object literal that allows the user to specify various options.
* @param {String} options.appId The provider application ID. For public push you are assigned a unique provider application id after registering to use the BlackBerry Push Service. 
* For enterprise push, this is any value that uniquely identifies this application as agreed to with the push initiator  
* @param {String} [options.ppgUrl] Optional parameter that specifies the PPG URL to register with. For public push, you will be provided 
* with this URL after registering to use the BlackBerry Push Service. The URL will point to either the eval or the production environment of the BlackBerry Push Service 
* (for eval, https://cp{cpid}.pushapi.eval.blackberry.com; for production, https://cp{cpid}.pushapi.na.blackberry.com where {cpid} is replaced with your content provider ID).
* For enterprise push PPG URL is not required since not registration is required to receive push messages. 
* @param {String} options.invokeTargetKey Your application's unique invoke target key, as set in your application BAR file's manifest, related to when a new push notification 
* is received and the application needs to be invoked.
* @callback {function} simChangeCallback The callback that is invoked when a SIM card change has occurred.
* @BB10X
* @example 
* var ops = { appId : 'appId1', ppgUrl : 'https://cpcontprovId1.pushapi.na.blackberry.com', invokeTargetKey : 'com.sample.pushtest.target'};
*
* var pushService = new blackberry.push.PushService(ops, simChangeCallback);
*
* function simChangeCallback() {
*    alert("SIM card was changed!");
* }
*/
blackberry.push.PushService = function(options, simChangeCallback) {};

/**
* <p>
* Creates a push session for the given application with the push agent running on the device.  
* </p>
* <p>
* This function must be called when the application first starts up and on page changes.
* </p>
* @callback {function} createSessionCallback The callback that is invoked when the result of the create session operation is received. 
* @callback {Number} createSessionCallback.result The create session operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* pushService.createSession(createSessionCallback);
*
* function createSessionCallback(result) {
*    alert("Create session finished with result code: " + result);
* }
*/
blackberry.push.PushService.prototype.createSession = function(createSessionCallback) { };

/**
* <p>
* Creates a push channel for the given application. Unlike a session, once a channel is created it will survive application restarts and therefore
* does not necessarily need to be called on every application start up. However, since it is possible for the BlackBerry Push Service
* to destroy a channel under certain circumstances it may be advisable to periodicially re-create the channel (e.g. once a month).     
* </p>
* <p>
* A session must have been created using <code>createSession</code> before calling this function.
* </p>
* <p>
* This function should be called in order for an application to be able to start receiving pushes.  If a <code>destroyChannel</code> call 
* is then made, no pushes will be able to be received until a <code>createChannel</code> call is made again.
* </p>
* <p>
* Note: If using public push PPG, this function will communicate under the covers with the BlackBerry Push Service.
* </p>
* @callback {function} createChannelCallback The callback that is invoked when the result of the create channel operation is received. 
* @callback {Number} createChannelCallback.result The create channel operation result. See the constants provided to see what result codes apply for this operation.
* @callback {String} createChannelCallback.token On a successful create channel operation (result of <code>SUCCESS</code>), a token is returned.  This token must then be communicated 
* back to the content provider's server-side application (the Push Initiator).  This token is then used by the content provider as the means to address the application on the device 
* when initiating a push request to the BlackBerry Push Service. 
* @BB10X
* @example
* pushService.createChannel(createChannelCallback);
*
* function createChannelCallback(result, token) {
*    alert("Create channel finished with result code: " + result);
*
*    if (result = blackberry.push.PushService.SUCCESS) {
*      // Success, so a token should be available
*      alert("Token received on create channel: " + token);
*    }
* }
*/
blackberry.push.PushService.prototype.createChannel = function(createChannelCallback) { };

/**
* <p>
* Destroys a push channel for the given application.
* </p>
* <p>
* A session and a channel must have been created using <code>createSession</code> and <code>createChannel</code> before calling this function.
* </p>
* <p>
* This function should be called in order for an application to stop receiving pushes.
* No pushes will be received after a <code>destroyChannel</code> call until a <code>createChannel</code> call is made after that.
* </p>
* <p>
* Note: If using public push PPG, this function will communicate under the covers with the BlackBerry Push Service.
* </p>
* @callback {function} destroyChannelCallback The callback that is invoked when the result of the destroy channel operation is received. 
* @callback {Number} destroyChannelCallback.result The destroy channel operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* pushService.destroyChannel(destroyChannelCallback);
*
* function destroyChannelCallback(result) {
*    alert("Destroy channel finished with result code: " + result);
* }
*/
blackberry.push.PushService.prototype.destroyChannel = function(destroyChannelCallback) { };

/**
* <p>
* Sends an acknowledgement to the PPG indicating whether a push should be accepted or rejected. It is up to the application to determine
* whether to accept or reject a push message based on it own business rules. It is strongly recommended to accept or reject the push 
* message as soon as possible otherwise the push message will automatically be considered rejected.
* </p>
* <p>
* Use the <code>PushPayload.isAckRequired</code> property to determine whether or not calling <code>acknowledgePush</code> is required.
* </p>
* @param {String} payloadId The unique identifier of the push.  It will match the <code>PushPayload.id</code> property.
* @param {Boolean} shouldAcceptPush True if the push should be accepted; false if the push should be rejected
* @BB10X
* @example
* if (pushPayload.isAckRequired) {
*    // Accept push
*    pushService.acknowledgePush(pushPayload.id, true);
*    // To reject the push, you would call: pushService.acknowledgePush(pushPayload.id, false);
* }
*/
blackberry.push.PushService.prototype.acknowledgePush = function(payloadId, shouldAcceptPush) { };

/**
* <p>
* Extracts the <code>PushPayload</code> from the passed in invoke object.
* </p>
* @param {Object} invokeObject The invoke object to parse.
* @returns {PushPayload} Returns the parsed out <code>PushPayload</code> object.
* @BB10X
* @example
* var pushPayload = pushService.getPushPayload(invokeObj);
*/
blackberry.push.PushService.prototype.getPushPayload = function(invokeObject) { };

/**
* <p>
* Indicates whether or not the application should be launched (started up) if it is currently closed (not running)
* and a new push is received.  The default system behaviour is to not launch the application. 
* </p>
* <p>
* A session must have been created using <code>createSession</code> before calling this function. As a result, it is recommended that 
* this function be called within the create session callback. It is also important to note that launch flag is only persisted once
* a channel has been created using the <code>createChannel</code> function. In other words, once the create channel function has been called the state of
* this launch flag is persisted between application and device restarts. The flag is only removed once the destroy channel function is called.
* This flag can be toggled at any time using this function but, again, its value is only persisted once the create channel function has been called at least
* once for the lifetime of the application. 
* </p>
* @param {Boolean} shouldLaunch True if the application should be launched on a new push; false if the application
* should not be launched when a new push comes in
* @callback {function} launchApplicationCallback The callback that is invoked when the result of the launch application operation is received. 
* @callback {Number} launchApplicationCallback.result The launch application operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* // Indicate that you want the application to launch on a new push
* pushService.launchApplicationOnPush(true, launchApplicationCallback);
* // To indicate that you do not want to launch on a new push, either leave the default behaviour or call:
* // pushService.launchApplicationOnPush(false, launchApplicationCallback);
* 
* function launchApplicationOnPush(result) {
*    alert("Launch application on push finished with result code: " + result);
* }
*/
blackberry.push.PushService.prototype.launchApplicationOnPush = function(shouldLaunch, launchApplicationCallback) { };

/**
* <p>
* Result code for an operation that was performed successfully. 
* </p>
* <p>
* Operations this code applies to: createSession, createChannel, destroyChannel, launchApplicationOnPush
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.SUCCESS = 0;

/**
* <p>
* Result error code for an internal error.  
* </p>
* <p>
* Operations this error can occur on: createSession, createChannel, destroyChannel, launchApplicationOnPush
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INTERNAL_ERROR = 500;

/**
* <p>
* Result error code for an invalid device PIN.   
* </p>
* <p>
* Operations this error can occur on: createChannel
* </p>
* <p>
* Recommended action: Retrying the operation might not be helpful since this is most likely an unrecoverable error 
* that is out of control of the application.  It might make sense to communicate this issue up to the user.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INVALID_DEVICE_PIN = 10001;

/**
* <p>
* Result error code for an invalid provider application ID.  
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Fixing the application ID programmatically and retrying might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INVALID_PROVIDER_APPLICATION_ID = 10002;

/**
* <p>
* Result error code when attempting to call destroy channel again after a successful destroy channel has already been done.  
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.CHANNEL_ALREADY_DESTROYED = 10004;

/**
* <p>
* Result error code when attempting to call destroy channel after a content provider has already done the destroying of the channel
* by unregistering a user.  
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.CHANNEL_ALREADY_DESTROYED_BY_PROVIDER = 10005;

/**
* <p>
* This result error code should not typically be encountered.  
* It would only occur if a create or destroy channel operation internally causes the state of a subscriber on the PPG to be in an invalid state.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INVALID_PPG_SUBSCRIBER_STATE = 10006;

/**
* <p>
* Result error code for when the device PIN could not be determined.  
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.DEVICE_PIN_NOT_FOUND = 10007;

/**
* <p>
* Result error code for when a create channel or destroy channel operation internally passes an expired authentication token to the PPG.  
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.EXPIRED_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG = 10008;

/**
* <p>
* This result error code should not typically be encountered.  
* It would only occur if a create channel or destroy channel operation internally passes an invalid authentication token to the PPG.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INVALID_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG = 10009;

/**
* <p>
* Result error code for when too many devices have already performed a create channel for the provider application ID.
* The create channel is described as still "active" because no destroy channel has been done for it.
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: No action can be taken by the application for this error, but it should somehow be communicated  
* back to the content provider and then to RIM to try to increase the allowed subscription limit.  
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.TOO_MANY_DEVICES_WITH_ACTIVE_CREATE_CHANNELS = 10010;

/**
* <p>
* Result error code for when a device attempting to do a create channel has an invalid operating system version number or an invalid device model number.
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Retrying the operation is not recommended since this is an unrecoverable error that is out of control of the application.
* It might make sense to communicate this issue up to the user. 
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.INVALID_OS_VERSION_OR_DEVICE_MODEL_NUMBER = 10011;

/**
* <p>
* Result error code when attempting to call destroy channel after a content provider has manually suspended a user.
* Similar to the <code>CHANNEL_ALREADY_DESTROYED_BY_PROVIDER</code> error.
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public push PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back. 
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.CHANNEL_SUSPENDED_BY_PROVIDER = 10012;

/**
* <p>
* Result error code when attempting to perform an operation and a create session has not been done beforehand.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel, launchApplicationOnPush
* </p>
* <p>
* Recommended action: This usually means a programming error in the application.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.CREATE_SESSION_NOT_DONE = 10100;

/**
* <p>
* Result error code when a create channel or destroy channel operation has failed due to network issues.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.  
* This error can also occur when the user's wireless connection (e.g. Wi-Fi, Mobile Network) is off or temporarily down,
* so it might make sense to communicate this issue up to the user.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.NETWORK_FAILURE = 10103;

/**
* <p>
* Result error code when a certain operation is currently not supported.
* </p>
* <p>
* Recommended action: This operation/feature might not yet be implemented and so should not be performed.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.OPERATION_NOT_SUPPORTED = 10105;

/**
* <p>
* Result error code when attempting to perform a destroy channel and a create channel has not been done beforehand.
* </p>
* <p>
* Operations this error can occur on: destroyChannel
* </p>
* <p>
* Recommended action: This might mean a programming error in the application.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.CREATE_CHANNEL_NOT_DONE = 10106;

/**
* <p>
* Result error code as a result of an issue on a create channel operation obtaining a port from the PPG.
* </p>
* <p>
* Operations this error can occur on: createChannel
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.MISSING_PORT_FROM_PPG = 10107;

/**
* <p>
* Result error code as a result of an issue on a create channel operation obtaining a subscription return code from the PPG.
* </p>
* <p>
* Operations this error can occur on: createChannel
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.MISSING_SUBSCRIPTION_RETURN_CODE_FROM_PPG = 10108;

/**
* <p>
* Result error code when a create channel or destroy channel operation has failed due to a failure to communicate with the PPG.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* It also might make sense to communicate this issue up to the user telling them to try again later when the PPG 
* is available again.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.prototype.PPG_CURRENTLY_NOT_AVAILABLE = 10110;