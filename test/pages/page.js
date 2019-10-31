/* global browser */
import { config } from '../../wdio.conf';

export default class Page {
  constructor() {
    this.title = 'Base Page';
  }

  open(path) {
    path.includes('http') ? browser.url(`${path}`) : browser.url(`${config.baseUrl}${path}`);
  }
}
