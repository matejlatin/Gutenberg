# Gutenberg: A Meaningful Web Typography Starter Kit
[Gutenberg](http://matejlatin.github.io/Gutenberg/) is a flexible and simple–to–use web typography starter kit for web designers and developers. It’s a small step towards a better typography on the web. Beautiful typographic styles can be made by setting base type size, line-height (leading) and measure (max-width).

Gutenberg sets the baseline grid to establish a proper vertical rhythm and makes sure all elements fit into it. It sets up the macro typography so you can focus on the micro–typographic details.

[View an Example](http://matejlatin.github.io/Gutenberg/example2)

##Installation
Gutenberg is built with Sass and works great with tools like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/). Fork or download the repository to get started.

##Getting started
The most important files in the repository are:

**Sass files in src/style**
- ```_gutenberg-reset.scss``` *custom reset, adapted from [normalize.css](https://necolas.github.io/normalize.css/)*
- ```_gutenberg-config.scss``` *the main configuration file*
- ```_gutenberg-mixins.scss``` *home of all the mixins used in Gutenberg*
- ```_gutenberg-typography.scss``` *this is where the magic happens, don't make changes if you're not 100% sure*
- ```_gutenberg-style.scss``` *add your own styles to this file*
- ```_gutenberg-responsive.scss``` *similar to _gutenberg-typography but for desktop*

**JavaScript files in src/js**
- ```main.js``` *includes the 'fix image height' script that resizes images so they fit into grid*

*Note: resizing the images with this JavaScript is optional. Images that aren't resized break the grid but the vertical rhythm isn't affected.*

###Basic configuration
File: ```_gutenberg-config.scss```

####Edit mode
Disables or enables the toggle baseline grid button.

```sass
$edit-mode: true; // [ true / false ] - Enables/disables the grid toggle button.
```

####Themes
Choose from 2 default themes or go for the custom option.

```sass
$theme: Merriweather; // [ Merriweather / OpenSans / custom ]
$custom-font-body: null !default; // [ "Libre Baskerville", Georgia, serif ]
$custom-font-headings: null !default;
```

You need to provide a custom font stack if you go for the custom option: ```"Libre Baskerville", Georgia, serif```

####Paragraph indenting
*New since 1.1 update.* Paragraphs have no breaks between them but the first line of a paragraph following another paragraph is indented.

<img src="https://cloud.githubusercontent.com/assets/3218960/12720213/7a3180fa-c8f1-11e5-8ad4-654681d43f44.png" alt="Indented paragraphs" width="450" style="border:1px solid #ccc">

*An example of indented paragraphs.*

```sass
$paragraph-indent: false; // [ true / false ]
```

####Base sizes
Base sizes that are the basis of Gutenberg. All calculations are based on these sizes.

```sass
$base-font-size: 100 !default;
$base-font-size-desktop: 112.5 !default;
$line-height: 1.625;
$line-height-desktop: 1.7;
$max-width: 35;
```
```$base-font-size``` and ```$base-font-size-desktop``` must be set in percentages. They will be converted to pixels and REMs in later calculations.

```$line-height``` and ```$line-height-desktop``` must be set in decimal numbers.

```$max-width``` must be set in a full number that will be converted to pixels and REMs.

Calculation example for mobile sizes:

```sass
$base: 16 * ($base-font-size / 100);
$leading: round($base * $line-height);
$leading-rem: $leading / $base;
```

*Note: ```$leading``` number gets rounded because different browsers treat decimal pixels differently. You should configure Sass to round numbers to 15 decimals to get the best results with Gutenberg. If not, some sizes might seem to break the baseline grid.*

####Modular scale
A collection of sizes based on [Modular Scale](http://www.modularscale.com/) by Tim Brown. Only used as a guide for now. *A possibility to change modular sizes is planned for future releases.*

####Headings options
All heading sizes, line-heights and margins are all stored in this Sass map.

```sass
$headings: (
  h1: (2.5, 2, 4, 1),
  h2: (1.6875, 1.5, 2.5, 0.5),
  h3: (1.375, 1, 2, 0.5),
  h4: (1.2, 1, 1.5, 0.5),
  h5: (1, 1, 2.5, 0.5),
  h6: (1, 1, 2.5, 0.5)
) !default;
```

Numbers from left to right are: font-size, line-height, margin-top, margin-bottom.

####Colors
All color variables.

```sass
$color-font-body: #222222;
$color-font-headings: $color-font-body;
$color-font-light: #888;
$color-font-figcaption: $color-font-light;

$color-link-normal: $color-font-body;
$color-link-hover: $color-font-body;
$color-link-active: red;
$color-link-visited: $color-font-light;
```

####Horizontal rule
Horizontal rule comes in two styles: line and type. General settings for horizontal rule are ```$hr-margin``` (for mobile), ```$hr-mobile-desktop``` (can match $hr-margin if no difference for desktop screens required) and ```$hr-color```.

```sass
$hr-style: type; // [ line / type ]
$hr-type-content: '***'; // [ '***' ]
$hr-type-char-spacing: 0.2em; // [ 0.2em ]
$hr-margin: 2;
$hr-margin-desktop: $hr-margin;
$hr-color: $color-font-body;
$hr-width: 100; // [ 100 ] — In pixels, only for line style
$hr-height: 4; // [ 2 ] — In pixels, only for line style
```

The line style can be configured by width and height, both set in pixels. The type style variables include ```$hr-type-content``` (characters) and ```$hr-type-char-spacing``` (spacing between the characters).

<img src="https://cloud.githubusercontent.com/assets/3218960/12720212/7a2cc272-c8f1-11e5-8eb9-6769d26ab361.png" width="450" style="border:1px solid #ccc">

*An example of 'line' horizontal rule.*

<img src="https://cloud.githubusercontent.com/assets/3218960/12720209/7a119754-c8f1-11e5-8bcd-e4787cb0b026.png" alt="Type horizontal rule" width="450" style="border:1px solid #ccc">

*An example of 'type' horizontal rule.*

###Special elements and classes

####Float and align classes
Gutenberg has some classes that work very well with elements like figures, quotes and headings.

```css
.floatLeft // Floats the element to the left
.floatCenter // Centers the element by setting the left and right margins to auto
.floatRight // Floats the element to the right

.alignLeft // Aligns text to the left
.alignCenter // Centers the text
.alignRight // Aligns text to the right
```

####Attention grabber
*New since 1.1 update.* Usually used as an intro of the text. Makes the text slightly bigger than body text which results in a nice contrast.

<img src="https://cloud.githubusercontent.com/assets/3218960/12720206/7a0e6c14-c8f1-11e5-8bff-d78521ef13c4.png" alt="Attention grabber" width="450" style="border:1px solid #ccc">

*An example of an attention grabber at the beginning of the article.*

```html
<p class="attention-grabber">
	An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term.
</p>
```

####Figures
Figures can be floated with the ```.floatLeft``` or ```.floatRight``` classes. Floated figures are pushed outside of text content on desktop screens but not on mobile.

```html
<figure class="floatLeft">
	<img src="image.jpg" alt="image">
	<figcaption>Image description</figcaption>
</figure>
```

<img src="https://cloud.githubusercontent.com/assets/3218960/12720211/7a1410f6-c8f1-11e5-8e48-194ec9bd2944.png" alt="Floated figure" width="450" style="border:1px solid #ccc">

*An example of a figure with ```.floatLeft``` class applied.*

####Blockquote
Blockquotes are indented, font-size is slightly smaller than body text and in italics.

Correct semantic HTML code for blockquotes:
```html
<blockquote>
	<p>It is a press, certainly, but a press from which shall flow in inexhaustible streams… Through it, god will spread his word.</p>
	<footer>
		<cite>—Johannes Gutenberg</cite>
	</footer>
</blockquote>
```

<img src="https://cloud.githubusercontent.com/assets/3218960/12720210/7a132362-c8f1-11e5-954b-b2f6a8abee6b.png" alt="Blockquote" width="450" style="border:1px solid #ccc">

*An example of a blockquote.*

####Quotes
*New since 1.1 update.* Quotes that are also figures are bigger and can be floated with .floatLeft or floatRight classes.

HTML code for quotes:

```html
<figure>
	<blockquote>
		<p>It is a press, certainly, but a press from which shall flow in inexhaustible streams… Through it, god will spread his word.</p>
		<footer>
			<cite>—Johannes Gutenberg</cite>
		</footer>
	</blockquote>
</figure>
```

<img src="https://cloud.githubusercontent.com/assets/3218960/12720207/7a0edc44-c8f1-11e5-88fd-f1d72c541832.png" alt="Figure quote" width="450" style="border:1px solid #ccc">

*An example of a quote wrapped in ```<figure>``` tags.*

<img src="https://cloud.githubusercontent.com/assets/3218960/12720208/7a0f0688-c8f1-11e5-99a7-14e54b64c847.png" alt="Floated figure" width="450" style="border:1px solid #ccc">

*An example of a quote wrapped in ```<figure>``` tags and with ```.floatLeft``` class applied.*

##Why Gutenberg?
Johannes Gutenberg invented a printing press with movable type more than 500 years ago. His invention led to improved readability of books and enabled a distribution on a large scale. His invention improved a medium and took it to another level. This web typography starter kit aims to do exactly the same for another medium — the web.

##Contribute
Gutenberg is an open source project licensed under [Creative Commons 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Feel free to use, adapt or contribute.

##Coming Soon
New elements like tables and side comments will be added soon. Looking for people to translate this project to Less and Stylus. [Get in touch](http://matejlatin.co.uk).

##History
Follow [@gutenbergtype](http://twitter.com/gutenbergtype) for updates.

###Gutenberg v1.1

*Jan 20, 2016*

- Code optimized and simplified by use of mixins,
- horizontal rule styling now more flexible with its own configuration,
- Attention Grabber — a new element,
- quotes — an alternative to blockquotes; can be floated,
- added an option for paragraph indenting.

###Gutenberg v1.0

*Jan 20, 2016*

- Includes the basic elements: headings, paragraph, figure, blockquote & cite, horizontal rule, code, sub, sup, ul, ol, small,
- Gutenberg reset — based on Normalize,
- headings, body and links colors,
- two default themes & custom theme options,
- mobile first with a breakpoint for desktop screens,
- sizes based on Perfect Fifth modular scale,
- fixImgHeight.js — a small & lightweight script that resizes images so they fit the baseline grid.