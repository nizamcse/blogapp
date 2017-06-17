import { BlogingPage } from './app.po';

describe('bloging App', () => {
  let page: BlogingPage;

  beforeEach(() => {
    page = new BlogingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
