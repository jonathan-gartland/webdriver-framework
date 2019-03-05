import Page from '../page';
import assert from 'assert';
const selectors = require('../../selectors/ide.json');

class AccountPopUpPage extends Page {

  get modalDialog() { return $(selectors.cloudIde.accountPopUp.modalDialog); }

  get accountFromList() { return $(selectors.cloudIde.accountPopUp.accountFromList); }

  get submitButton() { return $(selectors.cloudIde.accountPopUp.submitButton); }

}

export default new AccountPopUpPage();

