# BlackBerry&reg; WebWorks&trade; API Documentation

This repository contains API documentation for the plugins hosted here:

[https://github.com/blackberry/cordova-blackberry-plugins/](https://github.com/blackberry/cordova-blackberry-plugins/)

Docs are written in [DITA format](http://docs.oasis-open.org/dita/v1.2/spec/DITA1.2-spec.html)

The plugins conform to the [Apache Cordova plugin specification](http://cordova.apache.org/docs/en/edge/guide_hybrid_plugins_index.md.html)

This project is Open Sourced under the Apache 2.0 license

## Conversion Guide

I. INTRODUCTION
    This guide will aid you in the conversion of our js docs into the DITA format.

    To learn more about DITA documentation, please go to:
    http://docs.oasis-open.org/dita/v1.2/spec/DITA1.2-spec.html

    The original WebWorks API documentation can be found in the following repo:
    https://github.com/blackberry/WebWorks-API-Docs/tree/master/api

    Note: All examples will use the blackberry_audio.js file which can be found here:
    https://github.com/blackberry/WebWorks-API-Docs/blob/master/api/blackberry_audio.js

    To validate your own documentation, please run the test script located on on
    WebWorks-API-Docs/api/. This is on the webworks2 branch.
    https://github.com/blackberry-webworks/WebWorks-API-Docs/tree/webworks2


II. NAMING
    For each API, there will be a .xml file for each method and/or property it contains. For example,
    in blackberry_audio.js, there are two functions contained in the blackberry.audio object and therefore there
    will be two .xml documentation files to represent these properties. To keep things consistent and neat,
    please name your .xml files in the following manner:

        apiName_property.xml

    For the first blackberry.audio property, the .xml file should be named
    blackberry_audio_supportedContentTypes.xml.

    Note: The file name will also be the reference id which will be discussed later in this README.


III. HEADER TAGS
    At the beginning of your document, paste the following:

        <?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE reference PUBLIC "-//IXIA//DTD IXIA DITA Composite//EN" "../../system/dtd/ixia/IxiaDitabase.dtd">


IV. REFERENCE
    The following should be placed into your .xml after the header tags from III.

        <reference id="FILENAME_GOES_HERE" xml:lang="en-us">
            <title><apiname>PROPERTY GOES HERE</apiname></title>
            <shortdesc><i>SHORT DESCRIPTION GOES HERE</i></shortdesc>

                (child tags)

        </reference>

    The reference id will be, as mentioned before, the file name of of your document without the .xml included.
    Inbetween title and apiname, the property name in all lowercase should be placed there. The description of that
    property can be found in the respective .js file. An example for blackberry.audio.supportedContentTypes is
    shown below:

        <reference id="blackbery_audio_supportedContentTypes" xml:lang="en-us">
            <title><apiname>supportedContentTypes()</apiname></title>
            <shortdesc><i>Request the list of supported content types for a specified protocol.</i></shortdesc>

                (child tags)

        </reference>


 V. REFBODY
    (parent: <reference>)
    The refbody tags will house the remaining content of the api documentation. These tags follow <reference>.

        (header and open reference tags)
            <refbody>

                (content)

            </refbody>
        (close reference tag)

    To build on the previous example, adding the refbody tags should look like:

        <reference id="blackbery_audio_supportedContentTypes" xml:lang="en-us">
            <title><apiname>supportedContentTypes()</apiname></title>
            <shortdesc><i>Request the list of supported content types for a specified protocol.</i></shortdesc>
            <refbody>

                (content)

            </refbody>
        </reference>


VI. SECTION AND EXAMPLE
    (parent: <refbody>)
    Section tags are used to compartmentalize content in the document. The <example> tag is used when the section
    is referring to an example. It should look like the following:

        (header, reference and refbody tags)
            <section>
                <title>TITLE OF SECTION HERE</title>

                (content)

            </section>
        (closing tags)

    Note that there is a title for each section tag. The type of sections are:
        A) Synopsis. This section follows the supported platforms and should look like:

            <section>
                <title>Synopsis:</title>
                <pre scale="80">&lt;feature id="blackberry.YOURAPIHERE" required="true" version="1.0.0.0" /&gt;</pre>
                <pre scale="80">THE METHOD/PROPERTY HERE</pre>
            </section>

        Note that if the property is read-only, mention if it a String, Object etc.

        B) Parameters and Returns. These two seperate sections are divided into lists seen in VII.
        C) Example. The section where sample code is placed. This should be the last section of your document.

            <example>
                <title>Example:</title>
                <p><pre scale="80">

                    (example code here)

                </pre></p>
            </example>

    Please see VII. to see examples of these sections.


