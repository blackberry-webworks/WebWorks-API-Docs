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
 * @namespace The ContactName object contains name properties of a {@link blackberry.pim.contacts.Contact} object.
 * @toc {PIM} ContactName
 * @featureID blackberry.pim.contacts
 */
blackberry.pim.contacts.ContactName = {};

/**
 * @description The complete name of the contact.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.formatted = "";

/**
 * @description The contact's family name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.familyName = "";

/**
 * @description The contact's given name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.givenName = "";

/**
 * @description The contact's middle name.
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.middleName = "";

/**
 * @description The contacts prefix (example Mr. or Dr.)
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.honorificPrefix = "";

/**
 * @description The contacts suffix (example Esq.).
 * @type String
 * @BB10X
 */
blackberry.pim.contacts.ContactName.prototype.honorificSuffix = "";
