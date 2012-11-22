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
 * @class The <code>MessageAttachment</code> object contains the information of an attachment for an email.
 * @toc {PIM} MessageAttachment
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.MessageAttachment = {};

/**
 * @function
 * @description Save the attachment to the file system.
 * @param {String} filePath The file path in the file system that the attachment will be saved.
 * @param {function} onSaveSuccess The callback function that will be invoked when the attachment is saved successfully.
 * @param {function} onSaveError The callback function that will be invoked when an error happens.
 * @callback {MessageError} onSaveError.error The detailed error code when an error happens.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.message.MessageAttachment.prototype.save = function () {};

/**
 * Contains the name of the attachment.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageAttachment.prototype.name = { };

/**
 * Contains the mime type of the attachment.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageAttachment.prototype.mimeType = { };
