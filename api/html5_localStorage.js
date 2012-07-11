/*
* Copyright 2010-2011 Research In Motion Limited.
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
 * @notice {Support for BlackBerry 6.0:}
 * This API supports BlackBerry 6.0; however, some BlackBerry 6.0 dot revisions may not be fully supported.
 * @toc {Data Storage} HTML5 Local Storage
 * @PB10+
 * @BB10X
 * @BB60+
 * @namespace This object provides functions to access a list of key/value pairs. 
 * <p/>Each <code>Storage</code> object provides access to a list of key/value pairs, which are sometimes called items. 
 * Keys are strings. Any string (including the empty string) is a valid key. 
 * Values can be any data type supported by the structured clone algorithm.
 
 * 
 */

localStorage ={
		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description The number of key/value pairs currently present in the list associated with the object.
		 * @readOnly
		 * @type Number
		 */
		length :0,
		
		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description Returns the name of the nth key in the list. The order of keys is user-agent defined, but must be consistent within an object so long as the number of keys doesn't change.
		 * @param {Number} index The nth key in the list
		 * @returns {String} The name of the nth key in the list. Returns <code>null</code> if the index is greater than or equal to the number of key/value pairs in the object.
		 */
		key : function(index){},
		
		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description Returns a structured clone of the current value associated with the given key.
		 * @param {String} key The key for the key/value pair 
		 * @returns {Object} The value associated with the given key. Returns <code>null</code> if the given key does not exist.
		 * @example
		 * var cityName=localStorage.getItem("cityName");
		 */
		getItem : function(key){},
		
		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description This method first creates a structured clone of the given value. The user agent checks if a key/value pair with the given key already exists in the list associated with the object.
		 * If it does not, then a new key/value pair must be added to the list, with the given key and with its value set to the newly obtained clone of value.
		 * If the given key does exist in the list, then it must have its value updated to the newly obtained clone of value.
		 * @param {String} key The key for the key/value pair 
		 * @param {Object} value The value for the key/value pair
		 * @throws {Exception} If a structured clone of the given value cannot be created. The list associated with the object is left unchanged.     
         * @throws {NOT_SUPPORTED_ERR} If the structured clone involving the construction of a new <code>ImageData</code> object cannot be created.
         * @throws {QUOTA_EXCEEDED_ERR} If the new value couldn't be set (for example, if the user disabled storage for the site, or if the quota has been exceeded).
		 * @example
		 * localStorage.setItem("cityName", "Toronto"); 
		 */
		setItem : function(key, value){},

		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description This method causes the key/value pair with the given key to be removed from the list associated with the object, if it exists. If no item with that key exists, the method does nothing.
		 * @param  {String} key The key for the key/value pair
		 * @example
		 * localStorage.removeItem("cityName");
		 */
		removeItem : function(key){},

		/**
		 * @PB10+
         * @BB10X
         * @BB60+
		 * @RIPPLE
		 * @description This method atomically causes the list associated with the object to be emptied of all key/value pairs, if there are any. If there are none, then the method does nothing.
		 */
		clear : function(){}
};
