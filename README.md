
# Archfolio

## Overview

Archfolio is my personal portfolio presented as a desktop-style environment. Instead of a traditional scrolling website, this project uses an operating-system-inspired interface to showcase my work, experience, and background. You can explore the entire portfolio either through a graphical interface or through a built-in terminal, depending on your preferred way of navigating.

The goal of Archfolio is to demonstrate my skills through the portfolio itself. The interface, animations, file handling, window logic, and overall user experience are part of the work I want to showcase.

---

## Purpose

Archfolio serves as an interactive platform to display my projects, skills, and information in a structured environment. It reflects my interest in development, interface design, and system-style architecture. Every feature, from the draggable windows to the directory structure, is built to show how I approach technical problem-solving and UI development.

---

## Features

### Dual Navigation

* Full GUI navigation with icons, folders, windows, and drag-and-drop interactions.
* A functional terminal interface for users who prefer command-line navigation.

### Desktop-Style Environment

* Draggable windows and folders, replicating a lightweight desktop system inside the browser.
* A dock system to open different applications within the portfolio.
* A files manager where visitors can open folders, preview images, read text files, and navigate directories.

### Representation of My Work

* Projects are organized as directories, each containing relevant information, descriptions, and links.
* About, Contact, Work, and other sections are presented as system folders or apps, maintaining a consistent theme.
* Every window type (text viewer, image viewer, files manager, terminal) is built from scratch to highlight different parts of my skill set.

---

## Technologies Used

* React
* Tailwind CSS
* GSAP (animations and movement logic)
* Global state management for windows and locations
* Modular component structure for scalability and clarity

---

## Structure

Archfolio is organized around a virtual file system. Every section of my portfolio is represented as a location containing items such as folders, text files, images, or external links.

Windows are generated dynamically based on the type of item selected. This allows the interface to behave like a simple operating system, where different file types open in the correct viewer.

---

## Installation

Clone the repository:

```
git clone https://github.com/phantekzy/archfolio
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## What This Project Shows About My Work

Archfolio demonstrates:

* Interface design
* State management
* Custom animation handling
* Component-based architecture
* Handling of file-type logic
* Interactive UI development
* Clean and maintainable code structure
* Problem-solving through building a full system rather than a static site

Instead of showing my skills only through project cards, Archfolio itself is the project. Every detail is designed to show how I think, build, and structure interactive applications.

---

## Deployment

Archfolio can be deployed on any static hosting service such as Netlify, Vercel, or GitHub Pages.

---

## Contact

All contact information is accessible within the portfolio in the Contact window.



