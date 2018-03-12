import { AppPage } from './app.po';

describe('angular-polymer-starter-kit App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header title', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('My App');
  });
});
