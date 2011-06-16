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
 * @class The base interface for all connections. See {@link blackberry.bbm.platform.io.Channel} and
 * {@link blackberry.bbm.platform.io.Session} for more information on the respective connection types.
 * @BB50+
 */
blackberry.bbm.platform.io.Connection = function() {

    /**
     * @description The maximum number of users a connection can have, not including the current user.
     * <br/><br/>Once the limit is reached, the platform will not allow the user to send more join invitations
     * and will not allow more users to join.
     * @type Number
     * @constant
     * @default 24
     * @BB50+
     */
    this.MAX_USERS = 0;
    
    /**
     * @description The maximum length of an invitation cookie.
     * @type Number
     * @constant
     * @default 128
     * @BB50+
     */
    this.MAX_COOKIE_LENGTH = 0;
    
    /**
     * @description The maximum length of an invitation message.
     * @type Number
     * @constant
     * @default 128
     * @BB50+
     */
    this.MAX_INVITE_MSG_LENGTH = 0;
    
    /**
     * @description The maximum length of a data payload .
     * @type Number
     * @constant
     * @default 61440
     * @BB50+
     */
    this.MAX_DATA_LENGTH = 0;
    
    /**
     * @description This connection's unique ID. Automatically set on connection creation.
     * @type Number
     * @readOnly
     * @BB50+
     */
    this.id = 0;
    
    /**
     * @description Users who have joined the connection.
     * @type blackberry.bbm.platform.users.BBMPlatformUser[]
     * @readOnly
     * @BB50+
     */
    this.joinedUsers = [];

    /**
     * @description The number of invited users who have not yet joined the connection.
     * @type Number
     * @readOnly
     * @BB50+
     */
    this.pendingUsersCount = 0;
    
    /**
     * @description Removes a user from the connection.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser}
     * user User to remove from the connection.
     * @BB50+
     */
    this.remove = function(user) {
    };
    
    /**
     * @description Removes all users from the connection.
     * @BB50+
     */
    this.removeAll = function() {
    };
    
    /**
     * @description Adds a user, who has already joined a connection in this application, to this connection.
     * @param {blackberry.bbm.platform.user.BBMPlatformUser} user The user to be added.
     * @param {String} [cookie] A custom parameter provided by the third party application.
     * @throws {IllegalArgumentException} If <code>user</code> is not connected with the current user in any existing connections in this application.
     * @BB50+
     */
    this.add = function(user, cookie) {
    };
    
    /**
     * @description Sends data to all users on the connection or a subset. Data cannot be sent to users
     * who have not joined.
     * @param {String} data Object to be sent.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [users] Data recipients. 
     * If not provided, data will be sent to all users on this connection.
     * @example
     * &lt;script type="text/javascript"&gt;
     * 
     * // Broadcast high score to all users in connection
     * connection1.send({
     *     id: "highscore",
     *     score: 9000,
     *     hits: 130,
     *     misses: 40
     * });
     *     
     * // Send welcome to subset of users in connection
     * connection4.send({message: "welcome"}, [player2, player4]);
     * 
     * &lt;/script&gt;
     * @BB50+
     */
    this.send = function(data, users) {
    };
    
    /**
     * @description Allows the user to invite contacts to join this connection.
     * <p>A Contact Picker dialog will appear allowing the user to select contacts to invite. Only
     * contacts with the application will be shown in the Contact Picker.
     * @param {String} inviteMessage Message shown to user in invitation.
     * @param {Object} [options] Options.
     * @param {Number} [options.expiryTime] Delay until the invitation expires (ms). If not provided
     * or <code><= 0</code>, then invitation will never expire.
     * @param {String} [options.cookie] A custom parameter provided by the third party application. 
     * e.g. The current game level. Max length of 128 characters.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} [options.contacts] The contacts that will be shown.
     * @BB50+
     */
    this.inviteContacts = function(inviteMessage, options) {
    };
    
    //////////////////////
    // LISTENER METHODS //
    //////////////////////

    /**
     * @propertyCB onData Invoked when data is received from a user.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} sender User that sent the data.
     * @param {String} data Data received.
     * @BB50+
     */
    this.onData = function(sender, data) {  
    };
    
    /**
     * @propertyCB onUsersInvited Invoked when the user invites others to join the connection. This will not be
     * called if the user invites others to download the application.
     * @param {blackberry.bbm.platform.io.BBMPlatformUser} users the users who were invited
     * @BB50+
     */
    this.onUsersInvited = function(users) {
    };
    
    /**
     * @propertyCB onUserDeclined Invoked when a user declines an invitation.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user User who declined.
     * @BB50+
     */
    this.onUserDeclined = function(user) {
    };
    
    /**
     * @propertyCB onUsersJoined Invoked when users join the connection by accepting an invitation.
     * <table border="1" width="100%">
     * <tr>
     * <th>Type</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>"invitedbyme"</code></td>
     * <td>The joining users were invited by the current user.</td>
     * </tr>
     * <tr>
     * <td><code>"acceptedbyme"</code></td>
     * <td>The current user is joining the connection.</td>
     * </tr>
     * </table>
     * @param {blackberry.bbm.platform.users.BBMPlatformUser[]} users The users who joined.
     * @param {String} type The type of join.
     * @param {String} cookie The cookie that was sent with the invitation. <code>undefined</code>
     * if no cookie was sent.
     * @BB50+
     */
    this.onUsersJoined = function(users, type, cookie) {
    };
    
    /**
     * @propertyCB onUserLeft Invoked when a user leaves the connection.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user User who left.
     * @BB50+
     */
    this.onUserLeft = function(user) {
    };
    
    ////////////////////////////////////
    // Non-BBM Contact Invite Support //
    ////////////////////////////////////
    
    /**
     * Enables hosting on this connection. The user will be prompted with a dialog to allow or deny hosting.
     * <p>The user may only host on one connection in the application.
     * @callback {Function} onComplete Invoked when the user finishes approving/denying hosting.
     * @callback {Boolean} onComplete.hosting <code>true</code> if the user decided to start hosting;
     * <code>false</code> otherwise.
     * @callback {Function} onFailure Invoked if the user is already hosting a public connection in
     * the same application.
     * 
     * @BB50+
     */
    this.enableHosting = function(onComplete, onFailure) { };
    
    /**
     * Disables hosting on this connection.
     * @BB50+
     */
    this.disableHosting = function() { };
    
    /**
     * <code>true</code> if the user is hosting on this connection; <code>false</code> otherwise.
     * @BB50+
     */
    this.hosting = false;
    
    /**
     * The pending requests that the user has received while hosting on this connection. The user can
     * determine which requests to accept of decline using {@link blackberry.bbm.platform.io.IncomingJoinRequest.accept}
     * and {@link blackberry.bbm.platform.io.IncomingJoinRequest.decline}.
     * @type blackberry.bbm.platform.io.IncomingJoinRequest[]
     * @BB50+
     */
    this.incomingJoinRequests = [];
    
    /**
     * @propertyCB onJoinRequestReceived Invoked when the user, who is hosting on this connection, receives a join request from a peer.
     * @param {blackberry.bbm.platform.io.IncomingJoinRequest} request The received request.
     * @BB50+
     */
    this.onJoinRequestReceived = function(request) { };
    
    /**
     * @propertyCB onJoinRequestCanceled Invoked when a peer cancels a join request, which was sent to the host on this connection.
     * <table border="1" width="100%">
     * <thead>
     * <tr>
     * <th>Reason</th>
     * <th>Description</th>
     * </tr>
     * </thead>
     * <tbody>
     * <tr>
     * <td>peercanceled</td>
     * <td>The peer canceled the request without a specific reason.</td>
     * </tr>
     * <tr>
     * <td>peerleft</td>
     * <td>The peer exited the application.</td>
     * </tr>
     * </tbody>
     * </table>
     * @param {blackberry.bbm.platform.io.IncomingJoinRequest} request The canceled request.
     * @param {String} reason The reason the request was canceled.
     * @BB50+
     */
    this.onJoinRequestCanceled = function(request, reason) { };
};