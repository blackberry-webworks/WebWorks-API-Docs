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
 * @toc {File} HTML5 DirectoryEntry
 * @class DirectoryEntry 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description Creates a new Worker object. 
 * @BB10X
*/
DirectoryEntry = function() {};

    /**
    * @description Look up metadata about a directory.
    * @callback {function} successCallBack function The callback function that will execute when the event occurs successfully.
    * @callback {function} failureCallBack function The callback function that will execute when the event fails
    * @PB10+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    *
    */
    DirectoryEntry.getMetadata = function(successCallBack, errorCallback) {};

	/**
    * @description  
    * @param {DirectoryEntry} DirectoryEntry
	* @param {String} The new name of the directory. Defaults to the current name if unspecified. 
	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X	
    * @example
    * Main script:
	*
	*/
	DirectoryEntry.moveTo = function(parent, newName, successCallback, errorCallback) {};

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
    DirectoryEntry.copyTo = function(parent, newName, successCallback, errorCallback) {};
    
    /**
     * @description Returns a URI that can be used to locate the file.
     * @type string
     * @PB10+
     * @RIPPLE
     * @BB10X
     */
    DirectoryEntry.toURI = function() {};

    /**
    * @description  
 	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.remove = function(successCallback, errorCallback) {};
		
    /**
    * @description  
 	* @param {function} successCallback function to execute when it is successful
	* @param {function} errorCallback function to execute when there is a failure
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.getParent = function(successCallback, errorCallback) {};
 
	/**
    * @description  Return a File object that represents the current state of the file that this FileEntry represents.
 	* @param {function} successCallback function that is called with a File object. (Function)
	* @param {function} errorCallback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.createReader  = function(successCallback, errorCallback) {};

	/**
    * @description Create or look up a directory.
 	* @param {function} successCallback function that is called with a File object. (Function)
	* @param {function} errorCallback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.getDirectory  = function(successCallback, errorCallback) {};

	/**
    * @description Create or look up a file.
 	* @param {function} successCallback function that is called with a File object. (Function)
	* @param {function} errorCallback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.getFile  = function(successCallback, errorCallback) {};

	/**
    * @description Delete a directory and all of its contents.
 	* @param {function} successCallback function that is called with a File object. (Function)
	* @param {function} errorCallback function to execute when there is an error during creating the File object. Invoked with a FileError object. (Function)
    * @PB10+
    * @RIPPLE
	* @BB10X
    */
    DirectoryEntry.removeRecursively  = function(successCallback, errorCallback) {};
	
    /**
     * @field
     * @description Value is always false. {boolean}
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    DirectoryEntry.isFile = undefined;	
	
    /**
     * @field
     * @description Value is always true. {boolean}
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    DirectoryEntry.isDirectory = undefined;	
	
    /**
     * @field
     * @description {string} The full absolute path from the root to the DirectoryEntry
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    DirectoryEntry.fullPath = undefined;
	
    /**
     * @field
     * @description {string} The file system on which the DirectoryEntry resides
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    DirectoryEntry.filesystem = undefined;
	


	