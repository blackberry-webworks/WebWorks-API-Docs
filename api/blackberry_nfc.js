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
 * @toc {User Interface} NFC
 * @featureID blackberry.nfc
 * @namespace The Nfc object contains functions for handling and preparing ndef nfc Tags.
 * <p/>
 * The functionality in this object allows you to emulate read and write smart tags.
 */
 blackberry.nfc ={

        /**
         * @function
         * @description Registers an event listener for tags matching any tag type. <br/>
         * This event occurs when any tag is detected by the phone. <br/>
         * @callback {function} onTagDetected The callback called when a tag is detected.
         * @param {String} onTagDetected.type The event type.
         * @param {Object} onTagDetected.tag The Ndef tag. *NOTE This objects properties are platform dependent.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is added.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in adding the listener.
         * @BB10X
         * @RIPPLE
         */

         addTagDiscoveredListener : function(callback, onSuccess, onFailure){},

         /**
         * @function
         * @description Removes an event listener <br/>
         * @callback {function} onTagDetected The callback called when a tag is detected.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is removed.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in removing the listener.
         * @BB10X
         * @RIPPLE
         */

         removeTagDiscoveredListener : function(callback, onSuccess, onFailure){},

        /**
         * @function
         * @description Registers an event listener for tags matching the specified MIME type. <br/>
         * This event occures when a TNF_MIME_MEDIA tag with the specified MIME type is read. <br/>
         * @param {String} mimeType The MIME type filter for messages. 
         * @callback {function} onTagDetected The callback called when a tag is detected with the specified MIME type.
         * @param {String} onTagDetected.type The event type.
         * @param {Object} onTagDetected.tag The Ndef tag. *NOTE This objects properties are platform dependent.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is added.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in adding the listener.
         * @BB10X
         * @RIPPLE
         */

         addMimeTypeListener : function(mimeType, callback, onSuccess, onFailure){},

         /**
         * @function
         * @description Removes an event listener for tags matching the specified MIME type. <br/>
         * @param {String} mimeType The MIME type filter for messages. 
         * @callback {function} onTagDetected The callback called when a tag is detected with the specified MIME type.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is removed.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in removing the listener.
         * @BB10X
         * @RIPPLE
         */

         removeMimeTypeListener : function(mimeType, callback, onSuccess, onFailure){},

        /**
         * @function
         * @description Registers an event listener for any NDEF tag <br/>
         * This event occures when a NDEF tag is read. <br/> 
         * @callback {function} onTagDetected The callback called when a NDEF tag is detected.
         * @param {String} onTagDetected.type The event type.
         * @param {Object} onTagDetected.tag The Ndef tag. *NOTE This objects properties are platform dependent.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is added.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in adding the listener.
         * @BB10X
         * @RIPPLE
         */

         addNdefListener : function(callback, onSuccess, onFailure){},

         /**
         * @function
         * @description Removes an event listener for any NDEF tag <br/>
         * @callback {function} onTagDetected The callback called when a NDEF tag is detected.
         * @param {String} onTagDetected.type The event type.
         * @param {Object} onTagDetected.tag The Ndef tag. *NOTE This objects properties are platform dependent.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is removed.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in removing the listener.
         * @BB10X
         * @RIPPLE
         */

         removeNdefListener : function(callback, onSuccess, onFailure){},

        /**
         * @function
         * @description Registers an event listener for tags that can be NDEF formatted. <br/>
         * This event is not fired for Ndef Messages this if for tags that can be NDEF formatted. <br/>
         * @callback {function} onTagDetected The callback called when a NDEF-formatable tag is detected.
         * @param {String} onTagDetected.type The event type.
         * @param {Object} onTagDetected.tag The Ndef tag. *NOTE This objects properties are platform dependent.
         * @param {function} onSuccess Optional callback function that is invoked when the listener is added.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in adding the listener.
         * @BB10X
         * @RIPPLE
         */

         addNdefFormatableListener : function(callback, onSuccess, onFailure){},

        /**
         * @function
         * @description Writes data to a NDEF tag. *NOTE Part of Write User Story #568 <br/>
         * @param {blackberry.nfc.Ndef} [ndefMessage] The NdefMessage that is to be written. 
         * @param {function} onSuccess Optional callback function that is invoked when the tag is written.
         * @param {function} onFailure Optional callback function that is invoked when there was an error writing.
         * @BB10X
         * @RIPPLE
         */

         write : function(ndefMessage, onSuccess, onFailure){},

        /**
         * @function
         * @description Shares an NdefMessage <br/>
         * NdefMessage should appear to other device as a NFC tag. <br/>
         * @param {blackberry.nfc.Ndef} [ndefMessage] The NdefMessage that is to be written. 
         * @param {function} onSuccess Optional callback function that is invoked when the message is pushed.
         * @param {function} onFailure Optional callback function that is invoked when there was an error in adding pushing the tag.
         * @BB10X
         * @RIPPLE
         */

         share : function(ndefMessage, onSuccess, onFailure){},

        /**
         * @function
         * @description Stops sharing NDEF data. <br/>
         * @param {function} onSuccess Optional callback function that is invoked when the sharing stops.
         * @param {function} onFailure Optional callback function that is invoked when there was an error.
         * @BB10X
         * @RIPPLE
         */

         unshare : function(onSuccess, onFailure){},

        /**
         * @function
         * @description Erases an NDEF tag <br/>
         * @param {function} onSuccess Optional callback function that is invoked when the tag was erased.
         * @param {function} onFailure Optional callback function that is invoked when there was an error.
         * @BB10X
         * @RIPPLE
         */

         erase : function(onSuccess, onFailure){},

        /**
         * @function
         * @description Locks an NDEF tag. *NOTE This function is not part of the Cordova NFC extension. *NOTE Part of Write User Story #568 <br/>
         * @param {function} onSuccess Optional callback function that is invoked when the tag was locked.
         * @param {function} onFailure Optional callback function that is invoked when there was an error.
         * @BB10X
         * @RIPPLE
         */

         lock : function(onSuccess, onFailure){},
      };
