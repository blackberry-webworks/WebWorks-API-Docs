/*
* Copyright 2012 Research In Motion Limited.
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
 * @class The <code>MessageAccount</code> object contains the message account information for the messaging service.
 * @toc {PIM} MessageAccount
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.MessageAccount = {};

/**
 * Contains the unique identifier of the message account.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageAccount.prototype.id = { };

/**
 * Contains the name of the message account.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageAccount.prototype.name = { };

/**
 * Return all the folders of the message account.
 * @type blackberry.pim.message.MessageFolder[]
 * @BB10X
 */
blackberry.pim.message.MessageAccount.prototype.folders = { };
