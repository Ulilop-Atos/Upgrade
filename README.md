# Atos - Upgrade Program
*****

A repository dedicated to the video creations for the Atos Upgrade Program. 

## HTML
I strongly recommend taking a look to these links so you can gain additional knowledge in HTML and see some examples:
1. [W3C HTML5 Reference](https://dev.w3.org/html5/html-author/)
2. [CodePen](https://codepen.io/)

### Media
Here's a list of media/multimedia tags frequently used in web development including a code example and their attributes.
This effort isn't an exhaustive one, please refer to the [WC3 HTML specification](https://html.spec.whatwg.org/multipage/) for a complete detailed list.

<small>
    <em>You can consult the sources and references used for this document creation in the list below.</em>
</small>

<details> <summary>Bibliography</summary>

+ HTML.com
    + [HTML5 Basics](https://html.com/html5/)
    + [HTML CHEAT SHEET](https://digital.com/tools/html-cheatsheet/)
+ W3Schools
    + [HTML Multimedia](https://www.w3schools.com/html/html_media.asp)
    + [HTML Element Reference](https://www.w3schools.com/TAGS/default.ASP)
    + [SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
    + [HTML \<img\> Tag](https://www.w3schools.com/tags/tag_img.asp)
    + [HTML \<source\> Tag](https://www.w3schools.com/tags/tag_source.asp)
    + [HTML \<picture\> Tag](https://www.w3schools.com/tags/tag_picture.asp)
    + [HTML \<audio\> Tag](https://www.w3schools.com/tags/tag_audio.asp)
    + [HTML \<video\> Tag](https://www.w3schools.com/tags/tag_video.asp)
    + [HTML \<object\> Tag](https://www.w3schools.com/tags/tag_object.asp)
    + [HTML \<iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
+ MDN Web Docs
    + [Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
    + [Multimedia and Embedding](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding)
    + [HTML elements reference](https://developer.mozilla.org/es/docs/Web/HTML/Element)
    + [MIME types (IANA media types)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
    + [\<svg\>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
+ Others
    + [Embed vs Object](https://stackoverflow.com/questions/1244788/embed-vs-object)
    + [Object Type Attribute](https://www.iana.org/assignments/media-types/media-types.xhtml)
    + [Prevent use of iframe from a third party](https://stackoverflow.com/questions/2896623/how-to-prevent-my-site-page-to-be-loaded-via-3rd-party-site-frame-of-iframe)
    + [WC3 HTML specification](https://html.spec.whatwg.org/multipage/)
    + [Can I Use?](https://caniuse.com/)

</details>


> <strong><em>Note: </em></strong>
    Not all the browsers support all the HTML5 features, take a look at [Can I Use?](https://caniuse.com/) to search for a feature in your favorite browser before using the element.

+ Code Quick Reference

    <strong>Images Tag</strong>

    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    alt |    text |    Specifies an alternate text for an image
    crossorigin |    anonymous, use-credentials |    Allow images from third-party sites that allow cross-origin access to be used with canvas
    height |    pixels |    Specifies the height of an image
    ismap |    ismap |    Specifies an image as a server-side image map
    loading |    eager, lazy |    Specifies whether a browser should load an image immediately or to defer loading of images until some conditions are met
    longdesc |    URL |    Specifies a URL to a detailed description of an image
    referrerpolicy |    no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url |    Specifies which referrer information to use when fetching an image
    sizes |    <em>sizes</em> |    Specifies image sizes for different page layouts
    src |    URL |    Specifies the path to the image
    srcset |    <em>URL-list </em> |    Specifies a list of image files to use in different situations
    usemap |    #mapname |    Specifies an image as a client-side image map
    width |    pixels |    Specifies the width of an image
    
    </details>
     
    
    ```html
    <!-- <img> -->
    <!-- Only PNG, GIF, JPEG, PDF (single page), XML, APNG, SVG, and MNG images are supported by the
         HTML standard. -->
    <img src="media/cat_grey.jpg" alt="A cat picture.">
    ```
    <strong>SVG Tag</strong> (Scalable Vector Graphics)

    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    height | <strong>&lt;length&gt;</strong>, <strong>&lt;percentage&gt;</strong>, auto | The displayed height of the rectangular viewport. Not the height of its coordinate system.
    preserveAspectRatio | xMinYMin, xMidYMin, xMaxYMin, xMinYMid, xMidYMid, xMaxYMid, xMinYMax, xMidYMax, xMaxYMax <small>(meet, slice)?optional</small> | How the svg fragment must be deformed if it is displayed with a different aspect ratio.
    viewBox | <strong>&lt;list-of-numbers&gt;</strong> | The SVG viewport coordinates for the current SVG fragment.
    width | <strong>&lt;length&gt;</strong>, <strong>&lt;percentage&gt;</strong>, auto | The displayed width of the rectangular viewport. Not the width of its coordinate system.
    x | <strong>&lt;length&gt;</strong>, <strong>&lt;percentage&gt;</strong> | The displayed x coordinate of the svg container. No effect on outermost svg elements.
    y | <strong>&lt;length&gt;</strong>, <strong>&lt;percentage&gt;</strong> | The displayed y coordinate of the svg container. No effect on outermost svg elements.
    
    </details>
     

    ```html
    <!-- <source> -->
    <!-- Use src attribute in <audio> and <video> and srcset in picture -->
    <svg width="200" height="200">
        <rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:5;stroke:rgb(0,0,0)" />
       
        <circle cx="100" cy="100" r="80" stroke="green" fill="yellow" />
        
        <polygon points="100,0 40,200 200,78 0,78 160,200" style="fill:orange;fill-rule:evenodd;" />
        
        <defs>
            <linearGradient id="gradient_1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:yellow;stop-opacity:1" />
            <stop offset="100%" style="stop-color:orange;stop-opacity:1" />
            </linearGradient>
        </defs>

        <ellipse cx="100" cy="110" rx="50" ry="45" fill="url(#gradient_1)" />

        <text fill="#ffffff" font-size="30" font-family="Verdana" x="70" y="120">SVG</text>
        
        Sorry, your browser does not support inline SVG.
    </svg>
    ```
    
    <strong>Source Tag</strong>

    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    media |<em>media_query</em> | Accepts any valid media query that would normally be defined in a CSS
    src |<em>URL</em> |Required when &lt;source&gt; is used in &lt;audio&gt; and &lt;video&gt;. Specifies the URL of the media file
    srcset |<em>URL</em> |Required when &lt;source&gt; is used in &lt;picture&gt;. Specifies the URL of the image to use in different situations
    type |<em>MIME-type</em> |Specifies the MIME-type of the resource
    
    </details>
     
    
    ```html
    <!-- <source> -->
    <!-- Use src attribute in <audio> and <video> and srcset in picture -->
    <source type="audio/mpeg" src="media/audio.mp3">
    <source type="image/jpeg" srcset="media/cat_grey.jpg">
    ```

    <strong>Picture Tag</strong>
    
    <details><summary>Attributes</summary>

        This element includes only global attributes. 😅
    
    </details>
     
    
    ```html
    <!-- <picture></picture> -->
    <!-- Use source tags but leave an img tag as a fall back -->
    <picture>
        <source media="(min-width:600px)" srcset="media/cat_black.jpg">
        <source media="(min-width:300px)" srcset="media/cat_white.jpg">
        <img src="media/cat_grey.jpg" alt="A cat picture." style="width:auto;">
    </picture>
    ```

    <strong>Video Tag</strong>
    
    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    autoplay | autoplay | Specifies that the video will start playing as soon as it is ready
    controls | controls | Specifies that video controls should be displayed (such as a play/pause button etc).
    height | <em>pixels</em> | Sets the height of the video player
    loop | loop | Specifies that the video will start over again, every time it is finished
    muted | muted | Specifies that the audio output of the video should be muted
    poster | <em>URL</em> | Specifies an image to be shown while the video is downloading, or until the user hits the play button
    preload | auto, metadata, none | Specifies if and how the author thinks the video should be loaded when the page loads
    src | <em>URL</em> | Specifies the URL of the video file
    width | <em>pixels</em> | Sets the width of the video player
    
    </details>
     
    
    ```html
    <!-- <video></video> -->
    <!-- Only MP4, WebM, and Ogg video are supported by the HTML standard. -->
    <video width="320" height="240" autoplay muted>
        <source src="media/movie.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    ```

    <strong>Audio Tag</strong>
    
    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    autoplay | autoplay | Specifies that the audio will start playing as soon as it is ready
    controls | controls | Specifies that audio controls should be displayed (such as a play/pause button etc)
    loop | loop | Specifies that the audio will start over again, every time it is finished
    muted | muted | Specifies that the audio output should be muted
    preload | auto, metadata, none | Specifies if and how the author thinks the audio should be loaded when the page loads
    src | <em>URL</em> | Specifies the URL of the audio file
    
    </details>
     
    
    ```html
    <!-- <audio></audio> -->
    <!-- Only MP3, WAV, and Ogg audio are supported by the HTML standard. -->
    <audio controls>
        <source src="media/audio.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
    ```
    
    <strong>Object Tag</strong>
    
    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    data | <em>URL</em> | Specifies the URL of the resource to be used by the object
    form | <em>form_id</em> | Specifies which form the object belongs to
    height | <em>pixels</em> | Specifies the height of the object
    name | <em>name</em> | Specifies a name for the object
    type | <em>media_type</em> | Specifies the media type of data specified in the data attribute
    typemustmatch | <em>true/false</em> | Specifies whether the type attribute and the actual content of the resource must match to be displayed
    usemap | <em>#mapname</em> | Specifies the name of a client-side image map to be used with the object
    width | <em>pixels</em> | Specifies the width of the object
    
    </details>
     
    
    ```html
    <!-- <object></object> -->
    <!-- Originally intended to embed plug-ins, can be used to embed HTML, images, video and 
        others. -->
    <object  width="100%" height="500px" data="snippet.html"></object>
    <object type="application/pdf" data="media/test.pdf"></object>

    ```
    
    <strong>Iframe Tag</strong> (Inline Frame)
    
    <details><summary>Attributes</summary>

    | Attribute	| Value | Description |
    | :-------- |:-----:| :-----------|
    allow | &nbsp; | Specifies a feature policy for the &lt;iframe&gt;
    allowfullscreen | true, false | Set to true if the &lt;iframe&gt; can activate fullscreen mode by calling the requestFullscreen() method
    allowpaymentrequest | true, false | Set to true if a cross-origin &lt;iframe&gt; should be allowed to invoke the Payment Request API
    height | <em>pixels</em> | Specifies the height of an &lt;iframe&gt;. Default height is 150 pixels
    loading | eager, lazy | Specifies whether a browser should load an iframe immediately or to defer loading of iframes until some conditions are met
    name | <em>text</em> | Specifies the name of an &lt;iframe&gt;
    referrerpolicy | no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin-when-cross-origin, unsafe-url | Specifies which referrer information to send when fetching the iframe 
    sandbox | allow-forms, allow-pointer-lock, allow-popups, allow-same-origin, allow-scripts, allow-top-navigation | Enables an extra set of restrictions for the content in an &lt;iframe&gt;
    src | <em>URL</em> | Specifies the address of the document to embed in the &lt;iframe&gt;
    srcdoc | <em>HTML_code</em> | Specifies the HTML content of the page to show in the &lt;iframe&gt;
    width | <em>pixels</em> | Specifies the width of an &lt;iframe&gt;. Default width is 300 pixels
    
    </details>
     
    
    ```html
    <!-- <iframe></iframe> -->
    <!-- Represents a nested browsing context, embedding another HTML page into the current one. -->
    <iframe src="https://www.atos.net" title="Atos"></iframe>
    ```
     
## CSS
I strongly recommend taking a look to these links so you can gain additional knowledge in CSS and see some examples:
1. [CSS-Tricks](https://css-tricks.com/)
2. [CSSreference.io](https://cssreference.io/)
3. [CodePen](https://codepen.io/)


### Flex & Flexbox
The Flexible Box Module, commonly <strong>flexbox</strong>, is one of the most popular layouts for a
CSS <em>display</em>. Is a one dimensional element (like an array) that suits really good in sections
or pages that need to consider multiple screens sizes and want a fast and nice looking layout.
This display mode is a set of properties, we will take a look to the behavior of each one of them.

<small>
    <em>You can consult the sources and references used for this document creation in the list below.</em>
</small>

<details> <summary>Bibliography</summary>

+ CSS-Tricks 
    + [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
+ CSSreference.io
    + [Flexbox in CSS](https://cssreference.io/flexbox/)
+ Code Quick ReferencePen
    + [Flexbox Playground](https://codepen.io/enxaneta/pen/adLPwv)
+ MDN Web Docs
    + [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
    + [Basic Concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
+ W3C
    + [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
+ Others:
    + [Safe/unsafe Alignment in CSS Flexbox](https://www.stefanjudis.com/today-i-learned/safe-unsafe-alignment-in-css-flexbox/)
    + [Inline-flex vs Flex](https://stackoverflow.com/questions/27418104/whats-the-difference-between-displayinline-flex-and-displayflex) 
    + [Flex-start vs Baseline](https://stackoverflow.com/questions/34606879/whats-the-difference-between-flex-start-and-baseline) 

</details>

> <strong><em>Note: </em></strong>
    Please check out the small glossary before diving into the code.

<details> <summary>Glossary of terms</summary>
    
| Term  | Description |
| :---: | :---------- |
<strong>main axis</strong> | The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).
<strong>main-start \| main-end</strong> | The flex items are placed within the container starting from main-start and going to main-end.
<strong>main size</strong> | A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
<strong>cross axis</strong> | The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
<strong>cross-start \| cross-end</strong> | Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
<strong>cross size</strong> | The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.
<strong>rtl \| ltr</strong> | The [text direction](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
<strong>&lt;length&gt;</strong>  | Any length defined by the [HTML5 Standard](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
<strong>&lt;percentage&gt;</strong>  | Any percentage defined by the [HTML5 Standard](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
<strong>&lt;number&gt;</strong>  | A number.

</details>

+ Code Quick Reference

    ---
    
    ### <strong>Flex Container Properties</strong>  
  
    This is the container, all the flex elements will be organized here. 
        
    <details><summary><strong>display:&nbsp;</strong>flex | inline-flex</summary>
    
    To make a container a flex container, this property should be <em>flex</em> or <em>inline-flex</em>.
    The difference between them [is the same as in a display block.](https://stackoverflow.com/questions/27418104/whats-the-difference-between-displayinline-flex-and-displayflex) 

    ```css
    .container {
        display: flex;
        /* display: inline-flex; */
    }
    ```
    </details>

    <details><summary><strong>flex-direction:&nbsp;</strong>row | row-reverse | column | column-reverse</summary>
    
    This property value defines the main axis for the container. With rows, the main axis runs
    in the <strong>inline</strong> direction. With columns runs from top to bottom, the <strong>block</strong> direction.

    ```css
    .container {
        flex-direction: row; 
        /* (Default) left to right in ltr; right to left in rtl
            * [1st] [2nd] [3rd] 
            */
        flex-direction: row-reverse; 
        /* Right to left in ltr; left to right in rtl
            * [3rd] [2nd] [1st]  
            */
        flex-direction: column; 
        /* Same as row but top to bottom
            * [1st] 
            * [2nd] 
            * [3rd] 
            */
        flex-direction: column-reverse; 
        /* Same as row-reverse but bottom to top
            * [3rd] 
            * [2nd] 
            * [1st] 
            */
    }
    ```
    </details>

    <details><summary><strong>flex-wrap:&nbsp;</strong>nowrap | wrap | wrap-reverse</summary>
    
    As said before, a flexbox is one-dimensional, therefore, tries to occupy only one line. We can 
    make it occupy multiple lines with this property.

    ```css
    .container {
        flex-wrap: nowrap;
        /* Default: All items will be in the same line. Can cause an overflow.
         * [1st] [2nd] [3rd] [4th] [5th] [6th] [7th] [8th] [9th] 
         */
        flex-wrap: wrap; 
        /* Multi-lines, direction is defined by flex-direction
         * [1st] [2nd] [3rd] [4th] [5th] [6th] 
         * [7th] [8th] [9th]  
         */
        flex-wrap: wrap-reverse; 
        /* Multi-lines, opposite to direction defined by flex-direction
         * [7th] [8th] [9th]  
         * [1st] [2nd] [3rd] [4th] [5th] [6th] 
         */
    }
    ```
    </details>

    <details><summary><strong>flex-flow:&nbsp;</strong><em>flex-direction</em> | <em>flex-wrap</em></summary>
    
    Shorthand for <em>flex-direction</em> and <em>flex-wrap</em>
  
    ```css
    .container {
        flex-flow: column wrap;
    }
    ```
    </details>

    <details><summary><strong>justify-content:&nbsp;</strong>flex-start | flex-end | center | space-between | space-around | space-evenly</summary>
    
    This property value defines defines the alignment along the main axis.
    Can move the children to the start, center, or end of the container. Also distribute the items 
    using the spare space. 

    > <strong><em>Note: </em></strong>
    You can pair the values of this property with the keywords <em>safe</em> & <em>unsafe</em>, 
    to help preventing data loss in case of an overflow. See [this link](https://www.stefanjudis.com/today-i-learned/safe-unsafe-alignment-in-css-flexbox/) for details.

    ```css
    .container {
        justify-content: flex-start;
        /* Default: items are packed towards the start of the flex-direction.
        * [1st] [2nd] [3rd] ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵
        */
        justify-content: flex-end;
        /* Items are packed towards the end of the flex-direction.
        * ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ [1st] [2nd] [3rd]
        */
        justify-content: center;
        /* Items are packed in the center of the flexbox.
        * ⎵ ⎵ ⎵ ⎵ ⎵ [1st] [2nd] [3rd] ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ ⎵
        */
        justify-content: space-between;
        /* Items are distributed to cover most of the flexbox.
        * [1st] ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ [2nd] ⎵ ⎵ ⎵ ⎵ ⎵ ⎵ [3rd]
        */
        justify-content: space-around;
        /* Items are given the same space in both directions, this means that on the border is one unit of space and two between items.
        * ⎵ ⎵ [1st] ⎵ ⎵ ⎵ ⎵ [2nd] ⎵ ⎵ ⎵ ⎵ [3rd] ⎵ ⎵ 
        */
        justify-content: space-evenly;
        /* Items have the same space between them, including borders.
        * ⎵ ⎵ ⎵ [1st] ⎵ ⎵ ⎵ [2nd] ⎵ ⎵ ⎵ [3rd] ⎵ ⎵ ⎵ 
        */
    }
    ```
    </details>

    <details><summary><strong>align-items:&nbsp;</strong>stretch | flex-start | flex-end | center | baseline</summary>
    
    This property value defines the default alignment for items inside the flex container.

    > <strong><em>Note: </em></strong>
    You can pair the values of this property with the keywords <em>safe</em> & <em>unsafe</em>, 
    to help preventing data loss in case of an overflow. See [this link](https://www.stefanjudis.com/today-i-learned/safe-unsafe-alignment-in-css-flexbox/) for details.

    ```css
    .container {
        align-items: stretch; 
        /* Default: Stretch the items to fill the container
         * ┌─────────────────────────┐
         * │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
         * │ │   │ │   │ │   │ │   │ │
         * │ │   │ │   │ │   │ │   │ │
         * │ │   │ │   │ │   │ │   │ │
         * │ │   │ │   │ │   │ │   │ │
         * │ └───┘ └───┘ └───┘ └───┘ │
         * └─────────────────────────┘
         */
        align-items: flex-start; 
        /* The items are aligned to the beginning of the cross axis.
         * ┌─────────────────────────┐
         * │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
         * │ │   │ │   │ └───┘ │   │ │
         * │ └───┘ │   │       │   │ │
         * │       └───┘       │   │ │
         * │                   └───┘ │
         * │                         │
         * └─────────────────────────┘
         */
        align-items: flex-end; 
        /* The items are aligned to the end of the cross axis.
         * ┌─────────────────────────┐
         * │                         │
         * │                   ┌───┐ │
         * │       ┌───┐       │   │ │
         * │ ┌───┐ │   │       │   │ │
         * │ │   │ │   │ ┌───┐ │   │ │
         * │ └───┘ └───┘ └───┘ └───┘ │
         * └─────────────────────────┘
         */
        align-items: center; 
        /* The items are aligned to the center of the cross axis.
         * ┌─────────────────────────┐
         * │                   ┌───┐ │
         * │ ┌───┐ ┌───┐       │   │ │
         * │ │   │ │   │ ┌───┐ │   │ │
         * │ │   │ │   │ └───┘ │   │ │
         * │ └───┘ └───┘       │   │ │
         * │                   └───┘ │
         * └─────────────────────────┘
         */
        align-items: baseline; 
        /* The items are aligned to baseline of the text/content inside.
         * ┌─────────────────────────┐
         * │       ┌───┐       ┌───┐ │
         * │ ┌───┐ │   │ ┌───┐ │   │ │
         * │ │ A │ │ B │ │ C │ │ D │ │
         * │ │   │ └───┘ └───┘ │   │ │
         * │ └───┘             └───┘ │
         * └─────────────────────────┘
         */
    }
    ```

    > <strong><em>Note: </em></strong>
    You can pair <strong>baseline</strong> with the keywords <em>first</em> & <em>last</em> i.e.: `align-items: first baseline;` to select either the first or last baseline of the contents used for the alignment.

    </details>

    <details><summary><strong>align-content:&nbsp;</strong>flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | baseline</summary>
    
    This property value defines the alignment of the flex content whenever theres extra space in the cross axis. This property <strong>only</strong> takes effect on <strong>multi-line flexible containers</strong>, where flex-wrap is set to either wrap or wrap-reverse.

    > <strong><em>Note: </em></strong>
    You can pair the values of this property with the keywords <em>safe</em> & <em>unsafe</em>, 
    to help preventing data loss in case of an overflow. See [this link](https://www.stefanjudis.com/today-i-learned/safe-unsafe-alignment-in-css-flexbox/) for details.

    ```css
    .container {
        align-content: flex-start; 
        /* flex-start / start: items packed to the start of the container. 
         * 'flex-start' honors the flex-direction 
         * 'start' honors the writing-mode direction.
         * ┌─────────────────────────┐
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * │                         │
         * │                         │
         * └─────────────────────────┘
         */
        align-content: flex-end; 
        /* flex-end / end: items packed to the end of the container. 
         * Is the same difference as before.
         * ┌─────────────────────────┐
         * │                         │
         * │                         │
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * └─────────────────────────┘
         */
        align-content: center; 
        /* Items packed at the center of the container.  
         * ┌─────────────────────────┐
         * │                         │
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * │                         │
         * └─────────────────────────┘
         */
        align-content: stretch; 
        /* The lines stretch to take the remaining space
         * ┌─────────────────────────┐
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ │     │ │       │ │   │ │
         * │ └─────┘ └───────┘ └───┘ │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ │  │ │  │ │     │ │   │ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │ ┌───┐ ┌───┐             │
         * │ │   │ │   │             │
         * │ └───┘ └───┘             │
         * └─────────────────────────┘
         */
        align-content: space-between; 
        /* Items are distributed to cover most of the container.
         * ┌─────────────────────────┐
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │                         │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │                         │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * └─────────────────────────┘
         */
        align-content: space-around; 
        /* Items are given the same space in both directions.
         * This means that on the border is one unit of space and two between items.
         * ┌─────────────────────────┐
         * │                         │
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │                         │
         * │                         │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │                         │
         * │                         │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * │                         │
         * └─────────────────────────┘
         */
        align-content: space-evenly; 
        /* Items have the same space between them, including borders.
         * ┌─────────────────────────┐
         * │                         │
         * │ ┌─────┐ ┌───────┐ ┌───┐ │
         * │ └─────┘ └───────┘ └───┘ │
         * │                         │
         * │ ┌──┐ ┌──┐ ┌─────┐ ┌───┐ │
         * │ └──┘ └──┘ └─────┘ └───┘ │
         * │                         │
         * │ ┌───┐ ┌───┐             │
         * │ └───┘ └───┘             │
         * │                         │
         * └─────────────────────────┘
         */
        
        align-content: baseline; 
        /* The items are aligned to baseline of the text/content inside. */
    }
    ```
     > <strong><em>Note: </em></strong>
    You can pair <strong>baseline</strong> with the keywords <em>first</em> & <em>last</em> i.e.: `align-content: last baseline;` to select either the first or last baseline of the contents  used for the alignment used for the alignment.

    </details>

    <details><summary><strong>gap, row-gap, column-gap:&nbsp;</strong>&lt;length&gt; | &lt;percentage&gt;</summary>
    
    This set of properties define the space between flex items. The property gap is a shorthand for <em>row-gap</em> & <em>column-gap</em>.

    ```css
    .container {
        display: flex;
        ...
        gap: 10px; /* Same for all sides */
        gap: 10px 20px; /* row-gap column-gap */
        row-gap: 10px;
        column-gap: 20px;
    }
    ```
    
    > <strong><em>Note: </em></strong>
    It is not exclusively for flexbox, <strong>gap</strong> works in grid and multi-column layout as well.

    </details>
    
    ---

    ### <strong>Flex Items Properties</strong>  
  
    This is the container, all the flex elements will be organized here. 

    <details><summary><strong>order:&nbsp;</strong>&lt;number&gt;</summary>
    
    By default, the items inside a flex container are displayed in the same order as the source, but this property allows you to assign an order to the items, in an descendant order.
    Items with the same order revert to the source order.
    

    ```css
    /* Default: 0 */
    .item {
        order: -1; 
    }
    /* Row direction:
     * [order: -1] [order: 0] [order: 1] ... [order: 99]
     */

    /* Column direction
     * [order: -1] 
     * [order: 0]
     * [order: 1]
     * ...
     * [order: 99] 
     */
    ```

    </details>
    
    <details><summary><strong>flex-grow:&nbsp;</strong>&lt;number&gt;</summary>
    
    This property value defines how much of the remaining space in the container main axis an item can take.

    ```css
    .item {
        /* Default: 0 */
        flex-grow: 3; 
    }
    /* 
     * │ ┌ 1 ┐ ┌ 1 ┐ ┌   3   ┐ │
     * │ └───┘ └───┘ └───────┘ │
     * └───────────────────────┘
     */
    ```

    </details>

    <details><summary><strong>flex-shrink:&nbsp;</strong>&lt;number&gt;</summary>
    
    This property value defines how much a item can shrink if the items size is bigger than the container max axis.

    ```css
    .item {
        /* Default: 0 */
        flex-shrink: 3;
    /* 
     * │ ┌     1     ┐ ┌   2   ┐ ┌ 3 ┐ ┌ 3 ┐ │
     * │ └───────────┘ └───────┘ └───┘ └───┘ │
     * └─────────────────────────────────────┘
     */
    }
    ```

    </details>

    <details><summary><strong>flex-basis:&nbsp;</strong>auto | fill | content | &lt;length&gt; | &lt;percentage&gt;</summary>
    
    This property value defines the base length of an item. If the sum content sizes is bigger than the content size, then reverts the size to the flex-shrink and flex-grow defined values.

    ```css
    .item {
        flex-basis: 200px; 
        flex-grow: 1;
        flex-shrink 1;
    }
    ```

    </details>

    <details><summary><strong>flex:&nbsp;</strong><em>flex-grow</em> | <em>flex-shrink</em> | <em>flex-basis</em></summary>
    
    This property is a shorthand for flex-grow, flex-shrink and flex-basis properties.

    ```css
    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]; 
    }
    ```

    </details>

    <details><summary><strong>align-self:&nbsp;</strong>auto | flex-start | flex-end | center | baseline | stretch</summary>
    
    This property overrides the flex container align-items value.

    ```css
    .item_A {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }

    align-self: auto;
    /* Default: uses the container defined value. *

    align-items: stretch; 
    /* Stretch the items to fill the container
    * ┌─────────────────────────┐
    * │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
    * │ │ A │ │   │ │   │ │   │ │
    * │ │   │ │   │ │   │ │   │ │
    * │ │   │ │   │ │   │ │   │ │
    * │ └───┘ └───┘ └───┘ └───┘ │
    * └─────────────────────────┘
    */
    align-items: flex-start; 
    /* The items are aligned to the beginning of the cross axis.
    * ┌─────────────────────────┐
    * │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │
    * │ │ A │ │   │ │   │ │   │ │
    * │ └───┘ │   │ │   │ │   │ │
    * │       │   │ │   │ │   │ │
    * │       └───┘ └───┘ └───┘ │
    * └─────────────────────────┘
    */
    align-items: flex-end; 
    /* The items are aligned to the end of the cross axis.
    /* The items are aligned to the beginning of the cross axis.
    * ┌─────────────────────────┐
    * │       ┌───┐ ┌───┐ ┌───┐ │
    * │       │   │ │   │ │   │ │
    * │ ┌───┐ │   │ │   │ │   │ │
    * │ │ A │ │   │ │   │ │   │ │
    * │ └───┘ └───┘ └───┘ └───┘ │
    * └─────────────────────────┘
    */
    align-items: center; 
    /* The items are aligned to the center of the cross axis.
    /* The items are aligned to the beginning of the cross axis.
    * ┌─────────────────────────┐
    * │       ┌───┐ ┌───┐ ┌───┐ │
    * │ ┌───┐ │   │ │   │ │   │ │
    * │ │ A │ │   │ │   │ │   │ │
    * │ └───┘ │   │ │   │ │   │ │
    * │       └───┘ └───┘ └───┘ │
    * └─────────────────────────┘
    */
    align-items: baseline; 
    /* The items are aligned to baseline of the text/content inside.
    /* The items are aligned to the beginning of the cross axis.
    * ┌─────────────────────────┐
    * │       ┌───┐ ┌───┐ ┌───┐ │
    * │ ┌───┐ │   │ │   │ │   │ │
    * │ │ A │ │ B │ │ C │ │ D │ │
    * │ └───┘ │   │ │   │ │   │ │
    * │       │   │ │   │ │   │ │
    * │       └───┘ └───┘ └───┘ │
    * └─────────────────────────┘
    */
    ```
    > <strong><em>Note: </em></strong>
    You can pair <strong>baseline</strong> with the keywords <em>first</em> & <em>last</em> i.e.: `align-items: last baseline;` to select either the first or last baseline of the contents  used for the alignment used for the alignment.
    
    </details>


## Javascript
I strongly recommend taking a look to these links so you can gain additional knowledge in Javascript and see some examples:
1. [The Modern JavaScript Tutorial](https://javascript.info)
2. [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Arrays
DESCRIPTION

<small>
    <em>You can consult the sources and references used for this document creation in the list below.</em>
</small>

<details>
<summary>Bibliography</summary>

+ The Modern JavaScript Tutorial 
    + [Arrays](https://javascript.info/array)
    + [Array Methods](https://javascript.info/array-methods)
+ W3Schools
    + [JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
    + [JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)
+ MDN Web Docs
    + [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    + [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

</details>

> <strong><em>Note: </em></strong>
    If needed 

+ Code Quick Reference

    Arrays.js

    <details><summary>Details</summary>

    
    </details>
    

    ```javascript
    /**
     * Description
     */
    function Test() {}
    ```    

### Strings
DESCRIPTION

<small>
    <em>You can consult the sources and references used for this document creation in the list below.</em>
</small>

<details>
<summary>Bibliography</summary>

+ The Modern JavaScript Tutorial 
    + [Strings](https://javascript.info/string)
+ W3Schools
    + [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)
    + [JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)
+ MDN Web Docs
    + [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
    + [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)

</details>

> <strong><em>Note: </em></strong>
    If needed 

+ Code Quick Reference

    Strings.js

    <details><summary>Details</summary>

    
    </details>
    

    ```javascript
    /**
     * Description
     */
    function Test() {}
    ```    

***
## Ulises Lopez 

Application Developer

[victor-ulises.lopez@atos.net](mailto:(victor-ulises.lopez@atos.net))
***
Copyright © 2022 Atos SE