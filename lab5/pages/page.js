module.exports = class Page {

  get title() {
    return browser.getTitle();
  }

  get url() {
    return browser.getUrl();
  }

  open(path) {
    browser.url(path);
  }

};
