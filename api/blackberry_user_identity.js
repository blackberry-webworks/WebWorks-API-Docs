/*
* Copyright 2013 Research In Motion Limited.
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
* @namespace Identity Service library SDK - The Identity Service library offers
* a framework for data storage and retrieval, access to the user's personal
* information stored in the Identity Provider's account system, and user
* authentication/authorization to access the Identity Provider's apps and
* services.

*
* <h3>Identity Service library</h3><br />
*
* <p>Developers can make use of the Identity Service library APIs to enhance their app in several ways:
* - Data storage and retrieval
* - User authentication and authorization to access apps and off-device services offered by the Identity Provider (without prompting for credentials)
* - Access to the user's personal information stored in the Identity Provider's account system
* 
* <p>These capabilities are described further in the sections below, and the specific implementation will vary for each Identity Provider. For example, the data storage and retrieval APIs might
* provide off-device data storage, or on-device data storage - that could differ between one Identity Provider and another. Similarly, the personal information that can be retrieved with the 
* getProperties() API call will differ based on what information each Identity Provider stores in their account system.
*
* <p>As such, this document gives an overview of the Identity Service library APIs that are available, and this information must be used in conjunction with the Identity Provider's specific Identity
* Service API overview to confirm the specifics of their implementation of each of these APIs.
*
* <p><b> DataStorage_section  Data storage and retrieval APIs</b>
* 
* <p>Applications can make use of APIs in the IDS library to store and retrieve data.
* <p> APIs are provided for:
* - initial storage of the data (createData())
* - retrieving the data (getData())
* - updating the data (setData())
* - removing the data (deleteData())
* - listing the stored data (istData())

* <p><b>UserAuth_Section   User authentication without prompting for credentials</b>
* 
* <p> Developers can use the Identity Services user authentication APIs in this library to avoid the need to implement user name and password management for their app. With these APIs, once the user is signed in using their account with the Identity Provider on the device, the user is automatically signed in to the app as well.
* - Users won't need to create or remember a username and password for the app.
* - Users won't need to specifically log in to the app, thus improving the ease of use of the app.
* 
*
* <p><b>OffDeviceAuth_Section   User authorization to access apps and off-device services offered by the Identity Provider</b>
* 
* <p>If your app interacts with an off-device service that requires user authentication (for example, a web site that requires the user to sign in with a username and password),
* you can use the Identity Service APIs to perform the off-device authentication/authorization using tokens, instead of prompting the user for credentials. Your app and the off-device service interact seamlessly.
* 
* 
* <p><b>PII_Section   Access to the user's personal information associated with their account</b>
* 
* <p>The user's personal information that is available to the app will depend on what information is available from the Identity Provider's account system.
* 
* <p>For example, if the app uses BlackBerry ID as the Identity Provider, the app can access the following personal information (provided that the user gives the app their consent):
* - first name
* - last name
* - screen name
* - username
* 
* <p>For other Identity Providers, the personal information available will depend on what that provider stores in their identity account system.
* 
* <p><b>ids_callback_sec About Callback functions</b>
* 
* <p>Many of the IDS APIs have the following three parameters:
* - Success callback function
* - Failure callback function
* 
* <p>When your app sends API calls using the IDS APIs, the Identity Provider
* service responds asynchronously. When an app receives a response, the 
* corresponding callback function that your application had provided for the
* success or failure case is executed.
* 
* <p>The Identity Provider service uses callback functions to pass the parsed response
* back to your app. Callback functions cannot be NULL. Your app must specify what
* to do in both the success and failure scenarios.
* 
* 
* <p><b>bbid_modes_sec Registering your app to use the IDS APIs</b>
* 
* <p>To register your app so that it can use the IDS APIs, call
* registerProvider() from your app for at least one identity provider.
* 
* <p>After your app sends a request, the Identity Provider service will process the
* request asynchronously, and call the corresponding success/failure callback function.
* 
* <p>For example, your app can call getProperties() and pass a success
* callback of myAppSuccessCallback and a failure callback of
* myAppFailureCallback. When a response is ready from the identity provider, the
* success or failure callback will execute based on the results of the call.
*
*
*
* @featureID blackberry.user.identity
* @permission read_personally_identifiable_information Permits your app to access user
* identity information including the ability to store secondary user properties.
* @permission access_internet Permits your app to use the internet to access user data
* in remote storage.
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_UNKNOWN_APPLIES_TO: The appliesTo value is not valid.
 * <p>- IDS_UNKNOWN_TOKEN_TYPE: The tokenType value is not valid.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * <p>- IDS_CANNOT_GET_TOKEN_WHILE_OFFLINE: The service is currently offline
 * and cannot retrieve the requested token.
 * <p>- IDS_ERROR_WHILE_CONTACTING_SERVICE: An error occurred communicating
 * with the service.
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_UNKNOWN_APPLIES_TO: The @c applies_to value is not valid.
 * <p>- IDS_UNKNOWN_TOKEN_TYPE: The @c token_type value is not valid.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * <p>- IDS_TOO_MANY_NAMES_PASSED: Too many properties were requested. See
 * IDS_MAX_PROPERTY_COUNT.
 * <p>- IDS_NAME_TOO_LONG: The length of a property name in the list exceeds
 * the maximum name length IDS_MAX_PROPERTY_NAME_LEN.
 * <p>- IDS_PROPERTY_NOT_AUTHORIZED: The application does not have access to
 * one of the requested properties.
 * <p>- IDS_PROPERTY_DOES_NOT_EXIST: Property does not exist.
 * <p>- IDS_BAD_PROPERTY_NAME: Invalid property name.
 * <p>- IDS_NULL_OR_UNKNOWN_PARAMETERS: Null or invalid parameter.
 * <p>- IDS_NON_EXISTING_PROPERTY: Property does not exist.
 * <p>- IDS_PROFILE_SERVER_ERROR: Server error.
 * <p>- IDS_PROPERTY_VALUE_TOO_LARGE: Property value is too large.
 * <p>- IDS_GET_FAIL: Get failed.
 *
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
 * Issue a request to set data
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of data. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param flags Special flags for the operation. Each provider may have a unique
 * set of flags that it supports.  See the documentation for the provider for
 * details on valid values and their behaviour for this operation.
 * @param {String} dataName The data identifier
 * @param {String} dataValue The content of the data
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * <p>- IDS_NULL_OR_UNKNOWN_PARAMETERS: Null or invalid parameter.
 * <p>- IDS_DOES_NOT_EXIST: Entry with the given name does not exist.
 * <p>- IDS_NOT_ALLOWED: Application is not allowed to perform this operation.
 * <p>- IDS_ERROR_WHILE_CONTACTING_SERVICE: The provider was unable to
 * communicate with it's service to perform operation.
 * <p>- USER_RESOURCE_NAME_TOO_LONG: The name is longer than the maximum length
 *  allowed by the provider
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function setDataSuccess() {
		alert("Set property was successful");
	}

	function setDataFailure(result) {
		alert("Failed to set data: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:profile");
	blackberry.user.identity.setData("ids:rim:profile", 1, "usershandle", "johndoe123", setDataSuccess, setDataFailure);
 * &lt;&sol;script&gt;
*/
setData : function(idsProvider, 0, 0, dataName, dataValue, successCallback, failureCallback) { };

