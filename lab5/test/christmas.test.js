const assert = require('assert');
const {christmasItemUrl} = require('./urls');
const ChristmasPage = require('../pages/christmas.page');

ChristmasPage.open();

describe('Christmas page', () => {
    it('should have the right title', () => {
        assert.equal(ChristmasPage.title, 'Christmas Gifts | Shop Christmas games, accessories & novelty | ASOS');
    });

    it('should animate the heart button', () => {
        assert.equal(ChristmasPage.saveForLaterAnimation(), 'active');
    });

    it('should go to item url', () => {
        ChristmasPage.gotoItemPage();
        assert(~ChristmasPage.url.indexOf(christmasItemUrl));
    });
});
