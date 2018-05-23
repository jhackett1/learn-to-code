DDaT Codelabs
=============

A static site for hosting lessons and modules in the DDaT Codelabs curriculum.

This site consumes markdown documents and converts them into HTML using React component syntax and the Gatsby static site generator. Changes here automatically affect the live site.

This site understands three kinds of content:
* **Lessons**, which hold course content and plenary quizzes.
* **Modules**, which have a one-to-many relationship with lessons.
* **Pages**, which store background info about the course

Currently [live on the web here](https://friendly-shaw-4ff926.netlify.com/).

**We value contributions from everyone. Pull requests and issues are welcome.**

Before contributing
------------------

We try to abide by the [guidance published](https://www.gov.uk/guidance/content-design) by the GOV.UK content design community.

That means we value things like:
* User needs first
* Plain English
* Frequent, gradual improvements

Adding and changing lessons
--------------------------

Lessons are stored as markdown files in the `/lessons` folder.

You can edit these via the Github web interface or in your local text editor.

A non-standard element to be aware of: `<div class="todo"></div>` renders a turquiose box used to present tasks the user needs to accomplish before moving on.

If you want to add images, upload them to the `/lessons` folder, and after building they will be available at the site's root. For instance, an image called `example.jpg` would be found at the URL `/example.jpg`.

Each lesson has **frontmatter** used to track:
* The **title** of the lesson
* The **title** of the module it belongs to
* The **order** of the lesson in the module
* The **type** of lesson, from 'learn' or 'project'
* The (optional) **plenary question** for the quiz at the end of the lesson
* The (optional) **plenary answers**, stored as an array of objects, each containing the answer text and whether it is correct

Frontmatter must be correctly filled out or the site won't rebuild.

Adding and changing modules and pages
------------------------------------

Modules and pages are also markdown files stored in the `/modules` and `/pages` directories, respectively.

Images can be uploaded to the respective folder and included in the same way as lessons.

Modules have frontmatter used to track:

* The module **title**
* It's **order** in the course
* When it should be available **from**, in YYYY, MM format
* When it should be available **to**, in YYYY, MM format

Modules are visible but their lessons are inaccessible when the date is outside the given range.

Pages also have an order property to track their position on the header menu.
