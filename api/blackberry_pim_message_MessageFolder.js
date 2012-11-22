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
 * @class The <code>MessageFolder</code> object contains the folder information for a MessageAccount object.
 * @toc {PIM} MessageFolder
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.MessageFolder = {};

/**
 * Contains the unique identifier of the message folder.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFolder.prototype.id = { };

/**
 * Contains the name of the message folder.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFolder.prototype.name = { };

/**
 * Contains the type of the message folder.
 * @type Number
 * @BB10X
 */
blackberry.pim.message.MessageFolder.prototype.type = { };
