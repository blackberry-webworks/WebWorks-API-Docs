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
 * @class The <code>Ndef</code> object provides constants, and functions for creating NdefRecords. {@link blackberry.nfc.share}() or {@link blackberry.nfc.write}()
 * @toc {} Ndef
 * @featureID blackberry.nfc
 */
blackberry.nfc.Ndef = {};

/**
 * @description (Type Name Format) - uses the TNF_* constants.
 * @readOnly
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.tnf = null;

/**
 * @description Byte array, containing zero to 255 bytes *Must not be null.
 * @type Number[]
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.type = null;

/**
 * @description The record Id. It is a byte array from 0 - 255 bytes. *Must not be null.
 * @type Number[]
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.id = null;

/**
 * @description The data of the Ndef record. Is a byte array from zero to (2 ** 32 - 1) bytes. *Must not be null
 * @type Number[]
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.payload = null;

/**
 * Creates a new Ndef record.
 * @param {Number} tnf 
 * @param {[Number]} type 
 * @param {[payload]} payload
 * @returns {blackberry.nfc.Ndef}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.record = function () {};

/**
 * Creates a new Ndef uri record.
 * @param {String} uri
 * @returns {blackberry.nfc.Ndef}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.uriRecord = function () {};

/**
 * Creates a new Ndef record.
 * @param {String} text Plain text message 
 * @returns {blackberry.nfc.Ndef}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.textRecord = function () {};

/**
 * Creates a new Ndef record.
 * @param {String} mimeType 
 * @param {[payload]} payload
 * @returns {blackberry.nfc.Ndef}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.mimeMediaRecord = function () {};

/**
 * Merges two arrays. *NOTE Not a NFC function just a helper
 * @param {[Number]} byte array
 * @returns {String}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.concatArray = function () {};

/**
 * Converts a byte array to String. *NOTE Not a NFC function just a helper
 * @param {[Number]} byte
 * @returns {String}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.bytesToString = function () {};

/**
 * Converts string to byte array. *NOTE Not a NFC function just a helper
 * @param {String} String
 * @returns {[Number]}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.stringToBytes = function () {};

/**
 * Converts bytes to a Hexadecimal String. *NOTE Not a NFC function just a helper
 * @param {[Number]} bytes
 * @returns {String}
 * @BB10X
 */
blackberry.nfc.Ndef.prototype.bytesToHexString = function () {};

/**
 * @description An empty record.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_EMPTY = 0;

/**
 * @description Records containing well known types e.g. text, uri.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_WELL_KNOWN = 1;

/**
 * @description Records containing media.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_MIME_MEDIA = 2;

/**
 * @description Records containing an aboslute uri.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_ABSOLUTE_URI = 3;

/**
 * @description External type names. Used for custom payloads.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_EXTERNAL_TYPE = 4;

/**
 * @description Payloads that are not known.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_UNKNOWN = 5;

/**
 * @description Last of an NDEF Record
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.nfc.Ndef.TNF_UNCHANGED = 6;