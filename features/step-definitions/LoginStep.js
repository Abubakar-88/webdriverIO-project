const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const  LoginPage = require('../pages/LoginPage');

const loginPage = new LoginPage();

Given('I am on the login page', async () => {
    await loginPage.open();
});

When('I enter {string} in the username field', async (username) => {
     loginPage.enterUsername(username);
});

When('I enter {string} in the password field', async (password) => {
    await loginPage.enterPassword(password)
});

When('I click on the login button', async () => {
    await loginPage.clickLoginButton();
});

Then('I should see the dashboard page', async () => {
    const isVisible = await loginPage.isDashboardVisible();
    expect(isVisible).toBe(true);
});
