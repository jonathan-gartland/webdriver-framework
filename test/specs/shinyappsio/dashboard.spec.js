import { expect } from 'chai';
import assert from 'assert';
import LoginPage from '../../pageobjects/shinyappsio/login.page';
import DashboardPage from '../../pageobjects/shinyappsio/dashboard.page'

describe('dashboard', () => {

  before( () => {
    LoginPage.logInFromLandingPage();
    LoginPage.waitForLoginFormToLoad();

    LoginPage.loginWithUserNamePasswordCombo(
      process.env.LOGIN_NAME,
      process.env.PASSWORD
    );

  });

  it('should allow access to dashboard with correct credentials', () => {
    DashboardPage.waitForDashboardPageToLoad();
    assert(DashboardPage.validateDashboardPageOpened());
  });
});
