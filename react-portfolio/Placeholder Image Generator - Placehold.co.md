## Root: 
###### Tag: 
###### Created on: [[May 31, Saturday, 2025]]
###### Last Modified: [[May 31, Saturday, 2025]]
---
# Using Placehold.co for Placeholder Images

**Source Documentation:** [https://placehold.co/](https://placehold.co/) (Refer to the original site for the most up-to-date features if needed)

`placehold.co` is a free and simple service for generating placeholder images on the fly. These are useful for mockups, development, and temporarily filling image spots in documentation (like READMEs) before final assets are ready.

## Core Concept

The basic URL structure involves appending parameters to `https://placehold.co/`.

---

## 1. Image Size

You can specify the image dimensions (width and height).

*   **Format:** `width`x`height`
    *   Example: `https://placehold.co/600x400` (600px wide, 400px high)

*   **Square Images:** If only one dimension is specified, a square image is created.
    *   Example: `https://placehold.co/400` (400px wide, 400px high)

*   **Constraints:**
    *   Maximum size: 4000 x 4000 px
    *   Minimum size: 10 x 10 px

---

## 2. Image Format

You can specify the output image format.

*   **Syntax Options:**
    1.  Append format as a path segment: `/{format}`
        *   Example: `https://placehold.co/600x400/png`
    2.  Append format as a file extension: `.{format}`
        *   Example: `https://placehold.co/600x400.png`

*   **Supported Formats:**
    *   `svg` (Default if no format is specified)
    *   `png`
    *   `jpeg` (or `jpg`)
    *   `gif`
    *   `webp`
    *   `avif`

*   **Combining with Colors:** Format can be specified after color codes.
    *   Example: `https://placehold.co/600x400/000000/FFFFFF/png`
    *   Example: `https://placehold.co/600x400/000000/FFFFFF.png`

---

## 3. Colors (Background & Text)

Customize the background and text colors using hexadecimal (hex) codes or CSS color names.

*   **Syntax:** `/{background_color}/{text_color}`
    *   Both background and text colors must be specified together if you are overriding the defaults.

*   **Hex Codes:**
    *   6-digit hex: `RRGGBB` (e.g., `000000` for black, `FFFFFF` for white)
        *   Example: `https://placehold.co/600x400/000000/FFFFFF` (Black background, White text)
    *   3-digit hex shorthand: `RGB` (e.g., `FFF` for white, `000` for black)
        *   Example: `https://placehold.co/600x400/CCC/333` (Light gray background, Dark gray text)

*   **CSS Color Names:**
    *   Use standard CSS color names (e.g., `orange`, `blue`, `lightcoral`).
        *   Example: `https://placehold.co/600x400/orange/white`

*   **Transparent Background:**
    *   Use the `transparent` keyword for the background color.
        *   Example: `https://placehold.co/600x400/transparent/FF0000` (Transparent background, Red text - best with PNGs)

---

## 4. Custom Text

You can display custom text on the placeholder image. The default text is the image dimensions (e.g., "600x400").

*   **Syntax:** Use a query string `?text={your_text}`
    *   Spaces in text should be replaced with `+`.
        *   Example: `https://placehold.co/600x400?text=Hello+World`
    *   Newlines can be inserted using `\n`.
        *   Example: `https://placehold.co/600x400?text=First+Line\nSecond+Line`

---

## 5. Custom Font

Change the font used for the displayed text.

*   **Syntax:** Use a query string `?font={font_name}` or `&font={font_name}` if combined with `?text=`.

*   **Available Fonts:**
    *   `Lato` (Default if no font is specified)
    *   `Lora`
    *   `Montserrat`
    *   `Noto Sans`
    *   `Open Sans`
    *   `Oswald`
    *   `Playfair Display`
    *   `Poppins`
    *   `PT Sans`
    *   `Raleway`
    *   `Roboto`
    *   `Source Sans Pro`

*   **Examples:**
    *   Font only (default text will be dimensions): `https://placehold.co/600x400?font=roboto`
    *   Combined with custom text: `https://placehold.co/800x200?text=Hello+World&font=montserrat`

---

## 6. Retina Images

Generate higher-resolution images for retina displays.

*   **Syntax:** Append `@2x` or `@3x` to the size specification (before the format extension if used).
    *   Example (`@2x`): `https://placehold.co/600x400@2x.png`
    *   Example (`@3x`): `https://placehold.co/300x200@3x.webp`

*   **Supported Formats for Retina:**
    *   `png`
    *   `jpeg` (or `jpg`)
    *   `gif`
    *   `webp`
    *   `avif`
    *   (SVG does not need retina modifiers as it's vector-based)

---

## 7. Combining Features (Comprehensive Examples)

You can combine most of these features to create highly specific placeholders. The general order of path segments is `size` -> `colors` -> `format`. Query parameters (`?text=`, `&font=`) come at the end.

*   **Example 1 (Size, Colors, Format, Text):**
    A 500x250 PNG image with a dark blue background (`003366`), light gold text (`FFD700`), and custom text "Project Alpha Placeholder".
    `https://placehold.co/500x250/003366/FFD700.png?text=Project+Alpha+Placeholder`

*   **Example 2 (Size, Colors, Format, Text, Font):**
    A 700x300 WebP image with a CSS 'seagreen' background, 'white' text, custom text "Module Complete!\nNext Steps", using the 'Oswald' font.
    `https://placehold.co/700x300/seagreen/white.webp?text=Module+Complete!\nNext+Steps&font=oswald`

*   **Example 3 (Square, Text, Font, Retina PNG):**
    A 400x400 @2x PNG, default colors, custom text "User Profile", using 'Roboto' font.
    `https://placehold.co/400@2x.png?text=User+Profile&font=roboto`

---

## Quick Reference Table

| Feature         | Syntax Example                                       | Notes                                                |
|-----------------|------------------------------------------------------|------------------------------------------------------|
| **Base URL**    | `https://placehold.co/`                              |                                                      |
| **Size**        | `widthxheight` or `size` (for square)                | e.g., `/600x400`, `/300`                             |
| **Format**      | `/format` or `.format`                               | e.g., `/png`, `.jpeg`. Default: `svg`                |
| **Colors**      | `/background/text`                                   | e.g., `/FF0000/FFFFFF`, `/blue/yellow`, `/transparent/000` |
| **Text**        | `?text=Your+Text`                                    | `+` for space, `\n` for newline.                     |
| **Font**        | `&font=fontname` (if text used) or `?font=fontname` | e.g., `&font=roboto`. Default: `Lato`                |
| **Retina**      | `size@2x.format` or `size@3x.format`                 | e.g., `/300x150@2x.png`. Not for SVG.                 |

---

This note should give you a solid reference for using `placehold.co` whenever you need it!

---
# Using Placehold.co for Placeholder Images (with Visual Examples)

**Source Documentation:** [https://placehold.co/](https://placehold.co/) (Refer to the original site for the most up-to-date features if needed)

`placehold.co` is a free and simple service for generating placeholder images on the fly. These are useful for mockups, development, and temporarily filling image spots in documentation (like READMEs) before final assets are ready.

## Core Concept

The basic URL structure involves appending parameters to `https://placehold.co/`.

---

## 1. Image Size

You can specify the image dimensions (width and height).

### Example: Rectangular Image (300x200)
**URL:**
[https://placehold.co/300x200](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x200)

**Result:**
![Placeholder 300x200](https://placehold.co/300x200)

### Example: Square Image (250x250)
**URL:**
[https://placehold.co/250](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F250)
**Result:**
![Placeholder 250x250 Square](https://placehold.co/250)

*   **Constraints:**
    *   Maximum size: 4000 x 4000 px
    *   Minimum size: 10 x 10 px

---

## 2. Image Format

You can specify the output image format. Default is SVG.

### Example: PNG Format (300x150)
**URL (path segment):**
[https://placehold.co/300x150/png](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150%2Fpng)

**Result:**
![Placeholder 300x150 PNG](https://placehold.co/300x150/png)

**URL (file extension):**
[https://placehold.co/300x150.png](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150.png)

**Result:**
![Placeholder 300x150 .png extension](https://placehold.co/300x150.png)

### Example: Default SVG Format (300x150)
**URL:**
[https://placehold.co/300x150](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150)
**Result:**
![Placeholder 300x150 SVG](https://placehold.co/300x150)

*   **Supported Formats:** `svg` (Default), `png`, `jpeg` (or `jpg`), `gif`, `webp`, `avif`.

---

## 3. Colors (Background & Text)

Customize the background and text colors.

### Example: Hex Colors (300x150, Red Background, White Text)
**URL:**
[https://placehold.co/300x150/FF0000/FFFFFF](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150%2FFF0000%2FFFFFFF)

**Result:**
![Placeholder Red BG White Text](https://placehold.co/300x150/FF0000/FFFFFF)

### Example: CSS Color Names (300x150, Blue Background, Yellow Text)
**URL:**
[https://placehold.co/300x150/blue/yellow](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150%2Fblue%2Fyellow)
**Result:**
![Placeholder Blue BG Yellow Text](https://placehold.co/300x150/blue/yellow)

### Example: Transparent Background (PNG, 300x150, Green Text)
*(Note: Transparency is best seen on a non-white page background; PNG format is recommended.)*
**URL:**

[https://placehold.co/300x150/transparent/009933/png](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F300x150%2Ftransparent%2F009933%2Fpng)
**Result:**
![Placeholder Transparent BG Green Text](https://placehold.co/300x150/transparent/009933/png)

---
## 4. Custom Text

Display custom text on the placeholder. Default text is image dimensions.

### Example: Simple Custom Text (400x100)
**URL:**

[https://placehold.co/400x100?text=Hello+World](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F400x100%3Ftext%3DHello%2BWorld)
**Result:**
![Placeholder Hello World](https://placehold.co/400x100?text=Hello+World)

### Example: Text with Newlines (400x150)
**URL:**
[https://placehold.co/400x150?text=First+Line\nSecond+Line](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F400x150%3Ftext%3DFirst%2BLine%5CnSecond%2BLine)

**Result:**
![Placeholder Two Lines of Text](https://placehold.co/400x150?text=First+Line\nSecond+Line)

---

## 5. Custom Font

Change the font used for the displayed text.

### Example: Custom Font with Default Text (400x100, Oswald Font)
**URL:**
[https://placehold.co/400x100?font=oswald](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F400x100%3Ffont%3Doswald)
**Result:**
![Placeholder Oswald Font Default Text](https://placehold.co/400x100?font=oswald)

### Example: Custom Font with Custom Text (400x100, Montserrat Font)
**URL:**
[https://placehold.co/400x100?text=Custom+Font+Example&font=montserrat](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F400x100%3Ftext%3DCustom%2BFont%2BExample%26font%3Dmontserrat)

**Result:**
![Placeholder Montserrat Font Custom Text](https://placehold.co/400x100?text=Custom+Font+Example&font=montserrat)

*   **Available Fonts:** `Lato` (Default), `Lora`, `Montserrat`, `Noto Sans`, `Open Sans`, `Oswald`, `Playfair Display`, `Poppins`, `PT Sans`, `Raleway`, `Roboto`, `Source Sans Pro`.

---

## 6. Retina Images

Generate higher-resolution images for retina displays. (Note: The embedded image below will display at its specified dimensions, but the source file will be higher resolution if `@2x` or `@3x` is used).

### Example: @2x Retina PNG (200x100 base size)
**URL:**
[https://placehold.co/200x100@2x.png?text=Retina+@2x](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F200x100%402x.png%3Ftext%3DRetina%2B%402x)

**Result:**
![Placeholder Retina @2x](https://placehold.co/200x100@2x.png?text=Retina+@2x)

*   **Supported Formats for Retina:** `png`, `jpeg`, `gif`, `webp`, `avif`. (SVG is vector-based and doesn't need retina modifiers).

---

## 7. Combining Features (Comprehensive Examples)

### Example 1: Size, Colors, Format, Text
(500x200 PNG, dark blue background, light gold text, "Project Alpha Placeholder")
**URL:**
[https://placehold.co/500x200/003366/FFD700.png?text=Project+Alpha+Placeholder](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F500x200%2F003366%2FFFD700.png%3Ftext%3DProject%2BAlpha%2BPlaceholder)
**Result:**
![Comprehensive Example 1](https://placehold.co/500x200/003366/FFD700.png?text=Project+Alpha+Placeholder)

### Example 2: Size, Colors (CSS), Format, Text (newline), Font
(450x150 WebP, 'seagreen' background, 'white' text, "Module Complete!\nNext Steps", 'Oswald' font)
**URL:**

[https://placehold.co/450x150/seagreen/white.webp?text=Module+Complete!\nNext+Steps&font=oswald](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F450x150%2Fseagreen%2Fwhite.webp%3Ftext%3DModule%2BComplete!%5CnNext%2BSteps%26font%3Doswald)

**Result:**
![Comprehensive Example 2](https://placehold.co/450x150/seagreen/white.webp?text=Module+Complete!\nNext+Steps&font=oswald)

### Example 3: Square, Text, Font, Retina PNG
(200x200 @2x PNG, default colors, "User Profile", 'Roboto' font)
**URL:**
[https://placehold.co/200@2x.png?text=User+Profile&font=roboto](https://www.google.com/url?sa=E&q=https%3A%2F%2Fplacehold.co%2F200%402x.png%3Ftext%3DUser%2BProfile%26font%3Droboto)
**Result:**
![Comprehensive Example 3](https://placehold.co/200@2x.png?text=User+Profile&font=roboto)

---

## Quick Reference Table

| Feature         | Syntax Example                                       | Notes                                                |
|-----------------|------------------------------------------------------|------------------------------------------------------|
| **Base URL**    | `https://placehold.co/`                              |                                                      |
| **Size**        | `widthxheight` or `size` (for square)                | e.g., `/600x400`, `/300`                             |
| **Format**      | `/format` or `.format`                               | e.g., `/png`, `.jpeg`. Default: `svg`                |
| **Colors**      | `/background/text`                                   | e.g., `/FF0000/FFFFFF`, `/blue/yellow`, `/transparent/000` |
| **Text**        | `?text=Your+Text`                                    | `+` for space, `\n` for newline.                     |
| **Font**        | `&font=fontname` (if text used) or `?font=fontname` | e.g., `&font=roboto`. Default: `Lato`                |
| **Retina**      | `size@2x.format` or `size@3x.format`                 | e.g., `/300x150@2x.png`. Not for SVG.                 |

---
