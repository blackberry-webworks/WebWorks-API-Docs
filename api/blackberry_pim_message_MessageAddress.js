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
* <div><p>
*       The MessageAddress object is an instance object. If a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} MessageAddress 
* @permission access_pimdomain_messaging Permits your app to access message.
* @BB10X
* @class The MessageAddress object represents an email address used for an email
* @featureID blackberry.pim.message
* @constructor Constructor for a new MessageAddress object.
* @param {Number} type The type of the email MessageAddress; it is one of MessageAddress.TO, MessageAddress.CC and MessageAddress.BCC.
* @param {String} displayName The display name of the object.
* @param {String} email The email address of the object.
* @example
*     var MessageAddress = new MessageAddress(MessageAddress.TO, "Eric", "eric@somedomain.com");
*/
blackberry.pim.message.MessageAddress = function() { };

/**
* Describes the type of the email MessageAddress; it is one of MessageAddress.FROM, MessageAddress.TO, MessageAddress.CC, MessageAddress.BCC and MessageAddress.REPLY_TO
* @type Number
* @BB10X
*/
blackberry.pim.message.MessageAddress.prototype.type = { };

/**
* Contains display name of the object
* @type String
* @BB10X
*/
blackberry.pim.message.MessageAddress.prototype.displayName = { };

/**
* Contains the email address of the object
* @type String
* @BB10X
*/
blackberry.pim.message.MessageAddress.prototype.email = { };
