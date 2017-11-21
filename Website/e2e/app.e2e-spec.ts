import { AppPage, LoginPage } from './app.po';
import { browser, by, element, protractor} from 'protractor';


describe('website App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
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

// afterAll(() => {
//   browser.pause();
// })