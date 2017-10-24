import { DpAssignmentPage } from './app.po';

describe('dp-assignment App', () => {
  let page: DpAssignmentPage;

  beforeEach(() => {
    page = new DpAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
