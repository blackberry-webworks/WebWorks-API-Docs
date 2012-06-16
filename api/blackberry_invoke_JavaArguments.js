/*
* Copyright 2010-2011 Research In Motion Limited.
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
* <div><p>
*       The JavaArguments object must be created as an instance using the new keyword.
*     </p></div>
* @toc {Invoke} JavaArguments 
* @BB50+
* @RIPPLE
* @class The JavaArguments object is an instance object, and is used as a parameter to the invoke() method when invoking a Java application.
* @featureID blackberry.invoke
* @featureID blackberry.invoke.JavaArguments
* @constructor Constructor for a new JavaArguments object which invokes another application on the BlackBerry smartphone. 
* @param {String} uri URL which can be in any form and is passed in the arguments to main. The uri can be in the format: &apos;appName&apos;, &apos;appName.entryPoint&apos; or &apos;appName[.entryPoint]?arg1=val&amp;arg2=val&apos;.
* @param {String} [params] String array that contains additional parameters. Each entry in the params array should be in a name value pair such as &apos;arg1=val1&apos;.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt; 
*    var args = new blackberry.invoke.JavaArguments(&apos;net_rim_bb_memo_app&apos;);
*    blackberry.invoke.invoke(blackberry.invoke.APP_JAVA, args);  &sol;&sol; Java
* &lt;&sol;script&gt;
*/
blackberry.invoke.JavaArguments = function(uri,params) { };


