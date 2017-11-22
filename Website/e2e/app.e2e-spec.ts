import { AppPage, LoginPage, SearchPage } from './app.po';
import { browser, by, element, protractor} from 'protractor';

describe('Application page', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should display "WAREWOLF" in tag with "navlink-logo" class on app load', () => {
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
    page.setUsername("username");
    expect(page.getUsername()).toEqual("username");
  });
  
  it('should set a chosen password', () => {
    page.navigateTo();
    page.setPassword("password");
    expect(page.getPassword()).toEqual("password");
  });
  
    it('should print an error message if the user or password is wrong', () => {
    page.navigateTo();
    page.setUsername("Test User");
    page.setPassword("qwert");
    page.getSubmitButton().click().then(() => {    
      page.getErrorMessage().then(function(text) {
        expect(text).toEqual("Wrong username or password.");        
      });
    });
  });

  // user able to log in
  it('should be able to log in a user', () => {
    page.navigateTo();
    page.setUsername("bob@petter.com");
    page.setPassword("qwert");
    page.getSubmitButton().click().then(() => {
      let currentURL = browser.getCurrentUrl();    
      expect(currentURL).toEqual("http://localhost:8083/");        
    });
  });

  // user able to log out
  it('should be able to log out a user', () => {
    page.navigateTo();
    page.setUsername("bob@petter.com");
    page.setPassword("qwert");
    page.getSubmitButton().click().then(() => {
      page.getLogoutButton().click().then(() => {
        var currentURL = browser.getCurrentUrl();
        expect(currentURL).toEqual("http://localhost:8083/login");        
      })
    });
  });


});

describe('Search component', () => {
  let page: SearchPage;

  beforeEach(() => {
    page = new SearchPage();
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

  it('should display only products from the producer "Bama", "Banan" should be one of them', () => {

    page.getAdvancedSettingsButton().click();
    page.getProducerDropdown().click();
    page.selectProducer('Bama').click();
    page.getSearchButton().click();

    expect(page.getSelectedProduct('Banan').getText()).toBe('Banan');
    
  })
  it('should display only products from the category "fruits and vedgetables", "Banan" should be one of them', () => {

    page.getAdvancedSettingsButton().click();
    page.getCategoryDropdown().click();
    page.selectCategory('Fruit and vegetables').click();
    page.getSearchButton().click();

    expect(page.getSelectedProduct('Banan').getText()).toBe('Banan');
    
  })
});

