import Page from './page';
import assert from 'assert';




export default class LandingPage extends Page {


  //
  get header() { return $('body > header'); }
  get footer() { return $('body > footer'); }

  open() {
    super.open('/');
    browser.pause(3000)
  }
}

