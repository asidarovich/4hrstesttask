/* global $ */
import Page from './page';

class GDPRModule extends Page {
  constructor() {
    super();
    this.title = 'GDRP module';
  }

  get iAcceptButton() { return $('#hs-eu-confirmation-button'); }

  acceptGDPRPolicy() {
    if(this.iAcceptButton.isDisplayed()) {
      this.iAcceptButton.click();
    }
  }
}

export default new GDPRModule();
