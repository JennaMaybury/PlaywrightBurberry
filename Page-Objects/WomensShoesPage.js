
const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');
const pathTemplate = "womens-shoes/";



exports.WomensShoesPage = class WomensShoesPage {

    constructor(page) {
        // super(page);
      this.page = page;
      this.ShoeOptionsButton = page.locator('[data-test="product-card"]');
      this.AllShoes = page.locator('#bltf67-09c24b91-234-1c');
      this.AddToBasketButton  = page.locator('[data-test="add-to-bag"]');
      this.ShoeSize = page.locator('div[class="size-picker__radio-type-selector"]');
      this.ShoesizeRadioButton = page.locator('div[class="size-picker__size-box"]')
      this.OutOfStockMessage = page.locator('pdp-modal__wrapper');
      this.BagIcon = page.locator('[data-test="button-bag"]');
    }

    async navigate(){
        await super.navigate(pathTemplate);
        await expect(this.page).toHaveURL(pathTemplate);
    }

    async CheckUrlContainsPath(baseURL){
        await expect(this.page).toHaveURL(baseURL+pathTemplate);
    }

    async ClickRandomShoeOption()
    {
       //Click on a random product
       await this.ShoeOptionsButton.first().isVisible();
       await this.ShoeOptionsButton.first().click()
    }

    async CheckShoeIsDisplayed(){
        await this.ShoeSize.first().isVisible();
    }

    //This needs refining as not very trust worthy
    async SelectShoeAndToBag(randomString) {
     await this.ShoeSize.isVisible();
    //  await this.ShoeSize.selectOption(randomString);

    const radioSelector =  await this.ShoeSize;
    // Get the list of radio buttons.
  const radioButtons = await radioSelector.evaluateHandle(() => {
    return Array.from(this.querySelectorAll(ShoesizeRadioButton));
  });

     // Select a random radio button.
    const index = Math.floor(Math.random() * radioButtons.length);
    await radioButtons[index].click();

    }

    async AddToBag(){

        await this.AddToBasketButton.click();
    }
    
}