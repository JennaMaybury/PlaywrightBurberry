
const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');


exports.HomePage = class HomePage {
    constructor(page) {

        /**
   * @param {import('@playwright/test').Page} page
   */
    //   super(page);
      this.page = page;
      this.cookiePopUp = page.locator("#onetrust-accept-btn-handler");
      this.cookieButtonHandler = page.locator("#onetrust-accept-btn-handler");
      this.WomenTopNavButton  = page.locator('nav li:nth-of-type(3) > a', { hasText: 'Women' });
      this.MainMenu = page.locator('[data-test="button-menu"]');
      this.SignUpForUpdatesBanner = page.getByTestId('popup-email-sign-up');
      this.ShoesCategoryInWomenNav = page.getByTestId('cs196f2bd8d82466c0');
      this.CloseSignUpUpatesButton = page.locator('button[class="css-5wqygc e1nk0axg2"]');
  
    };

    async goto(baseURL){
        await this.page.goto(baseURL);
        await expect(this.page).toHaveURL(new RegExp(baseURL));
    }

   async CheckIfCookiesAreDisplayedAndAccept() {

        //If the cookie pop up appears then click accept cookies
        if (await this.cookiePopUp.isVisible()) {
            await this.cookieButtonHandler.click();
          }
     }

    async CheckIfSignUpPopUpAppearsAndClose() {

        await this.CloseSignUpUpatesButton.isVisible();
           await this.page.on('dialog', dialog => dialog.dismiss());
            await this.CloseSignUpUpatesButton.click();
     }

     async  NavigateToMainMenuAndSelectWomen() {
        //Click on main menu toggle if displayed
        if (await this.MainMenu.isVisible())
        {
            await this.MainMenu.click();
            await this.WomenTopNavButton.click();
            }
            
        else
        {
        await this.WomenTopNavButton.click();
        }
    }

    //Select shoe category for women
    async SelectCategoryShoes() {

    this.ShoesCategoryInWomenNav.isVisible();
    this.ShoesCategoryInWomenNav.click()
 }
 
}