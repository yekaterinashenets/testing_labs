const Page = require('./page');
const { base } = require('../test/urls');

class MainPage extends Page {

  open() {
    super.open(base);
  }

  getCountry () {
      return $('img._2S5PiQY').getAttribute('alt');
  }

  chooseCountry () {
    $('button.YvZ3lbB').click();
    $('select._3JpRU2l').click();
    $('option[value="BY"]').click();
    $('button.V7TpTZV').click();
    return this.getCountry();
  }

  search() {
    $('input#chrome-search').setValue('reebok');
    $('button._1PEaSbT._3STtqeg').click();
  }
  pathToVk() {
    return $('a._1gagYVR._2mLsYUT').getAttribute('href');
  }

}

module.exports = new MainPage();
