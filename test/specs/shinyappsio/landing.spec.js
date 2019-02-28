import ShinyappsioLandingPage from '../../pageobjects/shinyappsio/landing.page';
import assert from 'assert';
import utl from '../../../utilities/common-utilities';

const debug = process.env.DEBUG;


//Landing Page
describe('Shinyapps.io Landing page', function () {

  this.timeout(50000);

  it ('should be the landing page for Shinyapps.io', function () {

    ShinyappsioLandingPage.open();
    ShinyappsioLandingPage.waitForLandingPageToLoad();
    // again, like ide, this should be  collected from process.env
    // or a browser.baseUrl
    assert(ShinyappsioLandingPage.onLandingPage('shinyapps.io'));
    // assert we are on landing page here


  })
})

// describe('Shinyapps.io Landing page', function() {
//   it('should allow user to navigate to the login page', function () {
//     LandingPage.open();     // navigating to login page
//     console.log('the page is : ' + browser.getURL());
//   });
// })
