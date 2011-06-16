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
 * @toc {BBM IO} IO
 * @featureID blackberry.bbm.platform
 * @namespace Provides connection creation services.
 * <h3>Connections</h3>
 * <p>Connections can be created using {@link blackberry.bbm.platform.io.createConnection}. Applications should listen for incoming connections by assigning a callback to {@link blackberry.bbm.platform.io.onConnectionCreated}. When a connection is created or received, the application should assign callbacks to it in order to be notified of various events.</p>
 * <h4>Connection types</h4>
 * The two connection types are channel and session. See
 * <br/>{@link blackberry.bbm.platform.io.Channel}
 * <br/>{@link blackberry.bbm.platform.io.Session}
 * 
 * <h4>Creating a connection</h4>
 * <pre>
 * var type = ... // One of "channel" or "session"
 * var conn = blackberry.bbm.platform.io.createConnection(type);
 * setConnectionListeners(conn, type);
 * </pre>
 * 
 * <h4>Connections created by the BBM Platform</h4>
 * Connections are created by the BBM Platform in different events. See {@link blackberry.bbm.platform.io.onConnectionCreated} for more details. 
 * <pre>
 * var conn;
 * 
 * blackberry.bbm.platform.io.onConnectionCreated = function(event, type, connection, param) {
 *     // Save the connection and set the callbacks
 *     conn = connection;
 *     setConnectionListeners(conn, type);
 * };
 * </pre>
 * 
 * <h4>Connection events</h4>
 * A generic function can be used to assign callbacks to connections.
 * <pre>
 * function setConnectionListeners(conn, type) {
 *     // Channel/Session callbacks
 *     conn.onUsersInvited = function(users) {
 *         // ...
 *     };
 *     conn.onUsersJoined = function(users, type, cookie) {
 *         // ...
 *     };
 *     conn.onUserDeclined = function(user) {
 *         // ...
 *     };
 *     conn.onUserLeft = function(user) {
 *         // ...
 *     };
 *     conn.onData = function(user, data) {
 *         // ...
 *     };
 *     
 *     // Session callbacks
 *     if(type == "session") {
 *         conn.onBroadcastData = function(user, data) {
 *             log(connStr + "onBroadcastData(" + user.displayName + ", " + data + ")");
 *         };
 *         conn.onUsersRemoved = function(user, users) {
 *             var usersStr = getUsersString(users);
 *             log(connStr + "onUsersRemoved(" + user.displayName + ", " + usersStr + ")");
 *         };
 *         conn.onEnded = function(user) {
 *             log(connStr + "onEnded(" + user.displayName + ")");
 *         };
 *     }
 * };
 * </pre>
 * 
 * <h3>Adding Users to Connections</h3>
 * <p>There are two ways to add users to connections: (1) inviting contacts to join a connection, and
 * (2) hosting a connection for non-contacts to join. A user does not have to be the connection
 * creator in order to invite users.
 * 
 * <h4>1. Inviting contacts to join</h4>
 * <p>An application user can invite contacts to join a connection.</p>
 * <p>When the application calls {@link blackberry.bbm.platform.io.Connection#inviteContacts} a Contact Picker dialog will be shown containing contacts that have the application installed.
 * If the user invites contacts then the {@link blackberry.bbm.platform.io.Connection#onUsersInvited} callback will be invoked on the inviter's side.</p>
 * <p>Invitees receive the invitations within BBM.</p>
 * <ul>
 * <li>If they accept the invitation, {@link blackberry.bbm.platform.io.Connection#onUsersJoined} is invoked on the inviter's side, and {@link blackberry.bbm.platform.io.onConnectionCreated} is invoked on the invitee's side with the connection they just joined. 
 * <li>If they decline the invitation, {@link blackberry.bbm.platform.io.Connection#onUserDeclined} is invoked on the inviter's side.
 * </ul>
 * <br>{@image /images/bbm/invite_to_join.png}<br>
 * 
 * <h4>2. Hosting a public connection for non-contacts to join</h4>
 * <p>An application user can also host an event within a public connection to let all application users join.</p>
 * <p>The host should assign the following additional callbacks to their connection: {@link blackberry.bbm.platform.io.Connection#onJoinRequestReceived} and {@link blackberry.bbm.platform.io.Connection#onJoinRequestCanceled}.
 * <p>Peers should assign the following additional callbacks: {@link blackberry.bbm.platform.io.onJoinRequestAccepted} and {@link blackberry.bbm.platform.io.onJoinRequestDeclined}.
 * <p>When the application calls {@link blackberry.bbm.platform.io.Connection#enableHosting} a dialog will be shown for the user to allow or deny the decision. If the user allows, the application should then post the host's PIN and PPID to its discovery service. <b>The BBM platform does not provide a discovery service. This must be provided by the application developer.</b>
 * <p>Peers should download host information from the discovery service and then call {@link blackberry.bbm.platform.io.requestToJoin}. The peer will also be presented with a dialog to allow or deny the decision.
 * <p>At this point the request is in the <code>"pending"</code> state. In this state the peer can {@link blackberry.bbm.platform.io.OutgoingJoinRequest#cancel} the request, and the host can {@link blackberry.bbm.platform.io.IncomingJoinRequest#accept} or {@link blackberry.bbm.platform.io.IncomingJoinRequest#decline}.</p>
 * <br>{@image /images/bbm/hosting.png}<br>
 * </p>
 * @BB50+
 */
blackberry.bbm.platform.io = {
    
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
     * @description Creates a connection.
     * @param {String} type The type of connection to create: <code>"channel"</code> or <code>"session"</code>.
     * @returns {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} The connection created.
     * @BB50+
     */
    createConnection: function(type) {
    },
        
    /**
     * @propertyCB onConnectionCreated Invoked when a channel is created by BBM. <b>This is not invoked following {@link blackberry.bbm.platform.io.createConnection}.</b>
     * <p>If the application chooses to keep this connection open, it should assign callbacks to it in this method.</p>
     * 
     * <p>
     * <table border="1px solid">
     * <thead>
     * <tr>
     * <th>Event</th>
     * <th>Description</th>
     * <th>Parameter</th>
     * </tr>
     * </thead>
     * <tbody>
     * <tr>
     * <td><code>"selfaccepted"</code></td>
     * <td>The user accepted an invitation in BBM. The connection was created to accept the invitation.</td>
     * <td><code>cookie</code> sent with the invitation</td>
     * </tr>
     * <tr>
     * <td><code>"BBMmenuinvite"</code></td>
     * <td>The user sent an invitation via a menu item in BBM. The connection was created to send the invitation.</td>
     * <td>ID of the menu item which was used to invite</td>
     * </tr>
     * </tbody>
     * </table>
     * @param {String} event The event causing the connection to be created.
     * @param {String} connectionType The type of connection created: <code>"channel"</code> or <code>"session"</code>.
     * @param {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} connection The new connection.
     * @param {void} param The parameter associated with the event.
     * @BB50+
     */
    onConnectionCreated: function(event, connectionType, connection, param) {
    },
    
    ////////////////////////////////////
    // Non-BBM Contact Invite Support //
    ////////////////////////////////////
    
    /**
     * @description Sends a join request to a user hosting a public connection for others to join.
     * <p>The host does not need to be a contact of the current user.
     * @param {String} hostPIN The host PIN. Can be obtained by <code>blackberry.identity.PIN</code>
     * @param {String} hostPPID The host PPID. Can be obtained by <code>blackberry.bbm.platform.self.ppid</code>.
     * @callback {Function} onComplete Invoked when the user finishes approving the join request.
     * @callback {blackberry.bbm.platform.io.BBMPlatformOutgoingJoinRequest} onComplete.request The
     * request sent to the host; <code>undefined</code> if the user aborted the join request.
     * @param {String} [cookie] A custom parameter provided by the application.
     * e.g. Their current game level. Max length of 128 characters.
     * @throws {IllegalStateException} If the current user has connected with the host in a connection
     * but still attempts to send another join request to the host.
     * @throws {IllegalArgumentException} If <code>hostPIN</code> is invalid.
     * @throws {IllegalArgumentException} If <code>hostPPID</code> is invalid.
     * @throws {IllegalArgumentException} If <code>cookie</code> is longer than 128 characters.
     * @BB50+
     */
    requestToJoin: function(pin, ppid, onComplete, cookie) { },
    
    /**
     * @description The pending join requests the user has sent but has not been accepted or declined
     * by the hosts.
     * <p>The user can cancel a pending request as long as it has not been accepted or declined by the host.
     * The request will be removed from this list once either the user cancels, or the host accepts or declines.
     * @type blackberry.bbm.platform.io.OutgoingJoinRequest[]
     * @BB50+
     */
    outgoingJoinRequests: 0,
    
    /**
     * @propertyCB onJoinRequestAccepted Invoked when an outgoing join request is accepted by the host.
     * @param {blackberry.bbm.platform.io.OutgoingJoinRequest} request The accepted request.
     * @param {String} cookie The cookie sent with the join request in {@link requestToJoin}. <code>undefined</code>
     * if no cookie was provided.
     * @BB50+
     */
    onJoinRequestAccepted: function(request, cookie) { },
    
    /**
     * @propertyCB onJoinRequestDeclined Invoked when an outgoing join request is declined by the host.
     * <table border="1" width="100%">
     * <thead>
     * <tr>
     * <th>Reason</th>
     * <th>Description</th>
     * </tr>
     * </thead>
     * <tbody>
     * <tr>
     * <td>hostdeclined</td>
     * <td>The host declined without a specific reason.</td>
     * </tr>
     * <tr>
     * <td>hostppidinvalid</td>
     * <td>The host PPID is invalid.</td>
     * </tr>
     * <tr>
     * <td>appnotrunning</td>
     * <td>The host's application was not running when they received the request.</td>
     * </tr>
     * <tr>
     * <td>connectionnotfound</td>
     * <td>The host is not hosting on any connection.</td>
     * </tr>
     * <tr>
     * <td>connectionfull</td>
     * <td>The host's hosted connection is full.</td>
     * </tr>
     * </tbody>
     * </table>
     * @param {blackberry.bbm.platform.io.OutgoingJoinRequest} request The declined request.
     * @param {String} reason The reason that the request was declined. 
     * @BB50+
     */
    onJoinRequestDeclined: function(request, reason) { },
    
    /////////////////////////////////
    // CONTACT UNREACHABLE SUPPORT //
    /////////////////////////////////
    
    /**
     * @propertyCB onUserReachable Invoked when a contact has become reachable after a ContactUnreachableException was thrown.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who has become reachable.
     * @BB50+
     */
    onUserReachable: function(user) { },
    
    /**
     * @propertyCB onDataExpired Invoked when pending data for an unreachable user has expired.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The unreachable user.
     * @param {String[]} data The data messages which expired.
     * @BB50+
     */
    onDataExpired: function(user, data) { }
};
