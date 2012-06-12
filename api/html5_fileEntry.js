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
 * @toc {File} HTML5 FileEntry
 * @class File objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description Creates a new Worker object. 
 * @BB10X
 * @learns {Sample - Using HTML5 Web Worker } http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Application-Using-HTML5-Web-Workers/ta-p/627078 Sample that demonstrates how to use the HTML5 Web Workers API [BlackBerry Developer Resource Center].
*/
fileEntry = function() {};

    /**
    * @description  returns the Metadata
    * @param {Object} message A message to post when worker is created.
    * @callback {function} successCallBackFunction The callback function that will execute when the event occurs successfully.
    * @callback {function} failureCallBackFunction The callback function that will execute when the event fails
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
    File.getMetadata = function(successCallBack, errorCallback) {};

	/**
    * @description  
    * @param {DirectoryEntry} DirectoryEntry
	* @param {String} newName
	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X	
    * @example
    * Main script:
	*
	*/
	File.moveTo = function(parent, newName, successCallback, errorCallback) {};

    /**
    * @description  
    * @param {DirectoryEntry} DirectoryEntry
	* @param {String} newName
	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    File.copyTo = function(parent, newName, successCallback, errorCallback) {};
    
    /**
     * @description Returns a URI that can be used to locate the file.
     * @type string
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    File.toURI = function() {};

    /**
    * @description  
 	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    File.getParent = function(successCallback, errorCallback) {};
 
    /**
    * @description  creates the writer to write into the file
 	* @param {function} successCallback function that is called with a FileWriter object. (Function)
	* @param {function} errorCallback function to execute when there is a failure. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    File.createWriter  = function(successCallback, errorCallback) {};

	/**
    * @description  Return a File object that represents the current state of the file that this FileEntry represents.
 	* @param {function} successCallback function that is called with a File object. (Function)
	* @param {function} errorCallback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    File.file  = function(successCallback, errorCallback) {};