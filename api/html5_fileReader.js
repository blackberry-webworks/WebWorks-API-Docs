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
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description FileReader object allows the ability to read the contents of a file for manipulation
 /
FileReader = function() {};
    
    /**
     * @description One of the three states the reader can be in EMPTY, LOADING or DONE.
     * @type File
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
    FileReader.result = undefined;
	
    /**
     * @field
     * @description An object containing errors. (FileError)
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.error = undefined;	

    /**
     * @field
     * @description 
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onloadstart = undefined;
	
    /**
     * @field
     * @description
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onprogress = undefined;	

    /**
     * @field
     * @description 
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onload = undefined;

    /**
     * @field
     * @description
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onabort = undefined;

    /**
     * @field
     * @description 
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onerror = undefined;

    /**
     * @field
     * @description 
     * @type File
     * @PB10+
     * @RIPPLE
	 * @BB10X
     */
    FileReader.onloadend = undefined;