/**
 * Issue a request to create data
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of data. Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param flags Special flags for the operation. Each provider may have a unique
 * set of flags that it supports.  See the documentation for the provider for
 * details on valid values and their behaviour for this operation.
 *
 * @param {String} dataName The property identifier
 * @param {String} dataValue The content of the property
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked, token
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * <p>- IDS_NULL_OR_UNKNOWN_PARAMETERS: Null or invalid parameter.
 * <p>- IDS_ERROR_WHILE_CONTACTING_SERVICE: The provider was unable to
 * communicate with it's service to perform operation.
 * <p>- IDS_ALREADY_EXISTS: Entry with name already exists.
 * <p>- IDS_NOT_ALLOWED: Application is not allowed to perform this operation.
 * <p>- USER_RESOURCE_NAME_TOO_LONG: The name is longer than the maximum length
 *  allowed by the provider
 *
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function createDataSuccess() {
		alert("Create Data was successful");
	}

	function createDataFailure(result) {
		alert("Failed to create data: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:profile");
	blackberry.user.identity.createData("ids:rim:profile", 1, "usershandle", "johndoe123", createDataSuccess, createDataFailure);
 * &lt;&sol;script&gt;
*/
createData : function(idsProvider, 0, 0, dataName, dataValue, successCallback, failureCallback) { };

