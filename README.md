# Internship

This repository contains the projects and assignments completed during the internship program. The structure and purpose of each folder are detailed below.

## Folder Structure

### 00.html-css
Contains examples and assignments related to HTML and CSS, focusing on the following:
- Variables, Tables, Classes
- Webpage layout
- Forms, Graphics, Media, HTML API's
- CSS Basics, Styling, Layout And Positioning
- CSS Advanced Techniques, flexbox And Grid, Responsive Web Design(RWD)

### 01.assignment-1
Contains the first assignment of the internship. This folder includes:
- A webpage created of our-story-in-numbers part of the website using html, css and javascript.

### 02.javascript
Includes examples and exercises demonstrating JavaScript concepts, such as:
- JavaScript basics
- JavaScript Objects, Functions, Classes, Async
- HTML DOM, Browser BOM, Web API's
- Jquery
- Web worker

### 03.typescript
Contains TypeScript examples and projects, focusing on:
- TypeScript basic
- TypeScript advanced types
- TypeScript Object-Oriented Programming
- TypeScript Utility Types

### 04.angular
Includes topic wise examples of Angular:
- ngModules, Standalone components
- Directives, Forms
- Interpolation, Property Binding, Two-way Binding
- Pipes, Signals, Services

### 05.node-express
Includes examples of basic node and express concepts
- Basic API routes
- File, Crypto module
- OS, URL, Path module
- Eventloop and streams

# How to Use
## For HTML/JavaScript files:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hpreksha/training.git
2. Open the project folder in Visual Studio Code (VS Code): After cloning, navigate to the project folder and open it in VS Code.
3. Install the Live Server extension in VS Code:
- Open the Extensions tab in VS Code (or press Ctrl+Shift+X).
- Search for Live Server in the search bar.
- Click Install to install the Live Server extension.
4. Run the HTML/JavaScript file using Live Server:
- Open the HTML file you want to view.
- Right-click on the HTML file and select Open with Live Server. Or, click the Go Live button at the bottom-right corner of VS Code.
- This will open the HTML file in your default web browser, and it will automatically refresh when you make changes to the HTML or JavaScript files.

## For TypeScript files:
1. Navigate to the TypeScript file folder: Use thecreate terminal or command prompt to move to the folder containing the TypeScript files.
   ```bash
   cd path/to/your/03.typescript
2. Compile the TypeScript file: Use the TypeScript Compiler (tsc) to compile the .ts file into JavaScript. This will create a .js file in the dist folder.
   ```bash
   tsc filename.ts
   ```
   To compile all the TypeScript files together:
   ```bash
   tsc
3. Run the compiled JavaScript file: Once the TypeScript file is compiled, use Node.js to run the generated JavaScript file from the dist folder.
   ```bash
   node dist/filename.js
4. View the output: The output will appear in the console, and you will find the generated .js file inside the dist folder.

## For Angular files:
1. Navigate to the Angular file folder: Use the terminal or command prompt to move to the folder containing the TypeScript files.
   ```bash
   cd path/to/your/04.angular
2. Navigate to specific folder
   ```bash
   cd ang-eg-module
   ````
   ```bash
   cd ang-eg
   ```
   ```bash
   cd ang-topics
   ```
3. To install required dependencies
   ```bash
   npm install
   ```
4. To run
   ```bash
   ng serve -o

