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
 * @toc {BBM} Menu
 * @featureID blackberry.bbm.platform
 * @namespace Provides the ability to add menu items within BBM. Menu items persist across device resets.
 * @BB50+
 */
blackberry.bbm.platform.ui.menu = {
    
    /**
     * @description The maximum number of menu items that can be added per application.
     * @type Number
     * @constant
     * @default 10
     * @BB50+
     */
    MAX_MENU_ITEMS : 0,
    
    /**
     * @description The maximum length of a menu item label.
     * @type Number
     * @constant
     * @default 50
     * @BB50+
     */
    MAX_LENGTH_MENU_ITEM_LABEL : 0,
    
    /**
     * @description The maximum length of a menu item invitation message.
     * @type Number
     * @constant
     * @default 128
     * @BB50+
     */
    MAX_LENGTH_MENU_ITEM_MESSAGE : 0,
        
    /**
     * @description Adds an invitation menu item to the BBM contact list screen. If a menu item with
     * the same <code>menuItemId</code> already exists for the application then it will be overwritten.
     * <p>When the menu item is invoked, an invitation will be sent to the selected contact. On the
     * inviter's side, {@link blackberry.bbm.platform.io.onConnectionCreated} will be invoked with
     * the <code>event="BBMmenuinvite"</code> and <code>param=menuItemId</code>. If the application
     * is not running then it will be launched.</p>
     * @param {Object} options Options.
     * @param {Number} options.menuItemId Unique menu item ID.
     * @param {String} options.label The menu item label.
     * @param {Number} options.order Display order of this menu item; lower order items will be displayed first.
     * @param {String} options.invitationMessage The invitation message displayed to the recipient.
     * @throws {IllegalArgumentException} if <code>options.label</code> is not provided or <code>options.label.length > MAX_LENGTH_MENU_ITEM_LABEL</code>.
     * @throws {IllegalArgumentException} if <code>options.invitationMessage</code> is not provided or <code>options.invitationMessage.length > MAX_LENGTH_MENU_ITEM_MESSAGE</code>.
     * @throws {IllegalArgumentException} if <code>MAX_MENU_ITEMS</code> has been reached.
     * @BB50+
     */
    addInvitationMenuItem : function(options) {
    
    },

    /**
     * Returns <code>true</code> if the application has already added the menu item; <code>false</code> otherwise.
     * @param {Number} menuItemId The ID of the menu item to check.
     * @returns <code>true</code> if the application has already added the menu item; <code>false</code> otherwise.
     * @BB50+
     */
    hasMenuItem : function(menuItemId) {
        
    },
    
    /**
     * Removes a menu item for the application. If the menu item does not exist then nothing is removed.
     * @param {Number} menuItemId The ID of the menu item to remove.
     * @BB50+
     */
    removeMenuItem : function(menuItemId) {
        
    },
    
    /**
     * Removes all menu items for the application.
     * @BB50+
     */
    clearMenuItems : function() {
        
    }
};
