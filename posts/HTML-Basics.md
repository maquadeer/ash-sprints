---
title: Basics of HTML
subtitle: TLDR This article summarizes HTML
date: "2023-12-17"
---
## 

<details id="accordion-collapse">
  <summary>Table of Contents</summary>
  

- [](#)
- [Introduction](#introduction)
- [Common HTML Tags](#common-html-tags)
  - [\<html\>](#html)
  - [\<head\>](#head)
  - [\<title\>](#title)
  - [\<body\>](#body)
  - [Text Formatting](#text-formatting)
    - [\<h1\> to \<h6\>](#h1-to-h6)
    - [\<p\>](#p)
    - [\<strong\>](#strong)
    - [\<em\>](#em)
  - [Links](#links)
    - [\<a\>](#a)
  - [Lists](#lists)
    - [Ordered List: \<ol\> and \<li\>](#ordered-list-ol-and-li)
    - [Unordered List: \<ul\> and \<li\>](#unordered-list-ul-and-li)
  - [Images](#images)
    - [\<img\>](#img)
  - [Forms](#forms)
    - [\<form\>](#form)
    - [Input Elements: \<input\>](#input-elements-input)
    - [\<textarea\>](#textarea)
  - [Tables](#tables)
    - [\<table\>](#table)
    - [\<tr\>](#tr)
    - [\<th\> and \<td\>](#th-and-td)
</details>
## Introduction

HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It structures the content on the web and defines the elements and their attributes.

## Common HTML Tags

### \<html>

The `<html>` tag is the root element of an HTML page.

```html
<html>
  <!-- Content goes here -->
</html>
```

### \<head>

The `<head>` element contains meta-information about the HTML document.

```html
<head>
  <!-- Meta tags, styles, scripts, etc. -->
</head>
```

### \<title>

The `<title>` element sets the title of the HTML document.

```html
<title>Page Title</title>
```

### \<body>

The `<body>` tag contains the content of the HTML document.

```html
<body>
  <!-- Content visible on the web page -->
</body>
```

### Text Formatting

#### \<h1> to \<h6>

Headings from `<h1>` to `<h6>` define the hierarchy of headers.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<!-- ... -->
<h6>Heading 6</h6>
```

#### \<p>

The `<p>` tag defines a paragraph.

```html
<p>This is a paragraph.</p>
```

#### \<strong>

The `<strong>` tag is used for strong importance or emphasis.

```html
<strong>Important Text</strong>
```

#### \<em>

The `<em>` tag emphasizes text.

```html
<em>Emphasized Text</em>
```
<hr>
### Links

#### \<a>

The `<a>` tag creates hyperlinks.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Lists

#### Ordered List: \<ol> and \<li>

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

#### Unordered List: \<ul> and \<li>

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```
<hr>

### Images

#### \<img>

The `<img>` tag embeds images.

```html
<img src="image.jpg" alt="Description">
```

### Forms

#### \<form>

The `<form>` tag defines an HTML form.

```html
<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>
```

#### Input Elements: \<input>

```html
<input type="text" name="username" placeholder="Username">
<input type="password" name="password" placeholder="Password">
```

#### \<textarea>

The `<textarea>` tag defines a multi-line text input control.

```html
<textarea rows="4" cols="50">Enter text here...</textarea>
```
<hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

### Tables

#### \<table>

The `<table>` tag creates an HTML table.

```html
<table>
  <!-- Table rows and columns go here -->
</table>
```

#### \<tr>

The `<tr>` tag defines a table row.

```html
<tr>
  <!-- Table data (cells) go here -->
</tr>
```

#### \<th> and \<td>

```html
<th>Header Cell</th>
<td>Data Cell</td>
```

