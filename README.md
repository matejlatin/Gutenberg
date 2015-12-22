# Gutenberg:
## A Meaningful Web Typography Starter Kit
Gutenberg is a work–in–progress project by [Matej Latin](http://matejlatin.co.uk) that brings meaning and craftsmanship to web typography.

[View Example](http://matejlatin.github.io/Gutenberg/example)

###Made with Sass
Typography is a living thing. It’s flexible. And this is exactly how Gutenberg is made. It sets the macrotypography so you can focus on the microtypographic details. Flexibility is the most important feature of Gutenberg and Sass makes this possible. Creating a unique and beautiful typographic style is a matter of changing variables.

###Base type & line-height
All calculations in Gutenberg depend on base type size and line-height. Multiplication of these two results in leading which is essential for setting a correct vertical rhythm and a baseline grid.

```sass
$base-type: 100;
$line-height: 1.6;
$leading: $base-type * $line-height;
```

###Vertical rhythm and baseline grid
By calculating the leading Gutenberg sets a vertical rhythm by resetting line-height and margins for all elements.

```sass
* {
  line-height: $leading;
  margin-bottom: $leading;
}
```

Correct vertical rhythm results in consistent spacing between elements that helps clarifying the structure and order of the content and link it with other elements. Its’ ultimate goal is to _invite the reader into the text_ and _improve the readability_.

###Correct but flexible
To make Gutenberg more flexible but still correct, _half of leading sizes_ can be used. For example: heading 2 has a default margin-top of 2.5 leading and a line-height of 1.5 leading.

```sass
h2 {
  margin-top: #{2.5 * $leading + 'rem'};
  line-height: #{1.5 * $leading + 'rem'};
}
```

###Modular scale
Typographers have been using scales for centuries. Gutenberg is based on Tim Brown’s [Modular Scale](http://modularscale.com) to bring meaning and harmony to the typographic style.

###Mobile first
Gutenberg sets base type size, line-height and calculates the leading for the mobile screens first. The break point is calculated based on maximum (ideal) width of elements. When a screen is wider than that, it resets and recalculates all the sizes so they better fit for desktop screens.

```sass
// Base sizes
$base-font-size: 100 !default;
$base-font-size-desktop: 112.5 !default;
$line-height: 1.625;
$line-height-desktop: 1.8;
$max-width: 35;
```

###Themes & customization
Gutenberg comes with two beautiful predefined themes based on two high quality but free fonts provided by Google Fonts: Merriweather and Open Sans.

Feeling creative? Load your own fonts and create a unique typographic style in minutes.

```sass
$theme: custom; // [ Merriweather / OpenSans / custom ]
$custom-font-body: Merriweather, serif;
$custom-font-headings: "Open Sans", sans-serif;
```

###Fix image height
Images and figures are resized so they don’t break the baseline grid. This small and lightweight JavaScript function takes the original height of a figure and calculates a new height which is a multiplication of leading.

![Images grid](grid-image.png)

##Why Gutenberg?
More than 500 years ago, Johannes Gutenberg invented a printing press with movable type which lead to improved readability of books and enabled a distribution on a large scale. His invention improved a medium and took it to another level. This web typography starter kit aims to do exactly the same for another medium—the web.

##To Do
- check browser compatibility

##Contribute
Gutenberg is an open source project licensed under [Creative Commons 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Feel free to use, adapt or contribute.