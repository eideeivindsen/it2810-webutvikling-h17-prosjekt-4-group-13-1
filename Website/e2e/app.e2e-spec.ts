import { AppPage } from './app.po';
import { LoginPage } from './app.po';
import { browser, by, element, protractor} from 'protractor';

describe('application start', () => {
  let page: AppPage;
  
  it('should display "WAREWOLF" in tag with "navlink-logo" class', () => {
    page.navigateTo('/');
    expect(page.getTitleText()).toEqual('WAREWOLF');
  });
});

describe('Login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });
  
  it('should display an empty username', () => {
    page.navigateTo();    
    expect(page.getUsername()).toEqual("");
  });
  
  it('should display an empty password', () => {
    page.navigateTo();    
    expect(page.getPassword()).toEqual("");
  });
  
  it('should set a chosen username', () => {
    page.navigateTo();
    page.setUsername();
    expect(page.getUsername()).toEqual("Test User");
  });
  
  it('should set a chosen password', () => {
    page.navigateTo();
    page.setPassword();
    expect(page.getPassword()).toEqual("qwert");
  });
  
    it('should print an error message if the user or password is wrong', () => {
    page.navigateTo();
    page.setUsername();
    page.setPassword();
    page.getSubmitButton().click().then(() => {    
      page.getErrorMessage().then(function(text) {
        expect(text).toEqual("Wrong username or password.");        
      });
    });
  });
});

describe('testing searches', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  })

  it('should not display any products at launch', () => {
    expect(page.getListOfProducts().count()).toEqual(0);
  });

  it('should display all products when search button is pressed', () => {
    page.getSearchButton().click();
    
    expect(page.getListOfProducts().count()).toEqual(5);  // Shows first five products
    
  })

  it('should display at least two products containing "melk" in their name', () => {
    page.getQueryField().sendKeys('melk');
  
    page.getSearchButton().click();

    expect(page.getListOfProducts().count()).toBeGreaterThanOrEqual(2);
  });
});

