Write Some Testcases for ShortPoint Website
==============================================
Write an automated test cases that will perform the following 2 jobs:
--------------

Job 1: Downloading and verifying all ShortPoint packages
--------------
This test case should do the following:

Open our downloads page
Read the current version for Office365, SharePoint 2019, SharePoint 2013 & SharePoint 2016 from the page (as highlighted here http://prntscr.com/p7v052)
Open the download page for each of those packages (Office365, SharePoint 2019, SharePoint 2013 & SharePoint 2016)
Click on the Download ShortPoint button
Verify that the downloaded package has in its filename the same version number mentioned on the website (point number 2)

Job 2: Detecting broken links on our demos website
--------------
The test case should do the following:
Open our demos website,
Get a list of all of the demo pages from the top navigation menu
Go to each page, and make sure all links in those pages are valid
Print out the result of each page and what are the broken links


Important Notes
--------------
You can use any tools or frameworks you like for automation, but test cases themselves should be written in JavaScript, any other language is not accepted.
Writing modular extensible architecture is a key to pass this test.
If you don't have enough time to finish both jobs, the first one is more important and will have a higher points in evaluating your submission.

How to submit
--------------
Please upload the code for this project to GitHub, and post a link to your repository below.


Task solution
==============================================

Prerequisities
--------------

- Node.js (latest)

- NPM (latest)

- Java (v8 and higher)

- Google Chrome (latest)

Run tests
---------

Run the following command from project root folder:

$ npm run test

Note: First tests execution may take some time because of browser drivers download.

Generate and open HTML report
-----------------------------

Run the following command from project root folder:

$ npm run report

Report will automatically open in your system default browser.

Summary
-------

Tools used:

- WebdriverIO

- Jasmine

- Babel

- Chai

- Allure

Notes
------
- Code linting was not implemented to save time

- RegEx was not used to get versions to save time

- Failed 4 hrs deadline prefering quality to speed

- Tests are not run in headless mode as there is additional chrome configuration
