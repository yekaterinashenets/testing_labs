const Page = require('./page');
const { students } = require('../test/urls');

class StudentsPage extends Page {

    open() {
        super.open(students);
    }

    setFields () {
        $('a._3TGKcxB.wN7TsRy').click();
        $('#EmailAddress').setValue('yekaterina.shenets@gmail.com');
        $('#Password').setValue('1522142k');
        $('#signin').click();
    }

}

module.exports = new StudentsPage();
