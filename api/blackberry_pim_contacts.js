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
 * @namespace The contacts object provides functions for creating and finding contacts.
 * @toc {PIM} Contacts
 * @featureID blackberry.pim.contacts
 */
blackberry.pim.contacts = {

        /**
         * @name blackberry.pim.contacts.create
         * @description Returns a new Contact object. This method does not persist the Contact object to the device contacts database. To persist the Contact object to the device, invoke the Contact.save method.
         * @param {Object} [properties] Optional object literal that specifies the field values for the Contact object. The object should be in the following form (with any number of properties): <br><pre>
         * {
         *     displayName: &lt;display name - String&gt;,
         *     name: &lt;name - ContactName&gt;,
         *     nickname: &lt;nickname - String&gt;,
         *     phoneNumbers: &lt;phone numbers - ContactField[]&gt;,
         *     emails: &lt;email addresses - ContactField[]&gt;,
         *     addresses: &lt;addresses - ContactAddress[]&gt;,
         *     ims: &lt;IM addresses - ContactField[]&gt;,
         *     organizations: &lt;organization - ContactOrganization[]&gt;,
         *     birthday: &lt;birthday - Date&gt;,
         *     note: &lt;note - String&gt;,
         *     photos: &lt;photos - ContactField[]&gt;,
         *     categories: &lt;user defined categories - ContactField[]&gt;,
         *     urls: &lt;web pages - ContactField[]&gt;
         * }
         * </pre>
         * @return blackberry.pim.contacts.Contact
         * @example
         * &lt;script type="text/javascript"&gt;
         *     function createContact() {
         *         var contacts = blackberry.pim.contacts,
         *             name = new contacts.ContactName(),
         *             workPhone = new contacts.ContactField("work", "123-456-789", true),
         *             workEmail = new contacts.ContactField("work", "abc@blah.com", true),
         *             homeEmail = new contacts.ContactField("home", "hello@me.com", false),
         *             contact;
         *         
         *         name.familyName = "Smith";
         *         name.givenName = "Joe";
         *         contact = contacts.create({
         *              "displayName": "Batman",
         *              "name": name,
         *              "phoneNumbers": [workPhone],
         *              "emails": [workEmail, homeEmail]
         *         });
         *         contact.save();
         *     }
         * &lt;/script&gt;
         * @BB10X
         */
        create : function () {},

        /**
         * @name blackberry.pim.contacts.find
         * @description Queries the device contacts database. The search results are passed to the onFindSuccess callback function specified by the onFindSuccess parameter. 
         * @param {String[]} contactFields A String array of contact fields to be used as search qualifier. Only these fields will have values in the resulting Contact objects.
         * @param {function} onFindSuccess Success callback function that is invoked with the contacts returned from the contacts database.
         * @callback {blackberry.pim.contacts.Contact[]} onFindSuccess.contacts The array of Contact objects from the search.
         * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
         * @callback {ContactError} onFindError.error The ContactError object which contains the error code.
         * @param {Object} [findOptions] Optional object literal that describes the options to be applied to the search.
         * @param {Object[]} [findOptions.filter] An array of object literals used in order to select which contacts are returned. The object should be in the following form: <br><pre>
         * {
         *     fieldName: &lt;field name, one of the SEARCH_FIELD_* constants&gt;,
         *     fieldValue: &lt;value of the field&gt;
         * }
         * </pre>
         * @param {Number} [findOptions.limit] The maximum number of results to return from the search.
         * @param {Object[]} [findOptions.sort] An array of object literals that specifies how the results should be sorted. The object should be in the following form: <br><pre>
         * {
         *     fieldName: &lt;field name, one of the SORT_FIELD_* constants&gt;,
         *     desc: true to sort results in descending order     
         * }
         * </pre>
         * @example
         * &lt;script type="text/javascript"&gt;
         *     function onFindSuccess(contacts) {
         *         console.log("Found " + contacts.length + " contacts in total");
         *         contacts.forEach(function (contact, index) {
         *              console.log("Contact " + index + ": " + contact.displayName);
         *         });
         *     }
         *
         *     function onFindError(error) {
         *         console.log("Error: " + error.code);
         *     }
         *
         *     function searchContacts() {
         *         var contacts = blackberry.pim.contacts;
         *         contacts.find(["displayName"], onFindSuccess, onFindError, {
         *              filter: [{
         *                  fieldName: contacts.SEARCH_FIELD_GIVEN_NAME,
         *                  fieldValue: "Joe"
         *              }],
         *              limit: 5,
         *              sort: [{
         *                   fieldName: contacts.SORT_FIELD_GIVEN_NAME,
         *                   desc: false 
         *              }, {
         *                   fieldName: contacts.SORT_FIELD_FAMILY_NAME,
         *                   desc: false
         *              }]
         *         });
         *     }
         * &lt;/script&gt;
         * @BB10X
         */
        find : function () {},


        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_GIVEN_NAME: 0,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_FAMILY_NAME: 1,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_ORGANIZATION_NAME: 2,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_PHONE: 3,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_EMAIL: 4,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_BBMPIN: 5,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_LINKEDIN: 6,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_TWITTER: 7,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the search filter
         * @BB10X
         */
        SEARCH_FIELD_VIDEO_CHAT: 8,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the sort field
         * @BB10X
         */
        SORT_FIELD_GIVEN_NAME: 0,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the sort field
         * @BB10X
         */
        SORT_FIELD_FAMILY_NAME: 1,

        /**
         * @constant
         * @type Number
         * @description Used by specifying the sort field
         * @BB10X
         */
        SORT_FIELD_ORGANIZATION_NAME: 2
}
