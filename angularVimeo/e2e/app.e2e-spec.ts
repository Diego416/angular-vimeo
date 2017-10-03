import { AngularVimeoPage } from './app.po';

describe('angular-vimeo App', function() {
  let page: AngularVimeoPage;

  beforeEach(() => {
    page = new AngularVimeoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
