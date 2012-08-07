/*
* Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {PIM} ContactAddress
 * @featureID blackberry.pim.contacts
 * @class The ContactAddress object contains the address information of a Contact object.
 * @constructor Constructor for a new ContactAddress object.
 * @param {String} type The type of ContactAddress.
 * @param {String} address1 The street address.
 * @param {String} address2 Extra information about street address.
 * @param {String} locality The city or locality.
 * @param {String} region The province, state, or region.
 * @param {String} postalCode The postal code or zip code.
 * @param {String} country The country name.
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     var homeAddress = new contacts.ContactAddress(
 *         contacts.ContactAddress.HOME,
 *         "123 Abc Rd", "", "Waterloo", "Ontario", "Canada");
 *     var workAddress = new contacts.ContactAddress(
 *         contacts.ContactAddress.WORK,
 *         "456 Industry St", "", "Waterloo", "Ontario", "Canada");
 *
 *     var newContact = contacts.create();
 *     newContact.addresses = [homeAddress, workAddress];
 *
 *     newContact.save(onSaveSuccess, onSaveError);
 *
 *     alert("Home address: " + homeAddress.formatted);
 * }
 *
 * function onSaveSuccess(contact) {
 *     alert("Contact saved: " + contact.displayName);
 * }
 *
 * function onSaveError(error) {
 *     alert("Contact save failed: " + error.code);
 * }
 */
blackberry.pim.contacts.ContactAddress = {};

/**
 * @type String
 * @description Specifies the type of ContactAddress.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.type = "";

/**
 * @type String
 * @readOnly
 * @description A formatted version of the full address, for display.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.formatted = "";

/**
 * @type String
 * @description The street address.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.address1 = "";

/**
 * @type String
 * @description Extra information about the street address.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.address2 = "";

/**
 * @type String
 * @description The city or locality.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.locality = "";

/**
 * @type String
 * @description The province, state, or region.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.region = "";

/**
 * @type String
 * @description The postal code or zip code.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.postalCode = "";

/**
 * @type String
 * @description The country name.
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.prototype.country = "";

/**
 * @type String
 * @constant
 * @default "home"
 * @description The type of ContactAddress is "home".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.HOME = "home";

/**
 * @type String
 * @constant
 * @default "work"
 * @description The type of ContactAddress is "work".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.WORK = "work";

/**
 * @type String
 * @constant
 * @default "other"
 * @description The type of ContactAddress is "other".
 * @BB10X
 */
blackberry.pim.contacts.ContactAddress.OTHER = "other";

