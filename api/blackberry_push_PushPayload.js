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
* @toc {Push} PushPayload 
* @class The PushPayload object provides access to the payload that has arrived as the result of a push.  
* This object cannot be created by the new keyword.  It is generated only by the system on receipt of a push notification.
* @BB10X
* @featureID blackberry.push
*/
blackberry.push.PushPayload = {
	
	/**
	* Gets the header value matching the given header name. 
	* @param {String} headerName The header name.
	* @returns {String} Returns the header value.
	* @BB10X 
	* @function
	*/
	getHeader : function(headerName) { },

	/**
	* Gets all the headers associated with a push.
	* @returns {Object} Returns all the headers.
	* @BB10X 
	* @function
	*/
	getHeaders : function() { },
};

/**
* The ID of a push.
* @type String
* @readOnly 
* @BB10X 
*/
blackberry.push.PushPayload.prototype.id = undefined;

/**
* The data (payload) of a push.
* @type Blob
* @readOnly 
* @BB10X 
*/
blackberry.push.PushPayload.prototype.data = undefined;

/**
* Indicates whether or not a developer must acknowledge the receipt of a push.
* True if an acknowledgement is required for the push; false otherwise.
* @type Boolean
* @readOnly 
* @BB10X 
*/
blackberry.push.PushPayload.prototype.isAckRequired = undefined;
