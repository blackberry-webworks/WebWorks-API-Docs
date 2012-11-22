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
 * @class The <code>MessageService</code> object provides functions for creating and finding contacts as well as getting the message accounts.
 * @toc {PIM} MessageService 
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.MessageService = {};

/**
 * @function
 * @description Returns a new blackberry.pim.message.Message object.
 * @param {blackberry.pim.message.MessageAccount} [account]  Optional MessageAccount object that the message will use. If no account is specified, the message will be created in the default account.
 * @returns {blackberry.pim.message.Message}
 * @example
 * function test() {
 *     var email = blackberry.pim.message.MessageService.create(),
 *         MessageAddress = blackberry.pim.message.MessageAddress;
 *
 *     console.log("email.status: " + email.status); // status is "new" now
 *
 *     email.addresses = [new MessageAddress(MessageAddress.TO, "Eric", "eric@somedomain.com"),
 *                        new MessageAddress(MessageAddress.TO, "Sergey", "sergey@somedomain.com"),
 *                        new MessageAddress(MessageAddress.CC, "Hassan", "hassan@somedomain.com"),];
 *     email.subject = "Test";
 *     email.body = "Some body";
 *     email.addAttachment("attachment1", "text/plain", "myTextAttachment.txt");
 *     email.send(onSuccess, onError);
 *
 *     console.log("email.status: " + email.status); // status is "sent" now
 *
 *     var email2 = blackberry.pim.message.MessageService.create();
 *
 *     console.log("email2.status: " + email2.status); // status is "new" now
 *
 *     email2.subject = "Test";
 *     email2.body = "Some body";
 *     email2.save(onSuccess, onError);
 *
 *     console.log("email2.status: " + email2.status); // status is "draft" now
 * }
 * @BB10X
 */
blackberry.pim.message.MessageService.prototype.create = function () {};

/**
 * @function
 * @description Retrieves all the installed message accounts.
 * @returns {blackberry.pim.message.MessageAccount[]}
 * @BB10X
 */
blackberry.pim.message.MessageService.prototype.getMessageAccounts = function () {};

/**
 * @function
 * @description Retrieves the default message account.
 * @returns {blackberry.pim.message.MessageAccount}
 * @BB10X
 */
blackberry.pim.message.MessageService.prototype.getDefaultMessageAccount = function () {};

/**
 * @function
 * @description Find messages from the message accounts based on some criterion.
 * @param {blackberry.pim.message.MessageFindOptions} findOptions  Options to be applied to the search.
 * @param {function} onFindSuccess Success callback function that is invoked with the messages found.
 * @callback {blackberry.pim.message.Message[]} onFindSuccess.events The array of blackberry.pim.message.Message objects from the search.
 * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
 * @callback {MessageError} onFindError.error The detailed error code when error occurs.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.message.MessageService.prototype.find = function () {};

/**
 * @function
 * @description Retrieve a single Message object from a message account by the message identifier.
 * @param {blackberry.pim.message.MessageAccount} account Message account that the message belongs to.
 * @param {String} id The unique identidier of the message.
 * @returns {blackberry.pim.message.Message}
 * @BB10X
 */
blackberry.pim.message.MessageService.prototype.getMessage = function () {};
