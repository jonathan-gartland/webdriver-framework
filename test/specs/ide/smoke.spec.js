
//import { expect } from 'chai';
import LoginPage from '../../pageobjects/ide/login.page';

describe('Smoke Test', () => {

  // String googleUser1_username = "connect-qa@rstudio.com";
  // String googleUser1_password = "rsctest99";
  // String localUser1_username = "dfaltyname@gmail.com";
  // String localUser1_password = "Export_Bamboo";


  // String googleUser1_username = "connect-qa@rstudio.com";
  // String googleUser1_password = "rsctest99";
  // String localUser1_username = "connect-qa+16@rstudio.com";
  // String localUser1_password = "rsctest99";
  // String projectName = "My project Name";
  // String testPackageName = "rmarkdown";
  // String gitRepo = "https://github.com/dfalty/QATestRepo.git";


  // it('should allow access with correct creds', () => {
  //
  // });

  // run tests with contributor level user, add other types for ide:
  // admin, viewer, Moderator
  it('should allow a contributor login with google auth', () => {
      // run test with contributor level user
  });

  it('should allow a contributor to login with github auth', () => {

  });

  it('should allow a contributor to create a project', () => {

  });

  it('should allow a contributor to open a project', () => {

  });

  it('should allow a contributor to install a library in a project', () => {
    // UserManagement.loginLocal(localUser1_username,localUser1_password);
    // ProjectManagement.createProject();
    // IDEManagement.installPackageCRAN(testPackageName);
    // ProjectManagement.archiveProjectsInWorkspace();
  });

  it('should allow a contributor to rename a project', () => {

  });

    // many of these outlines, will have several iterations
    // for roles as i fill in functionality
  it('should allow an admin to share a project with members of the space', () => {

  });

  it('should allow a contributor to navigate to a space', () => {

  });

  it('should allow a contributor to navigate to a space', () => {

  });

  it('should allow an admin to archive all projects in a space', () => {

  });

  it('should allow an admin to delete a space', () => {

  });

  // more capabilities have ben implemented that we need to cover
  // i will expand to add stubs for better coverage in my second pass
  // right now just sort of pulling like for like tests from Darby's examples
  // or slightly modifying the arrangement

  it('should allow a contributor to create a git project', () => {

  });

  it('should allow an admin to create a base project for a space', () => {

  });

  it('should allow an admin to empty the trash', () => {

  });

});
