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
 * @namespace The Invoke object contains methods that interact with other applications on a BlackBerry PlayBook. 
 * <p/>
 * The invoke() method on the invoke object allows you to pass arguments to the target application. </br>The types of arguments can be one of: {@link blackberry.invoke.AddressBookArguments}, {@link blackberry.invoke.BrowserArguments},
 {@link blackberry.invoke.CalendarArguments}, {@link blackberry.invoke.CameraArguments}, {@link blackberry.invoke.JavaArguments}, {@link blackberry.invoke.MapsArguments}, {@link blackberry.invoke.MemoArguments}, {@link blackberry.invoke.MessageArguments},
 {@link blackberry.invoke.PhoneArguments}, {@link blackberry.invoke.SearchArguments}, and {@link blackberry.invoke.TaskArguments}.
 * @toc {Invoke} Invoke
 * @featureID blackberry.invoke
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * function startCameraApp() {
 *              var args = new blackberry.invoke.CameraArguments();
 *              args.view = blackberry.invoke.CameraArguments.VIEW_RECORDER;
 *
 *              blackberry.invoke.invoke(blackberry.invoke.APP_CAMERA, args);
 * }
 *  
 * startCameraApp();
 * &lt;/script&gt;
 */
blackberry.invoke = {
		
		/**
		 * @name blackberry.invoke.invoke^9
		 * @function
		 * @description Invokes an application.
		 * @param {Number} appType an integer value representing the type of application to launch. Must be one of the 'APP_*' constants.
		 * @param {Object} [args] An arguments object specifying information for the application being invoked.
		 * @throws {Exception} If values supplied are not correct. 
		 * @BB50+
		 * @PB10
		 */
		 /**
		 * @name blackberry.invoke.invoke^8
		 * @description Invokes the Phone application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'phone' for Bluetooth Phone.
		 * @param {String} [args.dailString] Optional parameter specifying the Number to dial; this may contain special dialing characters in addition to the components of a traditional phone number. 
		 * @param {String} [args.smartDailing] Optional parameter. If true, smart dialing will be enabled. Smart dialing is ignored if a line id is specified. 
		 * @param {String} [args.lineId] Optional ID of the line to use for the call. If not specified the default line is used. Line ID cannot be specified when VIEW_VOICEMAIL is used. This will cause the invocation to throw an IllegalArgumentException. 
		 * @param {String} view Value that specifies what kind of view you want to open in the Phone application. 
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokePhone(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=phone&args.dailstring=555-555-5555&args.smartdailing=true&args.view=0"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokePhone();" value="Invoke Phone"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */
		 /**
		 * @name blackberry.invoke.invoke^7	
		 * @description Invokes the Bluetooth Config application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'bluetoothconfig' for Bluetooth Config.
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeBlue(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=bluetoothconfig"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeBlue();" value="Invoke Bluetooth"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 /**
		 * @name blackberry.invoke.invoke^6	
		 * @description Invokes the Calculator application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'calculator' for Calculator
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeCalc(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=calculator"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeCalc();" value="Invoke Calculator"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 /**
		 * @name blackberry.invoke.invoke^5	
		 * @description Invokes the Browser application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. For browser, the appType is the URL that needs to be invoked
		 * @param {String} [args.transport.uid] an optional parameter for BB5.0+ only representing the transport type that the browser should use. If no parameter is specified the default browser configured for the device will be used.
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeBrowser(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=http://www.blackberry.com"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokebBrowser();" value="Invoke Browser"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 /**
		 * @name blackberry.invoke.invoke^4	
		 * @description Invokes the Message application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'message' for Message.
		 * @param {String} view Value that specifies what kind of view you want to view in Messages application. If MessageArguments object is created with a Message object or 'to','subject','body' values, the view is 'VIEW_NEW' regardless if any other value is assigned. 
		 * @param {String} [args.to] The recipient's email address 
		 * @param {String} [args.subject] The message's subject line 
		 * @param {String} [args.body] The contents of the message 
		 * @param {String} [args.message] Stringified blackberry.message.Message JSON Object
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeCamera(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=messages&args.view=0&args.to=foo@domain.com&args.subject=hello&args.body=world"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeCamera();" value="Invoke Camera"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 /**
		 * @name blackberry.invoke.invoke^3	
		 * @description Invokes the Camera application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'camera' for Camera.
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeCamera(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=camera"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeCamera();" value="Invoke Camera"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		/**
		 * @name blackberry.invoke.invoke^2	
		 * @description Invokes the Search application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'search' for Search.
		 * @param {String} [args.text] The text string to pass to the Search application 
		 * @param {String} [args.name] The name string to pass to the Search application 
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeSearch(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=search&args.text=build&args.name=Tim"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeSearch();" value="Invoke Search"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 		/**
		 * @name blackberry.invoke.invoke^1	
		 * @description Invokes the Video Camera application on the BlackBerry.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'camera' for Camera.
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeVideoCamera(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=videocamera"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeVideoCamera();" value="Invoke Video Camera"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		 /**
		 * @name blackberry.invoke.invoke
		 * @description Invokes a Java application on the BlackBerry Playbook.
		 * @param {String} appType is a string value that represents the type of application to launch. Must be 'java' for Java Applications.
		 * @param {String} args.uri URL which can be in any form and is passed in the arguments to main. The uri can be in the format: 'appName', 'appName.entryPoint' or 'appName[.entryPoint]?arg1=val&arg2=val'.
		 * @param {String} [args.params] String array that contains additional parameters. Each entry in the params array should be in a name value pair such as 'arg1=val1'.
		 * @BB50+
		 * @uri
		 * @function
		 * @example 
		 * &lt;html&gt;
		 * &lt;head&gt;
		 *     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
		 *     &lt;script type="text/javascript"&gt;
		 *          function invokeJava(){
		 *              $.ajax({
		 *                  type: "post",
		 *                  url: "http://webworks/blackberry/invoke/invoke?appType=java&args.uri=net_rim_bb_memo_app"
		 *               });
		 *           }
		 *      &lt;/script&gt;    
		 *&lt;/head&gt;
		 *&lt;body&gt;
		 *    &lt;input type="button" onclick="invokeJava();" value="Invoke Java App"/&gt; 		 
		 *&lt;/body&gt;
		 *&lt;/html&gt;
		 *
		 */ 
		invoke : function(appType, args){},
		
		/**
		 * @default 0
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Address Book.
		 */

         APP_ADDRESSBOOK : 0,
		/**
		 * @default 1
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Bluetooth Configuration.
		 */

         APP_BLUETOOTH_CONFIG : 1,
		/**
		 * @default 2
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Calculator.
		 */

         APP_CALCULATOR : 2,
		/**
		 * @default 3
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Calendar.
		 */

         APP_CALENDAR : 3,
		/**
		 * @default 4
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Camera.
		 */

         APP_CAMERA : 4,
		/**
		 * @default 5
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Maps.
		 */
		APP_MAPS : 5,
		/**
		 * @default 6
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Memopad.
		 */

         APP_MEMOPAD : 6,
		/**
		 * @default 7
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Messages Application.
		 */

         APP_MESSAGES : 7,
		/**
		 * @default 8
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Phone.
		 */

         APP_PHONE : 8,
		/**
		 * @default 9
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Search.
		 */

         APP_SEARCH : 9,
		/**
		 * @default 10
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke the Tasks.
		 */
		APP_TASKS : 10,
		/**
		 * @default 11
		 * @type Number
		 * @constant
		 * @BB50+
		 * @PB10
		 * @description Browser.
		 */
		APP_BROWSER : 11,
		/**
		 * @default 12
		 * @type Number
		 * @constant
		 * @BB50+
		 * @description Constant used to invoke a Java Application.
		 */
		APP_JAVA : 12,
		/**
		 * @default 13
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Music Application.
		 */
		APP_MUSIC : 13,
		/**
		 * @default 14
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Photos Application.
		 */
		APP_PHOTOS : 14,
		/**
		 * @default 15
		 * @type Number
		 * @constant
		 * @PB10
		 * @description Videos Application.
		 */
		APP_VIDEOS : 15,
		/**
		 * @default 16
		 * @type Number
		 * @constant
		 * @PB10
		 * @description App World Application.
		 */
		APP_APPWORLD : 16
		
}

