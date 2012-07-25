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
 * @namespace The Contact object represents a contact in the device PIM. It can be obtained by calling {@link blackberry.pim.contacts.create} or {@link blackberry.pim.contacts.find}
 * @toc {PIM} Contact
 * @featureID blackberry.pim.contacts
 */
blackberry.pim.contacts.Contact = {};

/**
 * @description A globally unique identifier.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.id = "";

/**
 * @description The name of this Contact, suitable for display to end-users.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.displayName = "";

/**
 * @description An object containing all components of a person's name.
 * @type blackberry.pim.contacts.ContactName
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.name = null;

/**
 * @description A casual name to address the contact by.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.nickname = "";

/**
 * @description An array of all the contact's phone numbers.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.phoneNumbers = null;

/**
 * @description An array of all the contact's email addresses.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.emails = null;

/**
 * @description An array of all the contact's addresses.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.addresses = null;

/**
 * @description An array of all the contact's IM addresses.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.ims = null;

/**
 * @description An array of all the contact's organizations.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.organizations = null;

/**
 * @description The birthday of the contact.
 * @type Date
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.birthday = null;

/**
 * @description A note about the contact.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.note = null;

/**
 * @description An array of the contact's photos.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.photos = null;

/**
 * @description An array of all the contacts user defined categories.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.categories = null;

/**
 * @description  An array of web pages associated to the contact.
 * @type ContactField[]
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.urls = null;

/**
 * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
 * @param {function} onSaveSuccess The callback function that will be invoked when the contact is saved successfully.
 * @callback {Contact} onSaveSuccess.contact The Contact object.
 * @param {function} onSaveError The callback function that will be invoked when the contact cannot be saved.
 * @callback {ContactError} onSaveError.error The ContactError object which contains the error code.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.save = function () {};

/**
 * Removes the contact from the device contacts database. An error callback is called with a ContactError object if the removal is unsuccessful.
 * @param {function} onRemoveSuccess The callback function that will be invoked when the contact is removed successfully.
 * @param {function} onRemoveError The callback function that will be invoked when the contact cannot be removed.
 * @callback {ContactError} onRemoveError.error The ContactError object which contains the error code.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.remove = function () {};

/**
 * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null.
 * @returns {Contact}
 * @BB10X
 */
blackberry.pim.contacts.Contact.prototype.clone = function () {};