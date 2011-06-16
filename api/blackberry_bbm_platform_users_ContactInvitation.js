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
 * @class A BBM contact invitation to be used in {@link blackberry.bbm.platform.users.inviteToBBM}
 * @param {String} PIN The user's PIN.
 * @param {String} name The user's name.
 * @constructor
 * @BB50+
 */
blackberry.bbm.platform.users.ContactInvitation = function(PIN, name) {

    /**
     * The user's PIN.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.PIN = "";

    /**
     * @description The user's name.
     * @type String
     * @readOnly
     * @BB50+
     */
    this.name = "";

};