/* global $ */
import Page from './page';

class DownloadSoftwareVersionPage extends Page {
  constructor() {
    super();
    this.title = '';
  }

  get downloadButton() { return $('.cta_button.sp-cta'); }
}

export default new DownloadSoftwareVersionPage();
