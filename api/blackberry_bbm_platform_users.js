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
 * @beta
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
     * @BB50+
     */    
    startBBMChat: function(onComplete, message, users) {
    },

    /**
     * @description Sends a file to a contact. The user will be prompted to edit the comment and
     * choose to send or cancel the file transfer.
     * <p>If <code>contact</code> is not provided then the Contact Picker dialog be shown first,
     * allowing the user to pick someone in their contact list whom to send the file. Otherwise,
     * the Contact Picker dialog will not be shown.</p>
     * <p>If the contact cannot receive the specific file type, the file will not be sent.</p>
     * <p>The application is notified of any errors that occur through the <code>onFailure(reason)</code>
     * callback. The reasons are:</p>
     * <table border="1" width="100%">
     * <thead>
     * <tr>
     * <th>Reason</th>
     * <th>Description</th>
     * </tr>
     * </thead>
     * <tbody>
     * <tr>
     * <td>filenotfound</td>
     * <td>The file transfer failed because the file does not exist.</td>
     * </tr>
     * <tr>
     * <td>filetoolarge</td>
     * <td>The file transfer failed because the file size exceeds the limit permitted by BBM.</td>
     * </tr>
     * <tr>
     * <td>fileforwardlocked</td>
     * <td>The file transfer failed because the file is forward-locked.</td>
     * </tr>
     * <tr>
     * <td>filebadtype</td>
     * <td>The file transfer failed because the recipient is not permitted to receive files of the file type.</td>
     * </tr>
     * <tr>
     * <td>usercanceled</td>
     * <td>The file transfer failed because the current user canceled the file transfer.</td>
     * </tr>
     * <tr>
     * <td>noncontact</td>
     * <td>The file transfer failed because the recipient is not a BBM contact of the user.</td>
     * </tr>
     * </tbody>
     * </table>
     * @param {String} fileURI The fully qualified path of the file to send.
     * @param {String} comment The default comment on the file. The user may edit this comment before sending.
     * @callback {Function} onFailure Invoked if the file transfer fails.
     * @callback {String} onFailure.reason The reason why the transfer failed.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} [contact] The recipient of the file. The recipient
     * must be in the current user's contact list.
     * @BB50+
     */
    sendFile : function(fileURI, comment, onFailure, contact) {
    },
    
    /**
     * Invoked when a user's information is updated. Assign a function to receive user updates.
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
     * blackberry.bbm.platform.users.onupdate = function(user, event) {
     *     // Handle events for the current user
     *     if(user.handle == blackberry.platform.self.handle) {
     *         if (event == "displaypicture") {
     *             var displayPicImg = document.getElementById("myPicture"); // Must have img element with id="myPicture"
     *             displayPicImg.src = user.displayPicture;
     *         }
     *         // Handle other events for the current user...
     *     }
     *     // Handle events for other users...
     * };
     * 
     * &lt;/script&gt;
     * @event
     * @BB50+
     */
    onupdate : function(user, event) {
    },

    /**
     * @description Allows the user to invite contacts to download the application. A Contact Picker
     * dialog will appear allowing the user to select contacts to invite. Only contacts without the
     * application will be shown in the Contact Picker.
     * @callback {Function} onComplete Invoked when the user is complete.
     * @callback {String} onComplete.result <code>"limitreached"</code> if the download invitation limit has been reached;<code>undefined</code> otherwise. A 
     * maximum of 10 download invitations per minute is allowed.
     * @BB50+
     */
    inviteToDownload : function(onComplete) {
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
