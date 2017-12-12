const Page = require('./page');
const { christmas } = require('../test/urls');

class ChristmasPage extends Page {

    open() {
        super.open(christmas);
    }

    saveForLaterAnimation(){
        const btn  = $('article#product-8131115 button.rfoOZwM');
        btn.click();
        return btn.getAttribute('data-auto-state');
    };

    gotoItemPage() {
        $('article#product-8131114 a._3x-5VWa').click();
    }


}

module.exports = new ChristmasPage();
