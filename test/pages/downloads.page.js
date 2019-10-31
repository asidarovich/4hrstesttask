/* global $, $$ */
import Page from './page';

class DownloadsPage extends Page {
  constructor() {
    super();
    this.title = 'Download ShortPoint';
  }

  get currentSectionLabel() { return $('h1 + p + p'); }
  get currentVersionsString() { return $$('//p[contains(text(),"Current version")]/b'); }
  downloadSoftwareLinkFor(softwareName) { return $(`//div[h4[contains(text(),'${softwareName}')]]/a`) }

  open() {
    super.open('/download/');
  }

  getCurrentVersions() {
    const version1 = this.currentVersionsString[0].getText();
    const version2 = this.currentVersionsString[1].getText();
    return { version1, version2 };
  }

  getPageTitle() {
    return this.title;
  }
}

export default new DownloadsPage();
