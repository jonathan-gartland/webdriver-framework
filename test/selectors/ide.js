export default
{
  "cloudIde" : {
    "landingPageSelectors": {
      "menuLinks": "#currentUser > div > div.menuItems > div > a",
      "menuToggler": "#menuToggler",
      "accountNavLogin": "#userPanel > div > div.menu > a.menuItem.login",
      "accountNavSignup": "#userPanel > div > div.menu > a.menuItem.signup",
      "footerLogo": "#footerLogo"
    },
    "loginPageSelectors": {
      "userInput": "body > div > div > div > form:nth-child(1) > input[type=\"email\"]:nth-child(2)",
      "passWord": "body > div > div > div > form:nth-child(1) > input[type=\"password\"]:nth-child(3)",
      "loginButton": "body > div > div > div > form:nth-child(1) > button",
      "loginGoogleButton": "#login-form-google",
      "loginGithubButton": "#login-form-github",
      "termsOfServiceLink": "body > div > div > div > section > p > a:nth-child(1)",
      "forgotPasswordLink": "body > div > div > div > section > p > a:nth-child(2)",
      "signUpLink": "body > div > div > div > section > div > a",
      "copyrightDiv": "#copyright"
    },
    "projectPageSelectors": {
    },
    "spacePageSelectors": {

    }
  }
}
