import { browser, element, by } from 'protractor';

export class FirebootcampCrmDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fbc-root h1')).getText();
  }
}
