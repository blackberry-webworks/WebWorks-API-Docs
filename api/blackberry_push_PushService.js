/*
* Copyright 2010-2012 Research In Motion Limited.
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
* @namespace The <code>PushService</code> object allows you to leverage the BlackBerry push architecture to receive push data in your application. 
* The push solution includes a push-enabled application on a BlackBerry device and a content provider's server-side application (also known as the Push Initiator). 
* The Push Initiator can deliver up to 8 KB of content (images, text, etc.) and headers (meta-data name-value pairs) using a Push Proxy Gateway (PPG). Two PPGs are 
* available: the BlackBerry Push Service (for the general public/BIS) and the BlackBerry Enterprise Server (BES) (for enterprise users). The <code>PushService</code>
* object will allow your application to receive push messages sent through either of these PPGs.
* <br/><br/>
* To work with a <code>PushService</code> object, you must first call the static <code>create</code> function.  On a successful create, you will then be able
* to perform operations using the <code>PushService</code> object you receive in the success callback.
* @toc {Push} PushService 
* @class The <code>PushService</code> object allows you to perform all the push-related operations.
* @featureID blackberry.push
*/
blackberry.push.PushService = {};

/**
* <p>
* Creates a <code>PushService</code> object.  The <code>PushService</code> object will only be available if the <code>successCallback</code> function is called.
* It will not be available if the <code>failCallback</code> function is called instead.
* </p>
* @param {Object} options Object literal that allows the user to specify various options.
* @param {String} options.invokeTargetId Your application's unique invoke target ID, as set in your config.xml, related to when a new push notification 
* is received and the application needs to be invoked.
* @param {String} [options.appId] The provider application ID. This is required for public push.  It should not be specified for enterprise push. For public push, you are 
* assigned a unique provider application ID after registering to use the BlackBerry Push Service.  
* @param {String} [options.ppgUrl] The PPG URL to register with. This is required for public push.  It should not be specified for enterprise push.  For public push, you will be 
* provided with this URL after registering to use the BlackBerry Push Service. The URL will point to either the eval or the production environment
* (for eval, https://cp{cpid}.pushapi.eval.blackberry.com; for production, https://cp{cpid}.pushapi.na.blackberry.com where {cpid} is replaced with your content provider ID).
* @callback {function} successCallback The callback that is invoked when the <code>create</code> operation is successful.
* @callback {PushService} successCallback.pushService The <code>PushService</code> object that can be used on a successful <code>create</code> operation.
* @callback {function} failCallback The callback that is invoked when the <code>create</code> operation has failed.
* @callback {Number} failCallback.result The reason for the failure. See the constants provided to see what result codes apply for this operation.
* @callback {function} simChangeCallback The callback that is invoked when a SIM card change has occurred.  This callback only applies on a successful create.  
* When a SIM card change occurs, the channel will automatically be destroyed since this scenario may indicate the possibility of a new user using the device. 
* Care should be taken by the application to handle this situation as well. For example, the application may wish to re-authenticate the user with the Push Initiator 
* (if your Push Initiator implementation supports subscription) and then re-create the channel using <code>createChannel</code>. 
* @BB10X
* @static
* @example 
* // For public push
* var ops = { invokeTargetId : 'com.sample.pushtest.target', appId : 'appId1', ppgUrl : 'https://cpcontprovId1.pushapi.na.blackberry.com' };
*
* // For enterprise push
* // var ops = { invokeTargetId : 'com.sample.pushtest.target' };
* 
* blackberry.push.PushService.create(ops, successCallback, failCallback, simChangeCallback);
*
* function successCallback(pushService) {
*    // The create operation was a success
*    // Use the pushService object to now perform a launchApplicationOnPush, createChannel, destroyChannel, etc.
*    pushService.createChannel(createChannelCallback);
* }
*
* function failCallback(result) {
*    // The create operation failed
*    // You should compare the result code against the error constants in this PushService class that apply for create and
*    // take the recommended action for that constant
*    if (result == blackberry.push.PushService.INTERNAL_ERROR) {
*        // Retry the create up to a certain number of attempts and then display an error to the user
*    }
* }
*
* function simChangeCallback() {
*    // The SIM card was changed and the channel has been destroyed since a new user might be using the device.
*    // It is recommended that the user of this application be re-authenticated with the Push Initiator 
*    // (if your Push Initiator implementation supports subscription) followed by a call to createChannel.
* }
*/
blackberry.push.PushService.create = function(options, successCallback, failCallback, simChangeCallback) { };

