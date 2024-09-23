const { $ } = require('@wdio/globals')
const Page = require('../../page');
const { browser } = require('@wdio/globals')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameInput() { return $('[name="mailuid"]'); }
    get passwordInput() { return $('[name="pwd"]'); }
    get loginButton() { return $('[name="login-submit"]'); }
    get dashboardHeader() {return $('h2');}

    async open() {
        await super.open('elogin.php');
    }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async isDashboardVisible() {
        return await this.dashboardHeader.isDisplayed();
    }
}

module.exports = LoginPage;
