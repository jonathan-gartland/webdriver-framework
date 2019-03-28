export default class User {

  // consider what other detail should we have for this
  // to be useful?
  constructor() {
    this.user_name = '';
    this.email = '';
    this.password = '';
    this.user_type = '';

    this.user_accounts = []; //or dict?? ... may even need
    // more detailed json config for accounts. detail to test against
    // unless we want to poll lucid-curl live to get more 'automated'
    // with data collection. not committing either way at this stage,
    // but something to work out

    // todo : accounts, how many ...
    // will likely use predetermined test users so
    // we can tune this. I will have to sit down and think through what
    // we want to test regarding accounts
    //

  }

}
