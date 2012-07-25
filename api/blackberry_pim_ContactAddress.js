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
 * @param {String} streetAddress The full street address.
 * @param {String} locality The city or locality.
 * @param {String} region The province, state, or region.
 * @param {String} postalCode The postal code or zip code.
 * @param {String} country The country name.
 * @param {Boolean} pref Whether this ContactAddress contains the user's preferred value.
 * @BB10X
 * @example
 * function createContact() {
 *     var contacts = blackberry.pim.contacts;
 *
 *     var homeAddress = new contacts.ContactAddress(
 *         "home",
 *         "123 Abc Rd", "Waterloo", "Ontario", "Canada",
 *         true);
 *     var workAddress = new contacts.ContactAddress(
 *         "work",
 *         "456 Industry St", "Waterloo", "Ontario", "Canada",
 *         false);
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
blackberry.pim.contacts.ContactAddress = {

        /**
         * @type Boolean
         * @description If true, this ContactAddress contains the user's preferred value. 
         * @BB10X
         */
        pref : 0,

        /**
         * @type String
         * @description Specifies the type of ContactAddress.
         * @BB10X
         */
        type : "",

        /**
         * @type String
         * @readonly
         * @description A formatted version of the full address, for display.
         * @BB10X
         */
        formatted : "",

        /**
         * @type String
         * @description The full street address.
         * @BB10X
         */
        streetAddress : "",

        /**
         * @type String
         * @description The city or locality.
         * @BB10X
         */
        locality : "",

        /**
         * @type String
         * @description The province, state, or region.
         * @BB10X
         */
        region : "",

        /**
         * @type String
         * @description The postal code or zip code.
         * @BB10X
         */
        postalCode : "",

        /**
         * @type String
         * @description The country name.
         * @BB10X
         */
        country : ""
}
