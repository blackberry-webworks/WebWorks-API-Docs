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
 * @toc {File} HTML5 LocalFileSystem
 * @constructedBy window This objects methods are defined by the <b>window</b> object
 * @description This object provides a way to obtain root file systems.
*/
LocalFileSystem = function() {};

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
    *
    * &lt;/script&gt;
    *
    *
    */
    LocalFileSystem.prototype.requestFileSystem  = function() {};

LocalFileSystem = {
		/**
		 * @constant
		 * @type String
		 * @description Localstorage that will persists after application has been completed.
		 */
		PERSISTENT: PERSISTENT,

		/**
		 * @constant
		 * @type String
		 * @description Localstorage that is temporary
		 */
		TEMPORARY: TEMPORARY,
	};	

    /**
    * @description  Requests the filesystem. 
    * @param {string} location of file
	* @param {successCallback} callback function that is invoked on successful request of a file system. Argument passed in is the FileSystem object
	* @param {errorCallback} Optional callback for handling errors or when the request to obtain the file system is denied. Argument passed in is the FileError object
    * @PB10+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    * &lt;script type="text/javascript"&gt;
	* function onInitFs(fs) {
	*		console.log('Opened file system: ' + fs.name);
	* }
	*
	* window.requestFileSystem(window.TEMPORARY, 5*1024*1024  onInitFs, errorHandler);    // 5*1024*1024 = 5MB
	*
    *
    * &lt;/script&gt;
    *
    */
    LocalFileSystem.prototype.requestFileSystem  = function() {};

	
    /**
    * @description  Requests the DirectoryEntry or FileEntry Object using local URI. 
    * @param {LocalFileSystem.constant} The type of storage requested (ie. temporary or persistent)
	* @param {integer} size (in bytes) the app will require for storage
	* @param {successCallback} callback function that is invoked on successful request of a file system. Argument passed in is the FileSystem object
	* @param {errorCallback} Optional callback for handling errors or when the request to obtain the file system is denied. Argument passed in is the FileError object
    * @PB10+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    * &lt;script type="text/javascript"&gt;
    *
	* function onSuccess(fileEntry) {
	*		console.log(fileEntry.name);
	* }
	*
	* window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);    * &lt;/script&gt;
    *
    */
    LocalFileSystem.prototype.resolveLocalFileSystemURI  = function() {};
	
