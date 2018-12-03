Learn to code
=============

A static site for hosting lessons and modules in the DDaT Codelabs curriculum.

This site consumes markdown documents and converts them into HTML using React component syntax and the [Gatsby](https://www.gatsbyjs.org/) static site generator. Changes here automatically affect the live site.

This site understands three kinds of content:
* **Lessons**, which hold course content and plenary quizzes.
* **Modules**, which have a one-to-many relationship with lessons.
* **Pages**, which store background info about the course

**Currently [live on the web here](https://ddatlearntocode.netlify.com/).**

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
* Whether the lessons inside should be **visible** for users

Pages also have an order property that determines their position on the header menu.

Developing locally
------------------

You can make minor tweaks to this right here on the web, but for major work, you should download and run the software locally. This will give you real-time feedback and a nicer developer experience.

You need `git`, `node` and `npm` installed first.

1. Install the Gatsby CLI commands with `npm install --global gatsby-cli`
2. Download this repo with `git clone https://github.com/jhackett1/learn-to-code`.
3. Install the dependencies with `npm install`.
4. Run the software with `gatsby develop`. You should be able to access it on port 8000.

Like all Gatsby sites, you can also build graphQL queries using graphiQL, which should be available at `localhost:8000/___graphql`.

When you're finished, commit your changes and Netlify's CI server will try to deploy them.
