import { PriyanshuJindalPage } from './app.po';

describe('priyanshu-jindal App', function() {
  let page: PriyanshuJindalPage;

  beforeEach(() => {
    page = new PriyanshuJindalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
