import IdeLandingPage from '../../pageobjects/cloudide/landing.page';
import assert from 'assert';
import utl from '../../../utilities/common-utilities';


const debug = process.env.DEBUG;

// Landing Page
describe('RStudio.cloud Landing page', function () {

  this.timeout(30000);

  it ('should be the landing page for RStudio.cloud, completely loaded', function () {
    IdeLandingPage.open();
    IdeLandingPage.waitForLandingPageToLoad();
    // todo this should be coming in as part of the env arg
    // or strip it from browser.baseUrl before adding here
    // hard coding for now
    assert(IdeLandingPage.onLandingPage());
    // console.log(selectors.cloudIde.landingPageSelectors.menuToggler);
  })
})

// describe('RStudio.cloud Landing page, top nav links', function() {
//   it('should be the link to log into RStudio.cloud', function() {
//
//   });
// })
//
// describe('RStudio.cloud Landing page, top nav links', function() {
//   it('should be the link to sign up for RStudio.cloud', function() {
//
//  });
// })

/*
validate each widget independently, more flexibility to manage
changes in the UI over time.

describe('RStudio.cloud Landing page, top nav links', function() {
  it('', function() {

  });
})
 */

describe('RStudio.cloud Landing page, account login', function() {
  it('should allow user to navigate to account nav and see the links for login and signup', function () {
    IdeLandingPage.open();
    IdeLandingPage.waitForLandingPageToLoad();
    if(IdeLandingPage.onLandingPage()) {
      IdeLandingPage.findMenuToggleWidgetAndClick();
    }
    //console.log(IdeLandingPage.accountNavLinkIsVisible());
    assert(IdeLandingPage.accountNavLinkIsVisible());
  });
})

// describe('', function() {
//   it('', function() {
//
//   });
// })

// describe('', function() {
//   it('', function() {
//
//   });
// })
