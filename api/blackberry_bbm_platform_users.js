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
 * @toc {BBM Users} Other Users
 * @featureID blackberry.bbm.platform
 * @namespace Provides access to user information. The current user can be accessed from
 * {@link blackberry.bbm.platform.self}.
 * @BB50+
 */
blackberry.bbm.platform.users = {

    /**
     * @description Contacts who have the application installed.
     * @type blackberry.bbm.platform.users.BBMPlatformUser[]
     * @readOnly
     * @BB50+
     */
    contactsWithApp : [],

    /**
     * @description Shows Contact Picker dialog allowing the user to select contacts.
     * @param {Object} options Object containing contact picker options.
     * @param {String} [options.title] Title of the contact picker dialog.
     * @param {String} [options.type] Type of users to include in the dialog. May be "contactswithapp".
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [options.users] Users shown in the
     * dialog.
     * @param {Boolean} [options.multiSelect=false] <code>true</code> to allow the user to select
     * multiple contacts; <code>false</code> to only allow 1. 
     * @param {Boolean} [options.showSelectAll=false] <code>true</code> to show Select All option;
     * <code>false</code> otherwise. Ignored if <code>options.multiSelect == false</code>.
     * @callback {Function} onComplete Function called when user is finished.
     * @callback {blackberry.bbm.platform.users.BBMPlatformUser[]} onComplete.contacts The picked
     * contacts. <code>contacts.length == 0</code> if no contacts were selected.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * blackberry.bbm.platform.contacts.pickUsers( {
     *     title : "Who would you like to chat with?",
     *     type : "contactswithapp"
     * }, function(contacts) {
     *     if (contacts.length == 0) {
     *         // No contacts picked
     *     } else {
     *         // One or more contacts picked
     *     }
     * });
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    pickUsers : function(options, onComplete) {
    },

    /**
     * @description Starts a chat within BBM, bringing the chat screen to the foreground and entering
     * a message in the reply field. If <code>users</code> is provided, the chat screen is opened
     * immediately; otherwise a Contact Picker dialog is displayed beforehand.
     * @param {Function} onComplete Invoked when the chat has been started or canceled.
     * @param {String} message The initial message in the reply field of the chat screen.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [users] The users with whom to chat.
     * Must not contain {@link blackberry.bbm.platform.self}.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Start chat with Contact Picker dialog
     * blackberry.bbm.platform.users.startBBMChat(function() {
     *     // Continue with application...
     * }, "Did you see the game?");
     * 
     * &lt;/script&gt;
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Start chat without Contact Picker dialog
     * blackberry.bbm.platform.users.startBBMChat(function() {
     *     // Continue with application...
     * }, "I won by 500 points!", [player1, player2, player3]);
     * 
     * &lt;/script&gt;
     * @BB50+
     */    
    startBBMChat: function(onComplete, message, users) {
    },
    
    /**
     * @propertyCB onUpdate Invoked when a user's information is updated. Assign a function to receive user updates.
     * <p>User updates can be captured such as profile information and application installation changes.
     * Updates can be received from the current user, contacts who have the application, and non-contacts
     * who have joined in an application connection with the current user.</p>
     * <table border="1" width="100%">
     * <tr>
     * <th>Event</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>"displayname"</code></td>
     * <td>Display name update.</td>
     * </tr>
     * <tr>
     * <td><code>"displaypicture"</code></td>
     * <td>Display picture update.</td>
     * </tr>
     * <tr>
     * <td><code>"personalmessage"</code></td>
     * <td>Personal message update.</td>
     * </tr>
     * <tr>
     * <td><code>"status"</code></td>
     * <td>Status and/or status message update.</td>
     * </tr>
     * <tr>
     * <td><code>"install"</code></td>
     * <td>User installed or unblocked application.</td>
     * </tr>
     * <tr>
     * <td><code>"uninstall"</code></td>
     * <td>User uninstalled or blocked application.</td>
     * </tr>
     * <tr>
     * <td><code>"invited"</code></td>
     * <td>
     * User received an invitation to join this application in BBM.<br/>
     * <i>This only applies to the current user.</i>
     * </td>
     * </tr>
     * </table>
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user whose information updated.
     * @param {String} event The type of update.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * blackberry.bbm.platform.users.onUpdate = function(user, event) {
     *     if (event == "displaypicture") {
     *         // Get the img element for the user
     *         var displayPicId;
     *         var userHandle = user.handle;
     *         if (userHandle == blackberry.platform.self.handle) {
     *             displayPicId = "myPicture";
     *         } else if (userHandle == p2Handle) {
     *             displayPicId = "p2Picture";
     *         } else if (userHandle == p3Handle) {
     *             displayPicId = "p3Picture";
     *         } else {
     *             return; // Do not care about other users -- exit
     *         }
     *             
     *         var displayPicImg = document.getElementById(displayPicId);
     *         displayPicImg.src = user.displayPicture;
     *     }
     * };
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    onUpdate : function(user, event) {
    },
    
    /**
     * Allows the user to invite users to their BBM contact list. A dialog will appear allowing the
     * user to select users to invite. Users already in the current user's contact list will not be
     * included in the dialog.
     * @param {Function} onComplete Invoked when the user has finished selecting contacts to invite.
     * @param {blackberry.bbm.platform.users.ContactInvitation[]} invitations The users to invite to BBM.
     * @throws {IllegalArgumentException} If <code>PIN</code> is invalid for any invitation.
     * @throws {IllegalArgumentException} If <code>name</code> is null or empty for any invitation.
     * @throws {IllegalArgumentException} If <code>invitations.length > 24</code>.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM by PIN
     * var onComplete = function() {
     *     // Continue...
     * }
     * var users = blackberry.bbm.platform.users;
     * var invitations = [
     *         new users.ContactInvitation("2100000A", "John Doe"),
     *         new users.ContactInvitation("2100000B", "Jane Doe"),
     * ];
     * blackberry.bbm.platform.users.inviteToBBM(onComplete, invitations);
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    inviteToBBM: function(invitations) {
    },
    
    /**
     * Allows the user to invite users to their BBM contact list. A dialog will appear allowing the
     * user to select users to invite. Users already in the current user's contact list will not be
     * included in the dialog.
     * <p>Users from <code>connection</code> (who are not in the user's contact list) will be shown
     * in the dialog.
     * <p>If <code>connection</code> is not provided, then users from all connections the application
     * has open (who are not in the user's contact list) will be shown in the dialog. 
     * @param {Function} onComplete Invoked when the user has finished selecting contacts to invite.
     * @param {blackberry.bbm.platform.io.Connection} [connection] The connection to invite users from.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM from a specific connection
     * var onComplete = function() {
     *     // Continue...
     * }
     * blackberry.bbm.platform.users.inviteToBBMFromConnections(onComplete, connection);
     * 
     * &lt;/script&gt;
     * 
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Invite to BBM from any open connection in the application
     * var onComplete = function() {
     *     // Continue...
     * }
     * blackberry.bbm.platform.users.inviteToBBMFromConnections(onComplete);
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    inviteToBBMFromConnections: function() {
    }
};