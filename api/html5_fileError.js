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
 * @toc {File} HTML5 FileError
 * @class FileError objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description A 'FileError' object is set when an error occurs in any of the File API methods.
*/
FileError = function() {};

    /**
    * @description  The postMessage() method on Web Workers objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
    * @param {Object} message A message to post when worker is created.
    * @PB10+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    * &lt;script type="text/javascript"&gt;
    *   var worker = new Worker('doWork.js');
    *
    *   worker.addEventListener('message', function(e) {
    *        console.log('Worker said: ', e.data);
    *    }, false);
    *
    * &lt;/script&gt;
    *
    *doWork.js (the worker):
    *
    *   self.addEventListener('message', function(e) {
    *        self.postMessage(e.data);
    *    }, false);
    *
    */
/**
 * @toc {File} HTML5 FileError
 * @namespace Errors in the asynchronous File API are reported using callbacks that have a <b>FileError</b> object as one of their arguments.
 */
FileError = {
		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X
		 */
		NOT_FOUND_ERR: NOT_FOUND_ERROR,

		/**
		 * @constant
		 * @type String
		 * @description Security Error
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		SECURITY_ERR: SECURITY_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		ABORT_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		NOT_READABLE_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		ENCODING_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		NO_MODIFICATION_ALLOWED_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		INVALID_STATE_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		SYNTAX_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		INVALID_MODIFICATION_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		QUOTA_EXCEEDED_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		TYPE_MISMATCH_ERR,

		/**
		 * @constant
		 * @type String
		 * @description
		 * @PB10+
		 * @RIPPLE
		 * @BB10X		 
		 */
		PATH_EXISTS_ERR,
	};