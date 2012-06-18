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
 * @toc {File} HTML5 FileReader
 * @namespace 
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description FileReader object allows the ability to read the contents of a file for manipulation
 /
FileReader = function() {};
    
    /**
     * @description One of the three states the reader can be in EMPTY, LOADING or DONE.
     * @type String
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.readyState = undefined;

    /**
     * @description The contents of the file that has been read. 
     * @type String
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.result = undefined;
	
    /**
     * @description An object containing errors. (FileError)
     * @type FileError
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.error = undefined;	

    /**
     * @description  the function that is called when the read starts
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.onloadstart = undefined;
	
    /**
     * @description  function that is called when the read has been sucessfully completed
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.onload = undefined;

    /**
     * @description function that is called when the read has been aborted
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.onabort = undefined;

    /**
     * @description function that is called when the read has failed
     * @type Function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.onerror = undefined;

    /**
     * @description function that is called when file reading has been completed
     * @type function
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.prototype.onloadend = undefined;

	/**
	 * @description function to abort the fileReading process
	 * @PB10+
	 * @BB50+
	 * @RIPPLE
	 * @example
	 * function win(file) {
     *		var reader = new FileReader();
	 *		reader.onloadend = function(evt) {
     *			console.log("read success");
     *			console.log(evt.target.result);
     *		};
	 * 
	 *		reader.readAsText(file);
	 *  	reader.abort();
	 *  };
	 *
	 *	function fail(error) {
	 *		console.log(error.code);
	 *	}
	 *
	 *	entry.file(win, fail);
	 *
	 */
    FileReader.prototype.abort = function(){};

	/**
	 * @description function to read the file and return the data as a base64 encoded data url
	 * @PB10+
	 * @BB50+
	 * @RIPPLE
	 */
    FileReader.prototype.readAsDataURL = function(){};
	
	/**
	 * @description function to read the text file
	 * @PB10+
	 * @BB50+
	 * @RIPPLE
	 */
    FileReader.prototype.readAsText = function(){};	