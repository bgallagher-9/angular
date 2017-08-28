import { AngularNewPage } from './app.po';

describe('angular-new App', () => {
  let page: AngularNewPage;

  beforeEach(() => {
    page = new AngularNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
