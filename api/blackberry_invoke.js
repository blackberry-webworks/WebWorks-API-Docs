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
 * @beta
 * @namespace The Invoke object contains methods that interact with other applications.
 * <p/>
 * On BlackBerry OS 5.0+ and BlackBerry PlayBook 1.0+, the {@link blackberry.invoke.invoke^2} method on the invoke object allows you to pass arguments to the target application. </br>The types of arguments can be one of: {@link blackberry.invoke.AddressBookArguments}, {@link blackberry.invoke.BrowserArguments},
 {@link blackberry.invoke.CalendarArguments}, {@link blackberry.invoke.CameraArguments}, {@link blackberry.invoke.JavaArguments}, {@link blackberry.invoke.MapsArguments}, {@link blackberry.invoke.MemoArguments}, {@link blackberry.invoke.MessageArguments},
 {@link blackberry.invoke.PhoneArguments}, {@link blackberry.invoke.SearchArguments}, and {@link blackberry.invoke.TaskArguments}.
 * <p/>
 * On BlackBerry 10, the {@link blackberry.invoke.invoke} method will take arguments in the form of JavaScript object literal.
 * @toc {Invoke} Invoke
 * @featureID blackberry.invoke
 */
blackberry.invoke = {

		/**
		 * @description Invokes another application
		 * @param {Object} request Object literal that specifies what to invoke. None of the fields are required. Refer to the example code for more information.
		 * @param {String} [request.target] The id that identifies the component to invoke. If target is omitted, the invocation framework would perform brokering based on the specified action, type, URI or data to locate an appropriate target to invoke.
		 * @param {String} [request.action] The action to be performed by the target. You can use the ACTION_* constants or other known action strings.
		 * @param {String} [request.type] MIME type of data to be acted on. If the MIME type is not specified then the mime type would be inferred from the given URI. If the MIME type cannot be inferred or URI field is empty then invocation will be rejected.
		 * @param {String} [request.uri] URI pointing to invocation data. If no URI is provided then this implies that the invocation data is provided in-band in the data field of the invocation request.
		 * @param {String or Blob} [request.data] Data (String or Blob) to be acted upon encoded based on the specified type.<br/>NOTE: If a String is passed, make sure that it does not contain unicode characters or invocation will fail.
         * @param {String} [request.winid] A mandatory property for viewer invocation. The window ID to use when the viewer creates a window. Also can be used for application - viewer communication.
         * @param {Number} [request.width] A mandatory property for viewer invocation indicating the pixel width of the viewer.
         * @param {Number} [request.height] A mandatory property for viewer invocation indicating the pixel height of the viewer.
		 * @callback {function} onSuccess Callback function that will be triggered when the invocation is successful. Expected signature: function onSuccess().
		 * @callback {function} onError Callback function that will be triggered when invocation is not successful, or if request's data field cannot be encoded (e.g. when it contains unicode characters). Expected signature: function onError(error).
		 * @callback {String} [onError.error] A String that describes the error.
		 * @BB10X
		 * @RIPPLE
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 * function onInvokeSuccess() {
		 *     alert("Invocation successful!");
		 * }
		 *
		 * function onInvokeError(error) {
		 *     alert("Invocation failed, error: " + error);
		 * }
		 *
		 * function openWebLink() {
		 *     // open web link - allows the system to choose an appropriate target that handles http://
		 *     blackberry.invoke.invoke({
		 *         uri: "http://www.blackberry.com"
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
		 * function openWebLinkInBrowser() {
		 *     // open web link in browser
		 *     blackberry.invoke.invoke({
		 *         target: "sys.browser",
		 *         uri: "http://www.blackberry.com"
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
		 * function openMP3File() {
		 *     // open mp3 file - allows the system to choose an appropriate target that handles audio/mpeg3
		 *     blackberry.invoke.invoke({
		 *         type: "audio/mpeg3",
		 *         uri: &lt;path to mp3 file&gt;
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
		 * function viewPicture() {
		 *     // view picture
		 *     blackberry.invoke.invoke({
		 *         uri: &lt;path to jpg file&gt;,
		 *         action: blackberry.invoke.ACTION_VIEW
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
		 * function openAnotherApp() {
		 *     // open another application that understands custom data
		 *     blackberry.invoke.invoke({
		 *         target: "another.app.that.handles.custom.json.data",
		 *         type: "text/plain",
		 *         data: "{'myData': 'A string I pass to another app'}"
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
		 * function openAnotherAppWithUnicodeData(unicodeStr) {
		 *     // convert unicode string before calling invoke, the receiver app will have to
		 *     // call decodeURIComponent(escape(str)) to get the unicode string back
		 *     var convertedStr = unescape(encodeURIComponent(unicodeStr));
		 *
		 *     // open another application that understands custom data
		 *     blackberry.invoke.invoke({
		 *         target: "another.app.that.handles.unicode.data",
		 *         data: convertedStr
		 *     }, onInvokeSuccess, onInvokeError);
		 * }
		 *
         * function openViewer() {
         *
         *     blackberry.invoke.invoke({
         *        "target": "a.viewer.app",
         *        "winid": "viewer#001",
         *        "height": 600,
         *        "width": 600     
         *     }, onInvokeSuccess, onInvokeError);
         * }
		 *
		 * &lt;/script&gt;
		 */
		invoke : function(request, onSuccess, onError){},

		/**
		 * @name blackberry.invoke.invoke^2
		 * @function
		 * @description Invokes another application on the BlackBerry PlayBook or Blackberry OS 5.0+.
		 * @param {Number} appType an integer value representing the type of application to launch. Must be one of the 'APP_*' constants.
		 * @param {Object} [args] An arguments object specifying information for the application being invoked.
		 * @throws {Exception} If values supplied are not correct.
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @example
		 * &lt;script type="text/javascript"&gt;
		 *
		 *  function startCameraApp() {
		 *      var args = new blackberry.invoke.CameraArguments();
		 *      args.view = blackberry.invoke.CameraArguments.VIEW_RECORDER;
		 *
		 *      blackberry.invoke.invoke(blackberry.invoke.APP_CAMERA, args);
		 *  }
		 *
		 *  startCameraApp();
		 *  &lt;/script&gt;
		 */
		invoke : function(appType, args){},

		/**
		 * @type String
		 * @constant
		 * @BB10X
		 * @RIPPLE
		 * @description Constant for the OPEN action: open associated content in target application. Should be used in all cases where a full context switch will take place.
		 */
		ACTION_OPEN: "",

		/**
		 * @type String
		 * @constant
		 * @BB10X
		 * @RIPPLE
		 * @description Constant for the SHARE action: share associated content.
		 */
		ACTION_SHARE: "",

		/**
		 * @type String
		 * @constant
		 * @BB10X
		 * @RIPPLE
		 * @description Constant for the VIEW action: view associated content in target application.
		 */
		ACTION_VIEW: "",

       /**#@+
        * @noSignature
        * @event
        * @BB10X
        * @description This event is fired by the system. If you want to listen to the event you can do so using the {@link blackberry.event.addEventListener} function and remove the listener using the {@link blackberry.event.removeEventListener} function. <br/>
        */

       /**
        * @description The <b>invoked</b> event is triggered by the system when the application is invoked by another application.
        * @callback {function} yourCallbackFunction The callback function that will be invoked on the invoked event
        * @callback {JSON} yourCallbackFunction.info An object  the pertinent information
        * @callback {String} yourCallbackFunction.info.source [optional] Identifier of invocation target (as stated in its BAR manifest) to which the receiver can send results. Omitting the source attribute implies that the sender does NOT support results.
        * @callback {String} yourCallbackFunction.info.target [optional] Identifier of target (as stated in its BAR manifest) to which invocation should be delivered. If the target is supplied then brokering is bypassed and attempt is made to invoke the specified target.
        * @callback {String} yourCallbackFunction.info.action [optional] Identifier of action to be performed by target. Omitting action implies brokering should apply to any action supported for the specified type or that the target should infer the action.
        * @callback {String} yourCallbackFunction.info.type [optional] MIME type of data to be acted on. If the mime type is not specified then Invocation Framework would attempt to infer the mime type from the given URI. If the mime type can not be inferred or URI field is empty then invocation will be rejected.
        * @callback {String} yourCallbackFunction.info.uri [optional] URI pointing to invocation data. If no URI is provided then this implies the data://local URI indicating that the invocation data is provided in-band in the data field of the invocation message.
        * @callback {String} yourCallbackFunction.info.data [optional] Data passed to target. Omitting the data implies that the action-type are sufficient to carry out the invocation. Note that target invocation allows passing arbitrary binary data that will be encoded into Base64 encoded string.        
        * @example
        * &lt;script type="text/javascript"&gt;
        *
        * function onInvoked(onInvokedInfo) {
        *    if(onInvokedInfo.source) {
        *        console.log("Source: " + onInvokedInfo.source);
        *    }
        *    if(onInvokedInfo.target) {
        *        console.log("Target(me): " + onInvokedInfo.target);
        *    }
        *    if(onInvokedInfo.action) {
        *        console.log("Action: " + onInvokedInfo.action);
        *    }
        *    if(onInvokedInfo.data) {
        *        console.log("Data: " + onInvokedInfo.data);
        *        //the data comes in as a base64 string you can convert it using atob(...)
        *        //note that atob will fail if you are being passed unicode strings
        *        console.log("Data: " + atob(onInvokedInfo.data));
        *    }
        * }
        *
        * blackberry.event.addEventListener("invoked", onInvoked);
        *
        * &lt;/script&gt;
        */
       invoked : function(){},

        /**#@-*/

		/**
		 * @default 0
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Address Book.
		 */

         APP_ADDRESSBOOK : 0,
		/**
		 * @default 1
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Bluetooth Configuration.
		 */

         APP_BLUETOOTH_CONFIG : 1,
		/**
		 * @default 2
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Calculator.
		 */

         APP_CALCULATOR : 2,
		/**
		 * @default 3
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Calendar.
		 */

         APP_CALENDAR : 3,
		/**
		 * @default 4
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @description Camera.
		 */

         APP_CAMERA : 4,
		/**
		 * @default 5
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @description Maps.
		 */
		APP_MAPS : 5,
		/**
		 * @default 6
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Memopad.
		 */

         APP_MEMOPAD : 6,
		/**
		 * @default 7
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Messages Application.
		 */

         APP_MESSAGES : 7,
		/**
		 * @default 8
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Phone.
		 */

         APP_PHONE : 8,
		/**
		 * @default 9
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Search.
		 */

         APP_SEARCH : 9,
		/**
		 * @default 10
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke the Tasks.
		 */
		APP_TASKS : 10,
		/**
		 * @default 11
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10+
		 * @RIPPLE
		 * @description Browser.
		 */
		APP_BROWSER : 11,
		/**
		 * @default 12
		 * @type Number
		 * @constant
		 * @BB50+
		 * @RIPPLE
		 * @description Constant used to invoke a Java Application.
		 */
		APP_JAVA : 12,
		/**
		 * @default 13
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Music Application.
		 */
		APP_MUSIC : 13,
		/**
		 * @default 14
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Photos Application.
		 */
		APP_PHOTOS : 14,
		/**
		 * @default 15
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description Videos Application.
		 */
		APP_VIDEOS : 15,
		/**
		 * @default 16
		 * @type Number
		 * @constant
		 * @PB10+
		 * @RIPPLE
		 * @description App World Application.
		 */
		APP_APPWORLD : 16
}
