const { test, expect,devices, webkit  } = require('@playwright/test');
const {HomePage} = require('../Page-Objects/HomePage');
const CommonCode = require('../Common-Functions/Common-code');
const {BasePage} = require('../Page-Objects/BasePage');
const {WomensShoesPage} = require('../Page-Objects/WomensShoesPage');
const {CheckoutPage} = require('../Page-Objects/CheckoutPage');
test('Visit Website and adds item to basket - Desktop', async ({ page, baseURL,   }) => {

  devices['Desktop Chrome'];
const shoesSizes = ["35", "36", "37", "38", "39", "40", "41"];
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const womenShoesPage = new WomensShoesPage(page);
   const checkoutPage = new CheckoutPage(page);
   const CommonCodePage = new CommonCode();
   await homePage.goto(baseURL);
  
   await homePage.CheckIfCookiesAreDisplayedAndAccept();
   await homePage.CheckIfSignUpPopUpAppearsAndClose();
   await homePage.NavigateToMainMenuAndSelectWomen();
   await homePage.SelectCategoryShoes();
  await womenShoesPage.CheckUrlContainsPath(baseURL);
   await womenShoesPage.ClickRandomShoeOption();
   let size = CommonCodePage.SelectShoeSize(shoesSizes)
   await womenShoesPage.SelectShoeAndToBag(size);
  await womenShoesPage.AddToBag();

  //todo:
  //  commonCodePage.CheckOutOfStockMessage();
  //  commonCodePage.ClickOnBagToCheckout();

  //  // Check if on the checkout page 
  //  commonCodePage.CheckUrlContainsPath(checkoutPage.pathTemplate)
  //  commonCodePage.SelectCheckoutOption()
  //  commonCodePage.SelectsSignIn()
  //  commonCodePage.CheckUsernameTextboxDisplayedOnCheckout()
  //  commonCodePage.CheckPasswordTextboxDisplayedOnCheckout()

});

test('Visit Website and adds item to basket - Mobile, Iphone 13', async ({ page, baseURL }) => {


  const browser = await webkit.launch({headless: false});
  const context = await browser.newContext({...devices['Mobile Safari']});
  const shoesSizes = ["35", "36", "37", "38", "39", "40", "41"];
  const basePage = new BasePage(page);
  const homePage = new HomePage(page);
  const womenShoesPage = new WomensShoesPage(page);
   const checkoutPage = new CheckoutPage(page);
   const CommonCodePage = new CommonCode();
   await homePage.goto(baseURL);
  
   await homePage.CheckIfCookiesAreDisplayedAndAccept();
   await homePage.CheckIfSignUpPopUpAppearsAndClose();
   await homePage.NavigateToMainMenuAndSelectWomen();
   await homePage.SelectCategoryShoes();
  await womenShoesPage.CheckUrlContainsPath(baseURL);
   await womenShoesPage.ClickRandomShoeOption();
   let size = CommonCodePage.SelectShoeSize(shoesSizes)
   await womenShoesPage.SelectShoeAndToBag(size);
  await womenShoesPage.AddToBag();
  //  commonCodePage.CheckOutOfStockMessage();
  //  commonCodePage.ClickOnBagToCheckout();

  //  // Check if on the checkout page 
  //  commonCodePage.CheckUrlContainsPath(checkoutPage.pathTemplate)
  //  commonCodePage.SelectCheckoutOption()
  //  commonCodePage.SelectsSignIn()
  //  commonCodePage.CheckUsernameTextboxDisplayedOnCheckout()
  //  commonCodePage.CheckPasswordTextboxDisplayedOnCheckout()

});
