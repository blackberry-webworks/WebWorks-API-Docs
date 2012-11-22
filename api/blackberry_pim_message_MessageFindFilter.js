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
 * @class The MessageFindFilter object captures all the searchable parameters for finding message(s).
 * @toc {PIM} MessageFindFilter
 * @featureID blackberry.pim.message
 * @constructor Constructor for a new MessageFindFilter object.
 * @param {String} [subject] Optional. Indicates search to apply for message Subject field.
 * @param {String} [body] Optional. Indicates search to apply for message Body field.
 * @param {String} [fromAddress] Optional. Indicates search to apply for message FromAddress field.
 * @param {String} [recipient] Optional. Indicates search to apply for message Recipient field.
 * @param {Boolean} [read] Optional. Indicates whether search to apply for read or unread messages. The default value is null: both read and unread messages will be returned. If set to true, only read messages will be returned; if set to false, only unread messages will be returned.
 * @param {Boolean} [flagged] Optional. Indicates whether search to apply for flagged or unflagged messages. The default value is null: both flagged and unflagged messages will be returned. If set to true, only flagged messages will be returned; if set to false, only unflagged messages will be returned.
 * @param {Boolean} [today] Optional. Indicates search to apply for messages that were received today. The default value is null: all messages will be returned. Only if the value is set to true, only messages that were received today will be returned.
 * @param {Boolean} [yesterday] Optional. Indicates search to apply for messages that were received yesterday. The value is null: all messages will be returned. Only if the value is set to true, only messages that were received yesterday will be returned.
 * @param {Boolean} [lastWeek] Optional. Indicates search to apply for messages that were received last week. The value is null: all messages will be returned. Only if the value is set to true, only messages that were received last week will be returned.
 */
blackberry.pim.message.MessageFindFilter = {};

/**
 * @description Indicates search to apply for message Subject field. By setting the subject, the user instructs the
 * back-end to return only messages whose Subject field contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.subject = "";

/**
 * @description Indicates search to apply for message Body field. By setting the subject, the user instructs the
 * back-end to return only messages whose Body field contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.body = "";

/**
 * @description Indicates search to apply for message FromAddress field. By setting the subject, the user instructs the
 * back-end to return only messages whose FromAddress field contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.fromAddress = "";

/**
 * @description Indicates search to apply for message Recipient field. By setting the subject, the user instructs the
 * back-end to return only messages whose Recipient field contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.recipient = "";

/**
 * @description Indicates whether search to apply for read or unread messages or both. The default value is null: both read and unread messages will be returned.
 * If set to true, only read messages will be returned; if set to false, only unread messages will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.read = null;

/**
 * @description Indicates whether search to apply for flagged or unflagged messages. The default value is null: both flagged and unflagged messages will be returned.
 * If set to true, only flagged messages will be returned; if set to false, only unflagged messages will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.flagged = null;

/**
 * @description Indicates search to apply for messages that were received today. The default value is null: all messages will be returned.
 * Only if the value is set to true, only messages that were received today will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.today = null;

/**
 * @description Indicates search to apply for messages that were received yesterday. The default value is null: all messages will be returned.
 * Only if the value is set to true, only messages that were received yesterday will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.yesterday = null;

/**
 * @description Indicates search to apply for messages that were received last week. The default value is null: all messages will be returned.
 * Only if the value is set to true, only messages that were received last week will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.message.MessageFindFilter.prototype.lastWeek = null;
