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
 * @toc {File} HTML5 FileSystem
 * @class File objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor object that is returned when calling the window.requestFileSystem method
 * @description root FileSystem of the device
*/
FileSystem = function() {};

    /**
    * @description  The object that describes the FileSystem. From this object you get the root directory of the file system
    * @PB10+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    * function onSuccess(fileSystem) {
	*	console.log(fileSystem.name);
	*	console.log(fileSystem.root.name);
	* }
	*
	* // request the persistent file system
	* window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
	*
    *
    */
    File.prototype.FileSystem = function() {};
    
    /**
     * @field
     * @description The name of the file system
     * @type String
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileSystem.name = undefined;

    /**
     * @field
     * @description The root directory of the file system
     * @type DirectoryEntry
     * @PB10+
     * @RIPPLE
	 * @BB10X
	 * @BB50+
     */
    FileSystem.root = undefined;
