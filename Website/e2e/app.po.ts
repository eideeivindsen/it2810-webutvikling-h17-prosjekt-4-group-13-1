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
  
  setUsername(name) {
    var username  = element(by.name("Username"));
    username.sendKeys(name);
  };
  
  setPassword(pw) {
    var username  = element(by.name("Password"));
    username.sendKeys(pw);
  };

  getSubmitButton() {
    return element(by.buttonText("Login"));
  }

  getLogoutButton() {
    return element(by.className("navlink-logout"));
  }

  getErrorMessage() {
    return element(by.className("error")).getText();
  }

}
