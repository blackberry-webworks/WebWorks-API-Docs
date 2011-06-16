/*
 * Copyright 2010 Research In Motion Limited.
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
 * @featureID blackberry.bbm.platform
 * @class A platform user.
 * @BB50+
 */
blackberry.bbm.platform.users.BBMPlatformUser = function() {
    /**
     * @description The display picture, encoded as a base64 image string.
     * @type String
     * @readOnly
     * @BB50+
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Show a contact's display picture
     * var user = blackberry.bbm.platform.users.contactsWithApp[0];
     * var displayPicImg = document.getElementById("displayPicture");
     * displayPicImg.src = user.displayPicture;
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Show the current user's display picture
     * var user = blackberry.bbm.platform.self;
     * var displayPicImg = document.getElementById("displayPicture");
     * displayPicImg.src = user.displayPicture;
     * &lt;/script&gt;
     * </pre>
     */
    this.displayPicture = "";

    /**
     * @description The display name.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.displayName = "";

    /**
     * @description The personal message.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.personalMessage = "";

    /**
     * @description The status. One of <code>"available"</code> or <code>"busy"</code>.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.status = "";

    /**
     * @description The status message.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.statusMessage = "";
    
    /**
     * @description The user's unique ID. This will be <b>different</b> for multiple instances of the
     * user (BlackBerry, PlayBook, etc.)
     * @type String
     * @readOnly
     * @BB50+
     */
    this.handle = 0;
    
    /**
     * @description The user's unique ID. This will be <b>the same</b> for multiple instances of the
     * user (BlackBerry, PlayBook, etc.)
     * @type String
     * @readOnly
     * @BB50+
     */
    this.ppid = 0;
};