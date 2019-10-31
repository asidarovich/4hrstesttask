/* global browser, describe, it, expect, beforeAll */
import DemosSiteHomePage from '../pages/demos.site.home.page';

describe('user detects broken links on ShortPoint demos website', () => {
  let testData = {
    menuLinks:[],
  };

  beforeAll(() => {
    DemosSiteHomePage.open();
    testData.menuLinks = DemosSiteHomePage.getAllMenuItemLinks();
  });

  it(`user can see main and correct link on all Demos sites`, () => {
    let brokenLinks = [];
    testData.menuLinks.forEach((link) => {
      browser.url(link);
      if (!browser.getUrl().startsWith(link) || !DemosSiteHomePage.topMenuContainer.isDisplayed()) {
        console.log(`FAIL - ${link}`);
        brokenLinks.push(link);
      } else {
        console.log(`PASS - ${link}`);
      }
    });
    console.log(`Links broken: ${brokenLinks.length > 0 ? brokenLinks.toString() : '0'}`);
    expect(brokenLinks.length).to.equal(0);
  });
});
