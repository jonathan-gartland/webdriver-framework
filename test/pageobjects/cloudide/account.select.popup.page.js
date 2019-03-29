import Page from '../page';
import assert from 'assert';
const selectors = require('../../selectors/ide.json');

class AccountPopUpPage extends Page {

  get modalDialog() { return $(selectors.cloudIdeCss.accountPopUp.modalDialog); }
  get accountFromList() { return $(selectors.cloudIdeCss.accountPopUp.accountFromList); }
  get submitButton() { return $(selectors.cloudIdeCss.accountPopUp.submitButton); }
  get modalTitle() { return $(selectors.cloudIdeCss.accountPopUp.modalTitleLabel); }



  popUpIsOpen() {
    return this.modalTitle.isDisplayed();
  }


}

export default new AccountPopUpPage();

