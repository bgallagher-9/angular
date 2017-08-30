import { RecipeNewPage } from './app.po';

describe('recipe-new App', () => {
  let page: RecipeNewPage;

  beforeEach(() => {
    page = new RecipeNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
