import { browser, by, element } from 'protractor';


export class AppPage {
  
  navigateTo(url) {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('app-root .navlink-logo')).getText();
  }

}
export class LoginPage {
  
  navigateTo() {
    return browser.get('/login');
  };
  
  getUsername() {
    return element(by.name("Username")).getAttribute('value');
  };
  
  getPassword() {
    return element(by.name("Password")).getAttribute('value');
  };
  
  setUsername() {
    var username  = element(by.name("Username"));
    username.sendKeys("Test User");
  };
  
  setPassword() {
    var username  = element(by.name("Password"));
    username.sendKeys("qwert");
  };

  getSubmitButton() {
    return element(by.buttonText("Login"));
  }

  getErrorMessage() {
    return element(by.className("error")).getText();
  }
}

export class SearchPage{
  navigateTo(url) {
    return browser.get(url);
  }

  getSearchButton(){
    return element(by.css('div.searchButton'));
  }

  getAdvancedSettingsButton(){
    return element(by.css('button.expandButton'));
  }

  getListOfProducts(){
    return element.all(by.css('.example-headers-align > div'));
  }
  
  getQueryField(){
    return element(by.css('#input-field'));
  }

  getProducerDropdown(){
    return element(by.css('.full-width .margin-left div.mat-select-value'));
  }

  selectProducer(producer:string){
    return element(by.cssContainingText('span.mat-option-text', producer));
  }

  getCategoryDropdown(){
    return element(by.css('.full-width .margin-right'));
  }

  selectCategory(category:string){
    return element(by.cssContainingText('span.mat-option-text', category));
  }
  
  
  getSelectedProduct(productName:string){
    return element(by.cssContainingText('.mat-expansion-panel-header-title', productName));
  }
}
