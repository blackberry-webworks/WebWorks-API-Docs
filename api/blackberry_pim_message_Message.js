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
 * @class The Message object represents an email item in the device. It can be obtained by calling blackberry.pim.message.MessageService.create() or blackberry.pim.message.MessageService.find()
 * @toc {PIM} Message
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.Message = {};

/**
 * @description The globally unique identifier.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.id = "";

/**
 * @description The addresses used in the email.
 * @type blackberry.pim.message.MessageAddress[]
 * @BB10X
 */
blackberry.pim.message.Message.prototype.addresses = "";

/**
 * @description The addresses used in the email.
 * @type blackberry.pim.message.MessageAttachments[]
 * @BB10X
 */
blackberry.pim.message.Message.prototype.attachments = "";

/**
 * @description The subject of the email.
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.subject = "";

/**
 * @description The body text of the email.
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.body = "";

/**
 * @description The MIME type of the body text. It is either "text" or "html".
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.bodyType = "";

/**
 * @description The message folder of the email.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.folder = "";

/**
 * @description The message account of the email.
 * @readOnly
 * @type blackberry.pim.message.MessageAccount
 * @BB10X
 */
blackberry.pim.message.Message.prototype.account = null;

/**
 * @description Indication of whether the email has been read. It is only valid if the status is "received".
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.Message.prototype.read = "";

/**
 * @description The follow up status of the email. It is only valid if the status is "received".
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.followup = "";

/**
 * @description Indication of whether the email is flagged. It is only valid if the status is "received".
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.Message.prototype.flagged = "";

/**
 * @description Indication of the importance of the email.
 * @type Number
 * @BB10X
 */
blackberry.pim.message.Message.prototype.priority = "";

/**
 * @description The indication of the status of the email. It is one value among "new", "draft", "sent", "received"
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.message.Message.prototype.status = "";

/**
 * Send the unsent message. An error callback is called with an error code if an error happens.
 * @param {function} onSendSuccess The callback function that will be invoked when the message is sent successfully.
 * @param {function} onSendError The callback function that will be invoked when an error happens.
 * @callback {MessageError} onSendError.error The detailed error code when an error happens.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.message.Message.prototype.send = function () {};

/**
 * Save the message to draft or update the message with the changes. An error callback is called with an error code if an error happens.
 * @param {function} onSaveSuccess The callback function that will be invoked when the message is saved successfully.
 * @param {function} onSaveError The callback function that will be invoked when an error happens.
 * @callback {MessageError} onSaveError.error The detailed error code when an error happens.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.message.Message.prototype.save = function () {};

/**
 * Remove an attachment from the email.
 * @param {Number} index The index of the attachment.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.message.Message.prototype.removeAttachment = function () {};

/**
 * Add an attachment to the email.
 * @param {String} name The display name that will be used for the attachment.
 * @param {String} mimeTyep The mime type of the attachment that will be added.
 * @param {String} filePath The file path of the attachment that will be added.
 * @returns {void}
 * @BB10X
 * @example
 * function test() {
 *     var email = blackberry.pim.message.MessageService.create(),
 *         MessageAddress = blackberry.pim.message.MessageAddress;
 *
 *     console.log("email.status: " + email.status); // status is "new" now
 *
 *     email.addresses = [new MessageAddress(MessageAddress.TO, "Eric", "eric@rim.com"),
 *                        new MessageAddress(MessageAddress.TO, "Sergey", "sergey@rim.com"),
 *                        new MessageAddress(MessageAddress.CC, "Hassan", "hassan@rim.com"),];
 *     email.subject = "Test";
 *     email.body = "Some body";
 *     email.addAttachment("attachment1", "text/plain", "myTextAttachment.txt");
 *     email.send(onSuccess, onError);
 * }
 */
blackberry.pim.message.Message.prototype.addAttachment = function () {};
