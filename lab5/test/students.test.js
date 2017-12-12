const assert = require('assert');;
const StudentsPage = require('../pages/students.page');

StudentsPage.open();

describe('Christmas page', () => {
    it('should have the right title', () => {
        assert.equal(StudentsPage.title, 'ASOS Student Codes & Offers | ASOS');
    });

    it('should set fields', () => {
        StudentsPage.setFields();
    });

});
