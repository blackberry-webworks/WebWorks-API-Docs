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
* @toc {User Identity} User Identity 
* @BB10X
* @namespace The User Identity object contains information regarding the user&apos;s identity and accounts on a BlackBerry smartphone.
*
* <h3>Identity Service SDK Overview - interfaces for using Identity
* Services from 3rd Party applications</h3><br />
*
* <p><b>What functionality does this Identity Service SDK provide to apps?</b>
*
* <p>This SDK provides a series of functions that enable an application to choose an
* identity provider(s) for their application, and to request authentication tokens
* from that provider, as well as information about the user.
*
* <p>At present, the only Identity Provider available is BlackBerry ID. As more
* identity providers become available, this SDK will provide access to those
* providers.
*
*
* <p><b>Why integrate with Identity Service?</b>
*
* <p>If your app needs to interact with an off-device service that requires user
* authentication, you can integrate with Identity Service to provide seamless
* access to the off-device service. The interaction from the app to the off-device
* service is 'seamless' because the user is not prompted within the app for the
* username and password required by the off-device service. Instead, BlackBerry ID
* can pass back a 'token' that authenticates the user's identity, and that token
* can be read and understood by the off-service device, thus allowing the user
* access to that off-device content WITHOUT requiring user interaction for
* authentication.
*
* <p><b>Fictitious Example</b>: Imagine an app called 'MyPics' that has a user's
* photo content stored off-device, and the content is accessible from the web and
* from BlackBerry devices. If 'MyPics' is integrated with BlackBerry ID
* (i.e. we've created a token specifically for them), the app can request a token
* from BlackBerry ID to confirm the user's identity. The app can send that token
* to the off-device content service for 'MyPics', as a way of 'signing in' that
* user to their MyPics account WITHOUT requiring the user to enter a username and
* password within the 'MyPics' app. The result is a seamless user experience for
* the app; the user will get their photos on the device without having to sign in
* to the 'MyPics' service. Since they are already signed in to their device with
* their BlackBerry ID, and since the app is integrated with BlackBerry ID to use
* tokens, it all happens without any user annoyance of being prompted to 'sign in'
* to MyPics.
*
* <p>Even if your app doesn't need to communicate with off-device services using
* tokens, there are other useful APIs in this SDK that provide access the user's
* account information (first name, last name, screen name, or username).
*
* <p>The next section provides a more detailed technical overview of the APIs that
* provide this functionality.<br />
*
*
* <p><b>Identity Service SDK functionality - API overview</b>
*
* <p>This Identity Service WebWorks SDK provides an interface for applications to make
* use of BlackBerry ID functionality from within their app.
*
* <p>The APIs provided in this SDK enable apps to do the following:
* - retrieve the account information of the user who is signed in with their
* BlackBerry ID on the BB10 device. The API <b>getProperties()</b> can be
* used to retrieve the user's first name, last name, username, and screenname.  The
* <b>createProperty</b>, <b>setProperty</b>, and <b>deleteProperty</b> are used to
* store and manage data that an application would like to store about a user.
*
* <p>- retrieve tokens that prove the user's identity for off-device services
* <i>(known as 'relying parties', because they are <b>relying</b> on BlackBerry ID
* to confirm the user's identity)</i>, so that the user can have seamless access
* to that off-device service without being required to enter their username and
* password. These tokens are used by the off-device service (relying party) to
* confirm the identity of the user. <b>NOTE: The APIs <b>getToken()</b> and
* <b>clearToken()</b> can only be used if the relying party has gone through
* integration process with RIM to have tokens defined for that relying party.</b>
*
* <p>- for background services where it doesn't make sense to show any screens to the
* user (i.e. background services that do not have any UI), suppress the ability
* for the Identity Service to pop up an authentication/password confirmation
* dialog box. The API <b>setOption()</b> is provided to ensure that the
* Identity Service does not present a pop up screen for authentication/password
* verification within background services where that wouldn't make sense.
*
* <p><b>Important</b>: There is never a need for an application to present a
* "sign in" screen to the user. All the IDS APIs listed above will check to see if
* their is a BlackBerry ID associated with the device, and if there isn't one,
* they will pop an authentication (sign in) screen on the device (unless the
* calling app runs in the background and has 'set_GUI_allowed = False' to
* specifically prevent this from happening.)
*
* <p><b>About Callback functions</b>
*
* <p>Several IDS APIs have the following 2 parameters:
* -    Success callback function
* -    Failure callback function
*
* <p>The Identity Service responds asynchronously to API calls made by an
* application. Upon detection of a response, the IDS library will parse the
* response (which will either be success or failure), and invoke the corresponding
* callback function that the app has provided for the success or failure case.
*
* <p>So the callback functions are a mechanism for IDS library to pass the parsed
* response from the daemon back to the calling application. The callback functions
* cannot be NULL; the app must specify what to do in both the success and failure
* scenarios.
*
* <p><b>Integrating an application with IDS APIs</b>
*
*
* <p>The calling app uses the function <b>registerProvider()</b> which will
* connect the app to an Identity Service. This step must be done
* <i>before</i> the app calls any of the IDS APIs described above
* (getToken(), clearToken(), etc). After the app makes an API call to
* one of the IDS APIs listed above (i.e. getToken), the IDS library will
* asynchronously process that request, and call the success/failure callback provided.
*
* @featureID blackberry.user.identity
* @permission access_bbid_pii Permits your app to access user identity information including
* tokens, core user properties, and the ability to store secondary user properties.
* @permission _sys_access_identity_services_second_party Permits your app to access user
* identity information including core user properties and the ability to store secondary
* user properties.
* @permission _sys_access_identity_services_third_party Permits your app to access user
* identity information including the ability to store secondary user properties.
*/

blackberry.user.identity = {

/**
 * The getVersion() function retrieves the version of the IDS library
 * that your application is using.
 * @BB10X
 * @returns {int}
 * 	"1000000"
 * @example 
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   alert(&quot;Identity Service version is:&quot; + blackberry.user.identity.getVersion());
* &lt;&sol;script&gt; */
getVersion : function(){},

/**
 * Applications use this function to register which Identity Provider(s) that
 * they want to use.  Once the application has initialized the library, it can
 * register for each of the identity providers it is interested in.
 * @param {String} name The name of the identity provider that the application wants to
 * use for retrieving user identity information (only BlackBerry ID is supported
 * at this time).
 * @returns {int} result
 * @BB10X
 * @example 
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	var registerResult = blackberry.user.identity.registerProvider("ids:rim:bbid");
	if( registerResult.errorDescription ) {
		alert("IDS register provider error: " + registerResult.result + " with description: " + registerResult.errorDescription);
	}
 * &lt;&sol;script&gt;
*/
registerProvider : function(name) { },


/**
 * Configure an option in the Identity Services library.  These options allow an
 * application to modify the default behavior of the IDS library as well as
 * configure the way the library and application integrate together.
 * <p>Available options are:
 * <p> Set GUI Allowed (option = 0, value = true/false)
 * <p>Option to set whether or not GUI allowed flag is set.  Value is "true" or
 * "false".  By default, in cases where user input is required, the Identity
 * Service performs the user interaction on behalf of the calling
 * application.  If this has been set to false, and user input is required,
 * the API will return an error.  If no user interaction is required to
 * complete the API, this setting has no effect.
 * <p> Set Group ID (option = 1, value = groupId)
 * <p> Set the group ID of the calling application for UI dialogs.  String
 * version of UI group id.  This is required in cases where the Identity
 * Service requires user input from the user and must open an interface in
 * the context of the calling application.
 * <p> Set Verbosity (option = 2, value = {"Silent", "Normal", "Verbose")
 * <p> Set the library logging verbosity level.  Useful during application
 * development to allow developers to be able to increase logging for
 * diagnostics. Note that IDS logs are generated on stderr, and so should be
 * captured in the application's log file.
 * @param {int} option The option to be modified.
 * @param {String} value The new string value to set
 * @returns {int}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	var setOptionResult = blackberry.user.identity.setOption(0, true);
	if( setOptionResult.errorDescription ) {
		alert("IDS set option error: " + setOptionResult.result + " with description: " + setOptionResult.errorDescription);
	}
 * &lt;&sol;script&gt;
 */
setOption : function(option, value) { },

/**
 * Issue a get token request.
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {String} tokenType A token type. It must be NOT NULL
 * and 32 characters >= tokenType > 0 character
 * @param {String} appliesTo The application or service to which the token applies. It
 * must be NOT NULL and 96 characters >= applies_to > 0 character
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {JSON} successCallback.tokenResult A JSON object containing a token and it's information in the form below:
     * <pre>{
     * "token": "ghdaj23i8rghaepeghk;a",
	 * "params": ["name":"TOKEN_SECRET","value":"oguireqhge"]
     * }</pre>
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50009",
	* "errorDescription":"The appliesTo value is not valid"
	* }</pre>
 *
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50009: The appliesTo value is not valid.
 * <p>- 50008: The tokenType value is not valid.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be authenticated.
 * <p>- 50011: The service is currently offline and
 * and cannot retreive the requested token.
 * <p>- 50012: An error occurred communicating with
 * the service.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function getTokenSuccess(tokenResult) {
		alert("Received token: " + tokenResult.token);
		for( param in tokenResult.tokenParams ) {
			alert("Token param: " + tokenResult.tokenParams[param].name + " and value: " + tokenResult.tokenParams[param].value);
		}
	}
			
	function getTokenFailure(result) {
		alert("Failed to retrieve token - result is: " + result.result + " with description: " + result.errorDescription);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.getToken("ids:rim:bbid", "MyTokenType", "urn:token:myapplication", getTokenSuccess, getTokenFailure);
 * &lt;&sol;script&gt;
*/
getToken : function(idsProvider, tokenType, appliesTo, successCallback, failureCallback) { },

/**
 * Issue a clear token request.  In cases where the token seems to be invalid or
 * too close to expiry to be deemed useful, an application can clear out the
 * currently cached token in order to retrieve a newly generated token in the
 * next getToken() call.
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {String} tokenType A token type. It must be NOT NULL
 * and 32 characters >= tokenType > 0 character
 * @param {String} appliesTo The application or service to which the token applies. It
 * must be NOT NULL and 96 characters >= applies_to > 0 character
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {JSON} successCallback.result A JSON object containing the in the form below:
     * <pre>{
     * "result": true
     * }</pre>
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50009",
	* "errorDescription":"The appliesTo value is not valid"
	* }</pre>
 *
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50009: The appliesTo value is not valid.
 * <p>- 50008: The tokenType value is not valid.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be
 * authenticated.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function clearTokenSuccess(clearTokenResult) {
		alert("Token cleared: " + clearTokenResult.cleared);
	}
			
	function clearTokenFailure(result) {
		alert("Failed to clear token - result is: " + result.result + " with description: " + result.errorDescription);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.clearToken("ids:rim:bbid", "MyTokenType", "urn:token:myapplication", clearTokenSuccess, clearTokenFailure);
 * &lt;&sol;script&gt;
*/
clearToken : function(idsProvider, tokenType, appliesTo, successCallback, failureCallback) { },

/**
 * Issue a request for a property.
 *
 * @param {String} provider The identity provider to send this request to.
 * @param type The type of properties contained in the @c propertyList
 * parameter. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param {String} propertyList A comma separated string listing each of the properties
 * requested
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {JSON} successCallback.result A JSON object containing the in the form below:
     * <pre>{[
 * 		{"uri":"urn:bbid:firstname":"value":"john"},
		{"uri":"urn:bbid:lastname":"value":"doe"}
     * }</pre>
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50004",
	* "errorDescription":"The user could not be authenticated."
	* }</pre>
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be authenticated.
 * <p>- 50011: The service is currently offline and
 * and cannot retreive the requested token.
 * <p>- 50002: The length of a property name in the list exceeds
 * the maximum name length (32).
 * <p>- 50017: The application does not have access to
 * one of the requested properties.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function getPropertiesSuccess(properties) {
		alert("Get properties returned the following user properties:");
		for( prop in properties ) {
			alert("Property: " + properties[prop].uri + " value: " + properties[prop].value);
		}
	}

	function getPropertiesFailure(result) {
		alert("Failed to retrieve user properties: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.getProperties("ids:rim:bbid", 0, "urn:bbid:firstname,urn:bbid:lastname", getPropertiesSuccess, getPropertiesFailure);
 * &lt;&sol;script&gt;
*/
getProperties : function(idsProvider, 0, userProperties, successCallback, failureCallback) { };

/**
 * Issue a request to set a property
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of property contained in  @c property
 * parameter. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param {String} propertyName The property identifier
 * @param {String} propertyValue The content of the property
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50004",
	* "errorDescription":"The user could not be authenticated."
	* }</pre>
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be authenticated.
 * <p>- 50107: The value of the propertyName must not be empty
 * <p>- 50002: The length of a property name in the list exceeds
 * the maximum name length (32).
 * <p>- 50017: The application does not have access to the
 * requested property.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function setPropertySuccess() {
		alert("Set property was successful");
	}

	function setPropertyFailure(result) {
		alert("Failed to set user property: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.setProperty("ids:rim:bbid", 1, "urn:myapp:usershandle", "johndoe123", setPropertySuccess, setPropertyFailure);
 * &lt;&sol;script&gt;
*/
setProperty : function(idsProvider, 0, propertyName, propertyValue, successCallback, failureCallback) { };

/**
 * Issue a request to create a property
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of property contained in  @c property
 * parameter. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param {String} propertyName The property identifier
 * @param {String} propertyValue The content of the property
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50004",
	* "errorDescription":"The user could not be authenticated."
	* }</pre>
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be authenticated.
 * <p>- 50107: The value of the propertyName must not be empty
 * <p>- 50002: The length of a property name in the list exceeds
 * the maximum name length (32).
 * <p>- 50017: The application does not have access to the
 * requested property.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function createPropertySuccess() {
		alert("Create property was successful");
	}

	function createPropertyFailure(result) {
		alert("Failed to create user property: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.createProperty("ids:rim:bbid", 1, "urn:myapp:usershandle", "johndoe123", createPropertySuccess, createPropertyFailure);
 * &lt;&sol;script&gt;
*/
createProperty : function(idsProvider, 0, propertyName, propertyValue, successCallback, failureCallback) { };

/**
 * Issue a request to delete a property
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of property contained in  @c property
 * parameter. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param {String} propertyName The property identifier
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 * @callback {JSON} failureCallback.result A JSON object containing details of the failure in the form below:
	*<pre>{
	* "result":"50004",
	* "errorDescription":"The user could not be authenticated."
	* }</pre>
 * <p><b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * <p>- 49999: An internal error has occurred attempting to process
 * the request.
 * <p>- 50010: There are not enough resources available to
 * process the request.
 * <p>- 50003: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- 50004: The user could not be authenticated.
 * <p>- 50107: The value of the propertyName must not be empty
 * <p>- 50002: The length of a property name in the list exceeds
 * the maximum name length (32).
 * <p>- 50017: The application does not have access to the
 * requested property.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function deletePropertySuccess() {
		alert("Delete property was successful");
	}

	function deletePropertyFailure(result) {
		alert("Failed to delete user property: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.deleteProperty("ids:rim:bbid", 1, "urn:myapp:usershandle", deletePropertySuccess, deletePropertyFailure);
 * &lt;&sol;script&gt;
*/
deleteProperty : function(idsProvider, 0, propertyName, successCallback, failureCallback) { };
};