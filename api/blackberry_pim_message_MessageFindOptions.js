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
 * @class The MessageFindOptions object contains options that are used by {@link blackberry.pim.message.MessageService.find}().
 * @toc {PIM} MessageFindOptions
 * @featureID blackberry.pim.message
 * @constructor Constructor for a new MessageFindOptions object.
 * @param {blackberry.pim.message.MessageAccount} [account] Optional. This specifies the message account under which the search will be conducted. The default value is null, which means the search will be conducted under all the existing message accounts.
 * @param {blackberry.pim.message.MessageFolder} [folder] Optional. This specifies the message folder under which the search will be conducted. The default value is null, which means the search will be conducted under all the message folders.
 * @param {blackberry.pim.message.MessageFindFilter} [filter] Optional. A MessageFindFilter object that specifies criterias for the search. The default value is null, which means it will return all messages.
 * @param {Number} [offset] Optional. Set the offset for the search. The default value is 0, which means it will start the search from the first message. If either account or folder is null, the set value will be ignored.
 * @param {Number} [limit] Optional. Set the maximum number of results to return from the search. The default value is -1, which means all matching messages will be returned. If either account or folder is null, the set value will be ignored.
 */
blackberry.pim.message.MessageFindOptions = {};

/**
 * @description The message account under which the search will be conducted.
 * @type blackberry.pim.message.MessageAccount
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.account = null;

/**
 * @description The message folder under which the search will be conducted.
 * @type blackberry.pim.message.MessageFolder
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.folder = null;

/**
 * @description A search filter with which specifies criterias for the search.
 * @type blackberry.pim.message.MessageFindFilter
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.filter = null;

/**
 * @type Number
 * @description The beginning offset for the serach.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.offset = 0;

/**
 * @type Number
 * @description The maximum number of returned results.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.limit = -1;

