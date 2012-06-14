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
 * @toc {File} HTML5 DirectoryReader
 * @class Web Workers objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description An object that lists files and directories in a directory.
*/
DirectoryReader = function() {};

    /**
    * @description  The postMessage() method on Web Workers objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
    * @param {Object} message A message to post when worker is created.
 	* @param {function} A callback that is passed an array of FileEntry and DirectoryEntry objects.
	* @param {function} A callback that is called if an error occurs retrieving the directory listing. Invoked with a FileError object.
    * @RIPPLE
	* @PB10+
	* @BB10X
    * @example
    * Main script:
    *
    *
    */
    DirectoryReader.readEntries(successCallback, errorCallback) {};


