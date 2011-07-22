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
 * @namespace Provides services to create, accept, and manage connections.
 * <h3>Connections</h3>
 * <h4>Connection types</h4>
 * The BBM Platform supports the following types of connections:
 * <br/>{@link blackberry.bbm.platform.io.Channel}
 * <br/>{@link blackberry.bbm.platform.io.Session}
 * 
 * <h4>Creating a connections</h4>
 * <p>Connections can be created using {@link blackberry.bbm.platform.io.createConnection}.
 * When a connection is created, the application should assign callbacks to it in order to be notified
 * of various events.</p>
 * 
 * <pre>
 * var type = ... // One of "channel" or "session"
 * var conn = blackberry.bbm.platform.io.createConnection(type);
 * setConnectionListeners(conn, type);
 * </pre>
 * 
 * <h4>Accepting incoming connections</h4>
 * When the current user accepts an invitation within BBM, {@link blackberry.bbm.platform.io.event:onconnectionaccepted}
 * will be invoked with the connection on which the invitation was accepted. The application should
 * assign callbacks to the connection within this method.
 * <pre>
 * var conn;
 * 
 * blackberry.bbm.platform.io.onconnectionaccepted = function(type, connection, cookie) {
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
 *     conn.onusersinvited = function(users) {
 *         // ...
 *     };
 *     conn.onusersjoined = function(users, type, cookie) {
 *         // ...
 *     };
 *     conn.onuserdeclined = function(user) {
 *         // ...
 *     };
 *     conn.onuserleft = function(user) {
 *         // ...
 *     };
 *     conn.ondata = function(user, data) {
 *         // ...
 *     };
 *     
 *     // Session callbacks
 *     if(type == "session") {
 *         conn.onbroadcastdata = function(user, data) {
 *             // ...
 *         };
 *         conn.onusersremoved = function(user, users) {
 *             // ...
 *         };
 *         conn.onended = function(user) {
 *             // ...
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
 * If the user invites contacts then the {@link blackberry.bbm.platform.io.Connection#event:onusersinvited} callback will be invoked on the inviter's side.</p>
 * <p>Invitees receive the invitations within BBM.</p>
 * <ul>
 * <li>If they accept the invitation, {@link blackberry.bbm.platform.io.Connection#event:onusersjoined} is invoked on the inviter's side, and {@link blackberry.bbm.platform.io.event:onconnectionaccepted} is invoked on the invitee's side with the connection they just joined. 
 * <li>If they decline the invitation, {@link blackberry.bbm.platform.io.Connection#event:onuserdeclined} is invoked on the inviter's side.
 * </ul>
 * <br>{@image /images/bbm/invite_to_join.png}<br>
 * 
 * <h4>2. Hosting a public connection for non-contacts to join</h4>
 * <p>An application user can also host an event within a public connection to let all application users join.</p>
 * <p>The host should assign the following additional callbacks to their connection: {@link blackberry.bbm.platform.io.Connection#event:onjoinrequestreceived} and {@link blackberry.bbm.platform.io.Connection#event:onjoinrequestcanceled}.
 * <p>Peers should assign the following additional callbacks: {@link blackberry.bbm.platform.io.event:onjoinrequestaccepted} and {@link blackberry.bbm.platform.io.event:onjoinrequestdeclined}.
 * <p>When the application calls {@link blackberry.bbm.platform.io.Connection#enableHosting} a dialog will be shown for the user to allow or deny the decision. If the user allows, the application should then post the host's PIN and PPID to its discovery service. <b>The BBM platform does not provide a discovery service. This must be provided by the application developer.</b>
 * <p>Peers should download host information from the discovery service and then call {@link blackberry.bbm.platform.io.requestToJoin}. The peer will also be presented with a dialog to allow or deny the decision.
 * <p>At this point the request is in the <code>"pending"</code> state. In this state the peer can {@link blackberry.bbm.platform.io.OutgoingJoinRequest#cancel} the request, and the host can {@link blackberry.bbm.platform.io.IncomingJoinRequest#accept} or {@link blackberry.bbm.platform.io.IncomingJoinRequest#decline}.</p>
 * <br>{@image /images/bbm/hosting.png}<br>
 * </p>
 * @beta
 * @BB50+
 */
blackberry.bbm.platform.io = {
        
    /**
     * @description Creates a connection.
     * <p><b>The application should assign callbacks to the connection after creating it.</b></p>
     * @param {String} type The type of connection to create: <code>"channel"</code> or <code>"session"</code>.
     * @returns {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} The connection created.
     * @BB50+
     */
    createConnection: function(type) {
    },
    
    /**
     * Invoked when the current user invites another using a menu item in BBM. The connection was
     * created by the BBM Platform in order to send the invitation.
     * <p><b>The application should assign callbacks to the connection in this method.</b></p>
     * <p>See {@link blackberry.bbm.platform.ui.menu} for further details on invitation menu items.</p>
     * @param {blackberry.bbm.platform.io.Channel} channel The channel used to send the invitation.
     * @param {Number} menuItemId The ID of the menu item used to send the invitation. This is
     * assigned by the application in {@link blackberry.bbm.platform.ui.addMenuItem}.
     * @event
     * @BB50+
     */
    onbbmmenuinvite: function(channel, menuItemId) {
    },
    
    /**
     * Invoked when an incoming connection is accepted. There are two cases when this may happen:
     * <ul>
     * <li>When an invitation is accepted in the BBM chat window.
     * <li>When a host accepts a join request, following {@link blackberry.bbm.platform.io.onjoinrequestaccepted}.
     * </ul>
     * <p><b>The application should assign callbacks to the connection in this method.</b></p>
     * @param {String} connectionType The type of connection: <code>"channel"</code> or <code>"session"</code>.
     * @param {blackberry.bbm.platform.io.Channel|blackberry.bbm.platform.io.Session} connection The connection.
     * @param {String} cookie The cookie sent with the invitation. May be <code>null</code>.
     * @event
     * @BB50+
     */
    onconnectionaccepted: function(connectionType, connection, cookie) {
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
     * Invoked when an outgoing join request is accepted by the host.
     * @param {blackberry.bbm.platform.io.OutgoingJoinRequest} request The accepted request.
     * @param {String} cookie The cookie sent with the join request in {@link requestToJoin}. <code>undefined</code>
     * if no cookie was provided.
     * @event
     * @BB50+
     */
    onjoinrequestaccepted: function(request, cookie) { },
    
    /**
     * Invoked when an outgoing join request is declined by the host.
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
     * @event
     * @BB50+
     */
    onjoinrequestdeclined: function(request, reason) { },
    
    /////////////////////////////////
    // CONTACT UNREACHABLE SUPPORT //
    /////////////////////////////////
    
    /**
     * Invoked when a contact has become reachable after a ContactUnreachableException was thrown.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The user who has become reachable.
     * @event
     * @BB50+
     */
    onuserreachable: function(user) { },
    
    /**
     * Invoked when pending data for an unreachable user has expired.
     * @param {blackberry.bbm.platform.users.BBMPlatformUser} user The unreachable user.
     * @param {String[]} data The data messages which expired.
     * @event
     * @BB50+
     */
    ondataexpired: function(user, data) { }
};
