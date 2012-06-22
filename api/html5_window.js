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
 * @toc {IO} HTML5 Window
 * @class Web Workers objects act as if they had an implicit MessagePort associated with them. This port is part of a channel that is set up when the worker is created and never be garbage collected before the Web Workers object. Only DedicatedWorker is supported. 
 * @constructor
 * @param {String} fileName The name of the javascript file to be executed by the worker.
 * @description Creates a new Worker object. 
 * @learns {Sample - Using HTML5 Web Worker } http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Application-Using-HTML5-Web-Workers/ta-p/627078 Sample that demonstrates how to use the HTML5 Web Workers API [BlackBerry Developer Resource Center].
*/
window = function() {};

    /**
    * @description  The postMessage() method on Web Workers objects invoked the method of the same name on the port, with the same arguments, and returned the same return value.
    * @param {Object} message A message to post when worker is created.
    * @PB10+
    * @BB50+
    * @RIPPLE
	* @BB10X
    * @example
    * Main script:
    *
    *
    */
    window.requestFileSystem(type, size, successCallback, opt_errorCallback) {};


    /**
    * @description  Data stored using TEMPORARY can be removed at the browser's discretion (for example if more space is needed)
    * @type 
    * @PB10+
    * @RIPPLE
    * @BB50+  
	* @BB10X
    */
    window.TEMPORARY  = undefined;
    
    /**
     * @field
     * @description PERSISTENT storage cannot cleared unless explicitly authorized by the user or the app and requires the user to grant quota to your app
     * @type ApplicationCache
     * @PB10+
     * @RIPPLE
     * @BB60+
	 * @BB10X
     */
     window.PERSISTENT  = undefined;

