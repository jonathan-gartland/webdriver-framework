import { expect } from 'chai';
import assert from 'assert';
import LoginPage from '../../pageobjects/shinyappsio/login.page';
import DashboardPage from '../../pageobjects/shinyappsio/dashboard.page'


describe('login form can be reached from landing page', () => {

  it('should display the login form', () => {

    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();
    assert(LoginPage.verifyLogInPageIsLoaded());

  });
});

describe('login to dashboard', () => {

  it('should allow access to dashboard with correct credentials', () => {

    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();

    LoginPage.loginWithUserNamePasswordCombo(
      process.env.LOGIN_NAME,
      process.env.PASSWORD
    );

    DashboardPage.waitForDashboardPageToLoad();
    assert(DashboardPage.validateDashboardPageOpened());

  });
});
