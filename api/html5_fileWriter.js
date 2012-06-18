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
 * @toc {File} HTML5 FileWriter
 * @class
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description FileWriter object gives the capability to write to a file in the file system
 */
FileWriter = function() {};

	/**
    * @description  Aborts writing file.
    * @PB10+
	* @BB10X
    *
    */
    FileWriter.prototype.abort();
	
    /**
    * @description  Moves the file pointer to the byte specified.
    * @param {byte} 
    * @RIPPLE
	* @BB10X
    *
    */
    FileWriter.prototype.seek(byteLocation) {};	

    /**
    * @description  Shortens the file to the length specified.
    * @param {byte} 
    * @RIPPLE
	* @BB10X
    *
    */
    FileWriter.prototype.truncate(byte) {};

    /**
    * @description  Writes data to the file with a UTF-8 encoding.
    * @param {string} 
    * @RIPPLE
	* @BB10X
    *
    */
    FileWriter.prototype.write(stringtext) {};
	
    /**
	 * @field
     * @description One of the three states the reader can be in INIT, WRITING or DONE.
     * @type String
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.readyState = undefined;

    /**
     * @field
     * @description The name of the file to be written
     * @type String
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.fileName = undefined;
	
    /**
     * @field
     * @description lenght of the file to be written
     * @type Long
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.length = undefined;	

    /**
     * @field
     * @description current position of the file pointer
     * @type Long
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.position = undefined;
	
    /**
     * @field
     * @description object containing error
     * @type FileError
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.error = undefined;	

    /**
     * @field
     * @description function called when the file writing starts
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onwritestart = undefined;

    /**
     * @field
     * @description function called when writing is in progress
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onprogress = undefined;

    /**
     * @field
     * @description function called when the request has completed successfully
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onwrite = undefined;

    /**
     * @field
     * @description function called when the file writing has been aborted
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onabort = undefined;

	/**
     * @field
     * @description function called when there is an error during the file writing
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onerror = undefined;

	/**
     * @field
     * @description function called when file writing has been completed
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileWriter.onwriteend = undefined;