VII. DL, DLENTRY, DT, DD
    (parent: <section>)
    DL tags further organize content. They are used in in the Parameters and Returns sections.

        (header, reference, refbody and section tags)
            <dl>
                <dlentry>
                    <dt><varname>TITLE OF LIST ENTRY HERE</varname><dt>
                    <dd><p>DESCRIPTION OF LIST ENTRY HERE</p></dd>
                </dlentry>
            </dl>
        (closing tags)


VIII. COMPLETE EXAMPLE FOR BLACKBERRY.AUDIO
    The blackberry_audio_supportedContentTypes.xml api should look like the following:
    (data taken from: https://github.com/blackberry/WebWorks-API-Docs/blob/master/api/blackberry_audio.js)

        <?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE reference PUBLIC "-//IXIA//DTD IXIA DITA Composite//EN" "../../system/dtd/ixia/IxiaDitabase.dtd">
        <reference id="blackbery_audio_supportedContentTypes" xml:lang="en-us">
            <title><apiname>supportedContentTypes()</apiname></title>
            <shortdesc><i>Request the list of supported content types for a specified protocol.</i></shortdesc>
            <refbody>
                <section>
                    <title>Synopsis:</title>
                    <pre scale="80">&lt;feature id="blackberry.audio" required="true" version="1.0.0.0" /&gt;</pre>
                    <pre scale="80">supportedContentTypes(protocol)</pre>
                </section>
                <section>
                    <title>Parameters:</title>
                    <dl>
                        <dlentry>
                            <dt><varname>protocol</varname> {String}</dt>
                            <dd><p>The input protocol for the supported content types.</p></dd>
                        </dlentry>
                    </dl>
                </section>
                <section>
                    <title>Returns:</title>
                    <dl>
                        <dlentry>
                            <dt>{String[]}</dt>
                            <dd><p>The list of supported content types for the protocol provided.</p></dd>
                        </dlentry>
                    </dl>
                </section>
                <example>
                    <title>Example:</title>
                    <p><pre scale="80">
                        &lt;script type=&quot;text/javascript&quot;&gt;
                            // Display supported content types for specified protocol
                            var protocol = &quot;file&quot;;
                            var contentTypes = blackberry.audio.supportedContentTypes(protocol);

                            if (contentTypes) {
                                var printingContentTypesList = &quot;&quot;;
                                for (i = 0; i &lt; contentTypes.length; i++) {
                                    printingContentTypesList += contentTypes[i] + &quot;\n&quot;;
                                }
                                alert(&quot;List of &quot; + contentTypes.length + &quot; supported content-types for &apos;&quot; + protocol + &quot;&apos; :\n&quot; + printingContentTypesList);
                            }
                         &lt;/script&gt;
                    </pre></p>
                </example>
            </refbody>
        </reference>


IX. ADDING YOUR .XML FILE TO THE DITAMAP
    In the main.ditamap file, add the following line,

        <topicref href=FILE_NAME_HERE" />

    FILE_NAME_HERE is replaced with the filename from II with the file extension. For the blackberry
    audio example, it should look like the following:

        <topicref href="blackberry_audio_supportedContentTypes" />
