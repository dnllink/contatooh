exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {
        //        browser.driver.get('http://localhost:3000');
        //        browser.driver.findElement(by.id('entrar')).click();
        //        browser.driver.findElement(by.id('login_field')).sendKeys('dnllink@hotmail.com');
        //        browser.driver.findElement(by.id('password')).sendKeys('824637nu');
        //        browser.driver.findElement(by.name('commit')).click();

        //código refatorado para utilizar auth.html com AngularJS
        browser.get('http://localhost:3000');
        element(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field')).sendKeys('dnllink@hotmail.com');
        browser.driver.findElement(by.id('password')).sendKeys('824637nu');
        browser.driver.findElement(by.name('commit')).click();
    }
}