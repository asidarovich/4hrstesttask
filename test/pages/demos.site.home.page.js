/* global $, $$ */

import Page from './page';

class DemosSiteHomePage extends Page {
  constructor() {
    super();
    this.title = 'ShortPoint Demos Library';
  }

  get topMenuContainer() { return $('[id$=TopNavigationMenu], #g1-primary-nav-menu'); }
  get allTopMenuItems() { return this.topMenuContainer.$$('a.menu-item'); }

  open() {
    super.open('https://demos.shortpoint.com/');
  }

  getAllMenuItemLinks() {
    const linksList = [];
    this.allTopMenuItems.forEach((item)=>{
      linksList.push(item.getAttribute('href'));
    });
    return linksList;
  }

  getPageTitle() {
    return this.title;
  }
}

export default new DemosSiteHomePage();
