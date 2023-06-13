const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');
const pathTemplate = "checkout/shopping-bag/";

exports.CheckoutPage = class CheckoutPage{
     
    constructor(page) {
        // super(page);
      this.page = page;
      this.CheckoutButton = page.locator('[data-test="shopping-bag__checkout-button"]');
      this.SignInRadioButton = page.locator('[data-test class="css-leddm7 e8ht4ii5"]');
      this.UsernameTextbox  = page.locator('#loginID');
      this.PasswordTextbox = page.locator('#password');
      this.SignUpForUpdatesBanner = page.locator('[data-testid="popup-email-sign-up"]');
      this.ShoesCategoryInWomenNav = page.locator('#blt81-1f6dcf06-31e23f');
      this.CloseSignUpUpatesButton = page.locator('button[class="css-5wqygc e1nk0axg2"]');
    }
    
        async navigate(){
            await super.navigate(pathTemplate);
            await expect(this.page).toHaveURL(pathTemplate);
        }
    }