import { NgTreenavPage } from './app.po';

describe('ng-treenav App', () => {
  let page: NgTreenavPage;

  beforeEach(() => {
    page = new NgTreenavPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
