import { SwbuddyPage } from './app.po';

describe('swbuddy App', function() {
  let page: SwbuddyPage;

  beforeEach(() => {
    page = new SwbuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