/**
* <p>
* Creates a push channel for the given application. Once a channel is created, it will survive application restarts and therefore
* does not necessarily need to be called on every application start up. 
* </p>
* <p>
* However, for public push, since it is possible for the BlackBerry Push Service to destroy a channel under certain circumstances it 
* may be advisable to periodicially re-create the channel (e.g. once a month).     
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* <p>
* This function should be called in order for an application to be able to start receiving pushes.  If a <code>destroyChannel</code> call 
* is then made, no pushes will be able to be received until a <code>createChannel</code> call is made again.
* </p>
* @callback {function} createChannelCallback The callback that is invoked when the result of the create channel operation is received. 
* @callback {Number} createChannelCallback.result The create channel operation result. See the constants provided to see what result codes apply for this operation.
* @callback {String} createChannelCallback.token On a successful create channel operation (result of <code>SUCCESS</code>), a token is returned.  This token must then be communicated 
* back to the content provider's server-side application (the Push Initiator).  This token is then used by the content provider as the means to address the application on the device 
* when initiating a push request to the PPG. 
* @BB10X
* @example
* pushService.createChannel(createChannelCallback);
*
* function createChannelCallback(result, token) {
*    if (result == blackberry.push.PushService.SUCCESS) {
*      // Success, so a token should be available
*      // Subscribe with the Push Initiator using this token (if your Push Initiator supports subscription) so
*      // that you can push to this user using this token
*    } else if (result == blackberry.push.PushService.INTERNAL_ERROR) {
*      // Retry the createChannel up to a certain number of attempts and then display an error to the user
*    } else if ... (handle all the error codes possible for createChannel - see the error constants in this PushService class)
* }
*/
blackberry.push.PushService.prototype.createChannel = function(createChannelCallback) { };

/**
* <p>
* Destroys a push channel for the given application.
* </p>
* <p>
* A successful <code>create</code> must have been done and a channel must have been created using <code>createChannel</code> before calling this function.
* </p>
* <p>
* This function should be called in order for an application to stop receiving pushes.
* No pushes will be received after a <code>destroyChannel</code> call until a <code>createChannel</code> call is made after that.
* </p>
* @callback {function} destroyChannelCallback The callback that is invoked when the result of the destroy channel operation is received. 
* @callback {Number} destroyChannelCallback.result The destroy channel operation result. See the constants provided to see what result codes apply for this operation.
* @BB10X
* @example
* pushService.destroyChannel(destroyChannelCallback);
*
* function destroyChannelCallback(result) {
*    if (result == blackberry.push.PushService.INTERNAL_ERROR) {
*      // Retry the destroyChannel up to a certain number of attempts and then display an error to the user
*    } else if ... (handle all the error codes possible for destroyChannel - see the error constants in this PushService class)
* }
*/
blackberry.push.PushService.prototype.destroyChannel = function(destroyChannelCallback) { };

/**
* <p>
* Extracts the <code>PushPayload</code> from the passed in invoke object.
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* @param {Object} invokeObject The invoke object to parse.
* @returns {PushPayload} Returns the parsed out <code>PushPayload</code> object.
* @BB10X
* @example
* var pushPayload = pushService.extractPushPayload(invokeObj);
*/
blackberry.push.PushService.prototype.extractPushPayload = function(invokeObject) { };

/**
* <p>
* Indicates whether or not the application should be launched (started up) if it is currently closed (not running)
* and a new push is received.  The default system behaviour is to not launch the application. 
* </p>
* <p>
* A successful <code>create</code> must have been done before calling this function.
* </p>
* <p>
* It is important to note that the <code>shouldLaunch</code> flag is only persisted once a channel has been created using the <code>createChannel</code> function.
* In other words, once the create channel function has been called the state of the <code>shouldLaunch</code> flag is persisted between application and device restarts. 
* The flag is only removed once the destroy channel function is called.  This flag can be toggled at any time using this function but, again, its value 
* is only persisted once the create channel function has been called at least once for the lifetime of the application. 
* </p>
* @param {Boolean} shouldLaunch True if the application should be launched on a new push; false if the application should not be launched when a new push comes in
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
*    if (result == blackberry.push.PushService.INTERNAL_ERROR) {
*      // Retry the launchApplicationOnPush up to a certain number of attempts and then display an error to the user
*    } else if ... (handle all the error codes possible for launchApplicationOnPush - see the error constants in this PushService class)
* }
*/
blackberry.push.PushService.prototype.launchApplicationOnPush = function(shouldLaunch, launchApplicationCallback) { };

