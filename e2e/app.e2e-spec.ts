import { Ng4PrjPage } from './app.po';

describe('ng4-prj App', () => {
  let page: Ng4PrjPage;

  beforeEach(() => {
    page = new Ng4PrjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