/**
 * Issue a request to data
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {int} type The type of data.Each provider may have a unique set of types that it is able to
 * handle.  See the documentation for the provider for details on valid values.
 * @param flags Special flags for the operation. Each provider may have a unique
 * set of flags that it supports.  See the documentation for the provider for
 * details on valid values and their behaviour for this operation.
 * @param {String} dataName The property identifier
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
 * <p>- IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * <p>- IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * <p>- IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked,
 * access is unavailable while locked.
 * <p>- IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * <p>- IDS_NOT_ALLOWED: The application does not have access to delete
 * the requested value.
 * <p>- IDS_NULL_OR_UNKNOWN_PARAMETERS: Null or invalid parameter.
 * <p>- IDS_DOES_NOT_EXIST: Name specified does not exist.
 * <p>- IDS_ERROR_WHILE_CONTACTING_SERVICE: The provider was unable to
 * communicate with it's service to perform operation.
 * <p>- USER_RESOURCE_NAME_TOO_LONG: The name is longer than the maximum length
 *  allowed by the provider
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function deleteDataSuccess() {
		alert("Delete data was successful");
	}

	function deleteDataFailure(result) {
		alert("Failed to delete data: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:profile");
	blackberry.user.identity.deleteData("ids:rim:profile", 1, 0, "usershandle", deleteDataSuccess, deleteDataFailure);
 * &lt;&sol;script&gt;
*/
deleteData : function(idsProvider, 0, 0, dataName, successCallback, failureCallback) { };


/**
 * Issue a request to challenge for identity
 *
 * @param {String} provider The identity provider to send this request to.
 * @param flags Special flags for the operation. Each provider may have a unique
 * set of flags that it supports.  See the documentation for the provider for
 * details on valid values and their behaviour for this operation.
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
 * - @c IDS_DEFAULT_ERROR: An internal error has occurred attempting to process
 * the request.
 * - @c IDS_NOT_ENOUGH_RESOURCES: There are not enough resources available to
 * process the request.
 * - @c IDS_ACCOUNT_LOCALLY_LOCKED_OUT: The account is currently locked,
 * access is unavailable while locked.
 * - @c IDS_USER_COULD_NOT_BE_AUTHENTICATED: The user could not be
 * authenticated.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function challengeSuccess(level) {
		alert("Challenge was successful: " + level);
	}

	function challengeFailure(result) {
		alert("Challenge failed: " + result.result + " details: " + result.failureInfo);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.challenge("ids:rim:bbid", 0, challengeSuccess, challengeFailure);
 * &lt;&sol;script&gt;
*/
challenge : function(idsProvider, 0, successCallback, failureCallback) { };


/**
 * Register a callback function to be called when the named entry
 * changes
 * @param {String} provider The identity provider to send this request to.
 * @param type The type of data referred to by name.
 * @param flags Special flags for the operation. Each provider may have a unique
 * set of flags that it supports.  See the documentation for the provider for
 * details on valid values and their behaviour for this operation.
 * @param name The name of the entry to receive notifications for.
 * @callback {Function} onChangeCallback The function that is invoked when a change is detected.
 * @returns {void}
 * @BB10X
 * @example
 * &lt;script type=&quot;text&sol;javascript&quot;&gt;
	function onChangeCb(type, name, notification) {
		alert("Notification received: " + name + " with notification: " + notification);
	}

	blackberry.user.identity.registerProvider("ids:rim:bbid");
	blackberry.user.identity.registerNotifier("ids:rim:bbid", 0, propertyName, onChangeCb);
 * &lt;&sol;script&gt;
*/
registerNotifier : function(idsProvider, 0, name, onChangeCallback) { };


};