DDaT Codelabs
=============

A static site for hosting lessons and modules in the DDaT Codelabs curriculum.

This site consumes markdown documents and converts them into HTML using React component syntax and the Gatsby static site generator.

This site understands three kinds of content:

* **Lessons**, which hold course content and plenary quizzes.
* **Modules**, which have a one-to-many relationship with lessons.
* **Pages**, which store background info about the course

Advanced features like the interactive plenary quizzes are enabled by front matter at the start of the relevant markdown document.
