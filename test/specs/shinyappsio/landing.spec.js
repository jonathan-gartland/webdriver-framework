import LandingPage from '../../pageobjects/shinyappsio/landing.page';
import assert from 'assert';
import utl from '../../../utilities/common-utilities';

const debug = process.env.DEBUG;


//Landing Page
describe('Shinyapps.io Landing page', function () {

  this.timeout(50000);

  it ('should be the landing page for Shinyapps.io', function () {

    LandingPage.open();
    LandingPage.waitForLandingPageToLoad();
    assert(LandingPage.onShinyappsioLandingPage());
    // assert we are on landing page here


  })
})

// describe('Shinyapps.io Landing page', function() {
//   it('should allow user to navigate to the login page', function () {
//     LandingPage.open();     // navigating to login page
//     console.log('the page is : ' + browser.getURL());
//   });
// })
