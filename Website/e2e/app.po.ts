import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('app-root .navlink-logo')).getText();
  }

  getSearchButton(){
    return element(by.css('.searchButton'));
  }

  getListOfProducts(){
    return element.all(by.css('.example-headers-align > div'));
  }
  
  getQueryField(){
    return element(by.css('#input-field'));
  }
}
