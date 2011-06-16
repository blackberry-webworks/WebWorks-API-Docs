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
 * @toc {BBM Users} Current User's Profile Box
 * @featureID blackberry.bbm.platform
 * @namespace Provides access to the current user's profile box.
 * <p>A box for this application that appears in the current user's profile. Each box contains a
 * list of items, each composed of text and an optional icon. There is a maximum of 3 items; as
 * more are added, older items will be removed automatically.</p>
 * 
 * <p>This box can be viewed by the current user and their contacts, and is editable by the current
 * user and the owning application (on this device). The current user can only remove items.</p>
 * 
 * <h2>Icons</h2>
 * Before icons can be used in profile box items, a static set of icons must be registered using
 * {@link blackberry.bbm.platform.self.profilebox.registerIcon}. An application should register its entire set of
 * icons initially. This improves speed when the current user views this application in their
 * contacts' profiles.</p> 
 * 
 * <h3>Icon IDs</h3>
 * <ul>
 * <li>Each icon must be given a unique non-negative ID.
 * <li>Each icon ID must map to the same icon on all devices. Images generated at runtime such as
 * screenshots are not acceptable for use.
 * <li>A new version of the same icon should <b>not</b> be registered under the same icon ID.
 * </ul>
 * 
 * <h3>Image recommendations</h3>
 * <ul>
 * <li>Recommended icon size is 100x100, regardless of device. <b>This may change after beta.</b>
 * <li>Icons should be square.
 * <li>Alpha is supported.
 * <li>Animating icons are not supported. Only the first frame will be used.
 * </ul>
 * 
 * <h2>Launching your application from the profile box</h2>
 * <p>The user can invoke an application through its profile box items in their profile or a
 * contact's profile. The application will be brought to the foreground and/or launched if not yet
 * running. The invoking profile box item can be obtained by assigning a callback to
 * {@link blackberry.bbm.platform.onAppInvoked}.
 * 
 * @example
 * &lt;script type="text/javascript"&gt;
 * // Trigger an action in the application when a profile box item is selected
 * blackberry.bbm.platform.onAppInvoked = function(reason, param) {
 *     if(reason == "profilebox") {
 *         var boxItem = param;
 *         var achievementID = boxItem.cookie;
 *         challenge(achievementID);
 *     }
 * };
 * &lt;/script&gt; 
 * @BB50+
 */
blackberry.bbm.platform.self.profilebox = {

    /**
     * <code>true</code> if the profile box is accessible and can be updated; <code>false</code> otherwise.
     * The profile box is not accessible when the device is in mass storage mode.
     * @type Boolean
     * @readOnly
     * @BB50+
     */
    accessible : false,
    
    /**
     * The profile box items. <code>undefined</code> if the device is in mass storage mode.
     * @type blackberry.bbm.platform.self.profilebox.ProfileBoxItem[]
     * @readOnly
     * @BB50+
     */
    items : null,
    
    /**
     * Registers a new icon from a URI.
     * <p>The URI must be fully qualified. Non-local URIs must be whitelisted in the application's configuration file. Examples:
     * <ul>
     * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
     * <li>From the filesystem of the device (e.g. "file:///SDCard/BlackBerry/pictures/smiley.jpg")
     * </ul>
     * An application should register its entire set of icons initially. This improves speed when the
     * current user views this application in their contacts' profiles.
     * </p>
     * @param {Number} iconID The icon ID.
     * @param {String} iconURI The fully qualified URI.
     * @throws {IllegalArgumentException} If <code>iconId < 0</code>.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Register all profile box icons
     * var ICON_INFO = {};
     * ICON_INFO.apple =  { id:1, uri:"local:///profilebox/apple.png" };
     * ICON_INFO.orange = { id:2, uri:"local:///profilebox/orange.png" };
     * ICON_INFO.pear =   { id:3, uri:"local:///profilebox/pear.png" };
     * ICON_INFO.ALL = ["apple", "orange", "pear"];
     * 
     * for(var i = 0; i < ICON_INFO.ALL.length; i++) {
     *     var iconName = ICON_INFO.ALL[i];
     *     var iconInfo = ICON_INFO[iconName];
     *     var iconId = iconInfo.id;
     *     
     *     if(! blackberry.bbm.platform.self.profilebox.hasIcon(iconId)) {
     *         blackberry.bbm.platform.self.profilebox.registerIcon(iconId, iconInfo.uri);
     *     }
     * }
     * &lt;/script&gt;
     * 
     * @BB50+
     */
    registerIcon : function(iconID, iconURI) {
    },

    /**
     * Returns the registered icon for an ID.
     * 
     * @param {Number} iconID The icon ID.
     * @returns {String} The base64 encoded image string if the icon is registered;
     * <code>null</code> otherwise.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @BB50+
     */
    getIcon : function(iconID) {
    },
    
    /**
     * Returns whether an icon is registered for an icon ID.
     * @param {Number} iconID The icon ID.
     * @returns <code>true</code> if an icon is registered for <code>iconID</code>; <code>false</code> otherwise.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @BB50+
     */
    hasIcon : function(iconID) {
    },
    
    /**
     * Adds an item to the user's profile box.
     * @param {Object} options The options.
     * @param {String} options.text The text of the item.
     * @param {Number} [options.iconID] <i>Optional</i> The ID of a registered icon. If not provided
     * then no icon will be used.
     * @param {String} [options.cookie] <i>Optional</i> The customizable cookie.
     * @returns {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} the new item.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Add an item with icon, text, and a cookie
     * var options = {text:"Planted an apple orchard on 10 acres!", iconId:ICON_INFO.apple.id, cookie:"10acres"};
     * blackberry.bbm.platform.self.profilebox.addItem(options);
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * // Add an item with text
     * var options = {text:"Bought a 100 acre farm!"};
     * blackberry.bbm.platform.self.profilebox.addItem(options);
     * &lt;/script&gt;
     * @BB50+
     */
    addItem : function(options) {
    },
    
    /**
     * Removes an item.
     * @param {blackberry.bbm.platform.self.profilebox.ProfileBoxItem} item The item to remove.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @BB50+
     */
    removeItem: function(item) {  
    },
    
    /**
     * Removes all items.
     * @throws {UserProfileBoxAccessException} If the device is in mass storage mode.
     * @BB50+
     */
    clearItems: function() {
    }
};