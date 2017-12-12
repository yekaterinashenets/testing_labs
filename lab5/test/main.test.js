const assert = require('assert');
const {search} = require('./urls');
const {vk} = require('./urls');
const MainPage = require('../pages/main.page');

MainPage.open();

describe('Main page', () => {
    it('should have the right link way', () => {
        assert.equal(MainPage.pathToVk(), vk);
    });

    it('should change url when search', () => {
        MainPage.search();
        assert(~MainPage.url.indexOf(search));
    });

    it('should change the country', () => {
        assert.notEqual(MainPage.getCountry(), MainPage.chooseCountry());
    });
});
