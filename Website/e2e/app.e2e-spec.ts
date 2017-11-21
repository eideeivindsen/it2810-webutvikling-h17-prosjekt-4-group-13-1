import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('application start', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "WAREWOLF" in tag with "navlink-logo" class', () => {
    page.navigateTo('/');
    expect(page.getTitleText()).toEqual('WAREWOLF');
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

