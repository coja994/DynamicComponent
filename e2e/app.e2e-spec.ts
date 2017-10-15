import { BananaPage } from './app.po';

describe('banana App', () => {
  let page: BananaPage;

  beforeEach(() => {
    page = new BananaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
