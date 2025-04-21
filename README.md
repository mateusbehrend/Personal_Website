# Mateus Behrend — Personal Website

## Description

A fully responsive, multi‐section personal portfolio site showcasing my background, skills, projects, and a feedback form.  
Built with modern HTML5, CSS3 (including CSS Variables, Grid, Flexbox, and dark/light mode), and vanilla JavaScript for interactive theme toggling and form feedback.

## Features

- **Responsive Design**

  - Fluid typography with `clamp()`
  - CSS Grid with ≥3 columns & ≥2 rows, one item spanning multiple cells
  - Flexbox for equal‑height cards and centered layouts
  - Breakpoints at 860px, 520px, 380px, 480px to adapt layouts for mobile, tablet, desktop

- **Dark & Light Mode**

  - Pure CSS implementation via `prefers-color-scheme` and `data-theme`

- **Advanced Typography & Styling**

  - Gradient text headings with `background-clip: text`
  - Depth via `box-shadow` & `text-shadow`
  - Inline SVG icons for decorative headers
  - Custom list markers via `::marker`

- **Interactive JavaScript**

  - Hamburger menu toggle (ARIA‐accessible)
  - Theme toggle persisted in `localStorage`
  - Live feedback form slider display

- **Semantic HTML5 & Accessibility**
  - Proper use of `<header>`, `<main>`, `<section>`, `<footer>`
  - `<fieldset>` & `<legend>` for forms
  - Alt text on all images
  - ARIA labels on interactive controls

## Live

Live version: [https://mateusbehrend.vercel.app](https://mateusbehrend.vercel.app)