/**
* <p>
* Result code for an operation that was performed successfully. 
* </p>
* <p>
* Operations this code applies to: create, createChannel, destroyChannel, launchApplicationOnPush
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.SUCCESS = 0;

/**
* <p>
* Result error code for an internal error.  
* </p>
* <p>
* Operations this error can occur on: create, createChannel, destroyChannel, launchApplicationOnPush
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.INTERNAL_ERROR = 500;

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
blackberry.push.PushService.INVALID_DEVICE_PIN = 10001;

/**
* <p>
* Result error code for an invalid provider application ID.  
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Fixing the application ID programmatically and retrying might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.INVALID_PROVIDER_APPLICATION_ID = 10002;

/**
* <p>
* Result error code when attempting to call destroy channel again after a successful destroy channel has already been done.  
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.CHANNEL_ALREADY_DESTROYED = 10004;

/**
* <p>
* Result error code when attempting to call destroy channel after a content provider has already done the destroying of the channel
* by unregistering a user.  
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.CHANNEL_ALREADY_DESTROYED_BY_PROVIDER = 10005;

/**
* <p>
* This result error code should not typically be encountered.  
* It would only occur if a create or destroy channel operation internally causes the state of a subscriber on the PPG to be in an invalid state.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.INVALID_PPG_SUBSCRIBER_STATE = 10006;

/**
* <p>
* Result error code for when the device PIN could not be determined.  
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.DEVICE_PIN_NOT_FOUND = 10007;

/**
* <p>
* Result error code for when a create channel or destroy channel operation internally passes an expired authentication token to the PPG.  
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Retrying the operation might correct the issue.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.EXPIRED_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG = 10008;

/**
* <p>
* This result error code should not typically be encountered.  
* It would only occur if a create channel or destroy channel operation internally passes an invalid authentication token to the PPG.
* </p>
* <p>
* Operations this error can occur on: createChannel, destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: If this error occurs, it should be logged and reported to the RIM support team.
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.INVALID_AUTHENTICATION_TOKEN_PROVIDED_TO_PPG = 10009;

/**
* <p>
* Result error code for when too many devices have already performed a create channel for the provider application ID.
* The create channel is described as still "active" because no destroy channel has been done for it.
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
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
blackberry.push.PushService.TOO_MANY_DEVICES_WITH_ACTIVE_CREATE_CHANNELS = 10010;

/**
* <p>
* Result error code for when a device attempting to do a create channel has an invalid operating system version number or an invalid device model number.
* </p>
* <p>
* Operations this error can occur on: createChannel (only if using public/BIS PPG)
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
blackberry.push.PushService.INVALID_OS_VERSION_OR_DEVICE_MODEL_NUMBER = 10011;

/**
* <p>
* Result error code when attempting to call destroy channel after a content provider has manually suspended a user.
* Similar to the <code>CHANNEL_ALREADY_DESTROYED_BY_PROVIDER</code> error.
* </p>
* <p>
* Operations this error can occur on: destroyChannel (only if using public/BIS PPG)
* </p>
* <p>
* Recommended action: Most applications will typically want to just ignore this error code when it comes back. 
* </p>
* @type Number
* @constant
* @static
* @BB10X
*/
blackberry.push.PushService.CHANNEL_SUSPENDED_BY_PROVIDER = 10012;

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
blackberry.push.PushService.CREATE_SESSION_NOT_DONE = 10100;

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
blackberry.push.PushService.NETWORK_FAILURE = 10103;

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
blackberry.push.PushService.OPERATION_NOT_SUPPORTED = 10105;

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
blackberry.push.PushService.CREATE_CHANNEL_NOT_DONE = 10106;

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
blackberry.push.PushService.MISSING_PORT_FROM_PPG = 10107;

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
blackberry.push.PushService.MISSING_SUBSCRIPTION_RETURN_CODE_FROM_PPG = 10108;

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
blackberry.push.PushService.PPG_CURRENTLY_NOT_AVAILABLE = 10110;