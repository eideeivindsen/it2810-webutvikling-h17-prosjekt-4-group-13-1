import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

export class LoginPage {
  
  navigateTo() {
    return browser.get('http://it2810-13.idi.ntnu.no:8083/login');
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
