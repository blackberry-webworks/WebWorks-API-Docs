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
 * @toc {File} HTML5 File
 * @class File objects  provides functionatlity to be able to read, write and navigate file system hierarchies
 * @constructedBy FileEntry.file
 * @description creates a new File Object 
*/
File = function() {};

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
    File.prototype.postMessage = function(message) {};
    
    /**
     * @field
     * @description The name of the file
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.name = undefined;

    /**
     * @field
     * @description The full path of the file including the file name
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.fullPath = undefined;
	
    /**
     * @field
     * @description The mime type of the file
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.type = undefined;	

    /**
     * @field
     * @description lists the date that it was last modified
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.lastModifiedDate = undefined;
	
    /**
     * @field
     * @description size of file in bytes
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    File.size = undefined;	