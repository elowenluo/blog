+++
title = "Markdown Styling Guide"
description = "This document showcases how different Markdown elements are styled for your website. The design maintains your minimal aesthetic while ensuring readability and proper hierarchy."
date = 2025-03-01T09:07:04Z
updated = 2025-03-05T09:07:04Z
draft = false
weight = 10

# slug = "slug-here"

# path = "path-here"

aliases = [""]
authors = ["Claud 3.7 Sonnet"]
in_search_index = false
render = true

[taxonomies]
categories = ["Rust", "Technology"]
tags = ["web development", "programming", "zola"]
[extra]

toc = true

# featured_image = "images/featured.jpg"

show_comments = false
reading_time = true
+++

Some summary...

<!-- more -->

This document showcases how different Markdown elements are styled for your website. The design maintains your minimal aesthetic while ensuring readability and proper hierarchy.

## Text Formatting

Regular paragraph text uses Georgia with a line-height of 1.5 and a line length optimized for readability (65-75 characters per line).

You can emphasize text with _italics_ or **bold formatting**. You can also indicate ~~deleted text~~ with strikethrough.

For technical terms or commands, use `inline code formatting` which is distinguished with a subtle background.

## Headings

Headings use Helvetica Neue and follow a clear hierarchical structure:

# Heading Level 1

The main title of a document, used sparingly. It's centered to create a strong focal point.

## Heading Level 2

Major section headings that divide your content into logical parts. They have a subtle underline and accent color.

### Heading Level 3

Sub-sections within your major sections.

#### Heading Level 4

Further divisions when needed.

##### Heading Level 5

Specialized headings, less commonly used.

###### Heading Level 6

The smallest heading level, for very fine-grained organization.

## Links

Links are styled in your accent color: [here is a link](http://example.com). They have a subtle underline on hover to indicate they're interactive.

## Lists

### Unordered Lists

- First item in an unordered list
- Second item with some longer text to demonstrate how wrapping works with list items and how the bullets align
- Third item
- A nested list item
- Another nested item
- Fourth item at the top level

### Ordered Lists

1. First item in an ordered list
2. Second item with some longer text to demonstrate how wrapping works with numbered list items and how the numbers align
3. Third item
4. A nested numbered item
5. Another nested numbered item
6. Fourth item at the top level

### Task List

- [x] Drink a cup of water
- [ ] Use Zola to build my static blog

## Blockquotes

> This is a blockquote, used for quoting external sources or highlighting important passages. It has a subtle background and a left border in your accent color.
>
> Blockquotes can contain multiple paragraphs when needed.

> A meaningful quote from a significant person can add weight to your arguments.
>
> — Attribution for the quote

## Code Blocks

Code blocks have a light background, a left border in your accent color, and a copy button in the top-right corner:

```javascript
// A sample code block
function greet(name) {
  return `Hello, ${name}!`;
}

// Call the function
console.log(greet("Elowen"));
```

## Horizontal Rules

Horizontal rules create a visual break between sections:

---

They're useful for separating content when a new heading isn't necessary.

## Tables

Tables are styled with clean lines and alternating row colors for readability:

| Header 1      | Header 2      | Header 3      |
| ------------- | ------------- | ------------- |
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |
| Row 2, Cell 1 | Row 2, Cell 2 | Row 2, Cell 3 |
| Row 3, Cell 1 | Row 3, Cell 2 | Row 3, Cell 3 |

## Images

Images are styled to fit within the content area while maintaining their aspect ratio:

![An example image](https://plchldr.co/i/480x360?bg=EB6361)
_An example image with a caption_

For larger images:

![A large image](https://plchldr.co/i/1280x720?bg=3D8EB9)
_A landscape image with a wider aspect ratio_

## Footnotes

Footnotes are useful for additional context without interrupting the main text flow.[^1] They can be used for citations, clarifications, or tangential points.[^2]

[^1]: This is the first footnote. Footnotes appear at the bottom of the document with their corresponding reference numbers.
[^2]: This is the second footnote. It can contain multiple paragraphs or other elements if needed.

Like this additional paragraph.

The `doublespace` class adds extra vertical space when needed.

## Putting It All Together

This styling guide ensures that your Markdown content is presented consistently and beautifully across your website while maintaining your minimal, reader-focused aesthetic.
