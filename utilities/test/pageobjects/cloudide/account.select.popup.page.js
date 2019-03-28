import Page from '../page';
import assert from 'assert';
const selectors = require('../../selectors/ide.json');

class AccountPopUpPage extends Page {

  get modalDialog() { return $(selectors.cloudIde.accountPopUp.modalDialog); }
  get accountFromList() { return $(selectors.cloudIde.accountPopUp.accountFromList); }
  get submitButton() { return $(selectors.cloudIde.accountPopUp.submitButton); }
  get modalTitle() { return $(selectors.cloudIde.accountPopUp.modalTitleLabel); }



  popUpIsOpen() {
    return this.modalTitle.isDisplayed();
  }


}

export default new AccountPopUpPage();

