//Basic page containing anything that would be reused by more than one test to stop repetition
const {Chromium} = require('playwright');

const {HomePage} = require('../Page-Objects/HomePage');
const {WomensShoesPage} = require('../Page-Objects/WomensShoesPage')
const {CheckoutPage} = require('../Page-Objects/CheckoutPage')

 class CommonCode {

   // constructor(page){
     
   //    const homePage = new HomePage(page);
   //    const womensShoesPage = new WomensShoesPage(page);
   //    const checkoutPage = new CheckoutPage(page);
   //    }

// CheckIfCookiesAreDisplayedAndAccept() {

//    //If the cookie pop up appears then click accept cookies
//    HomePage.cookiePopUp.then(($el) => {
//       if ($el.length) {
//          HomePage.cookieButtonHandler.click()
//       }
//    });
// }

// CheckIfSignUpPopUpAppearsAndClose() {
  
//    HomePage.SignUpForUpdatesBanner.then(($el) => {
//       if ($el.length > 0) {
//          HomePage.CloseSignUpUpatesButton.should("be.visible").click()
//       }
//    });
// }

//This would probably make more sense to either be just for main menu or have a switch case in to handle all menu options
//  NavigateToMainMenuAndSelectWomen() {
//    //Click on main menu toggle if displayed
//    HomePage.MainMenu.then(($el) => {
//       if ($el.length) {
//          HomePage.MainMenu.click()
//          HomePage.WomenTopNavButton.click()
//       }
//       //otherwise click directly on to top nav for woman option
//       else {
//          HomePage.WomenTopNavButton.click()
//       }
//    });
// }

// //Select shoe category for women
// SelectCategoryShoes() {

//    HomePage.ShoesCategoryInWomenNav.click()
// }

//Selects all shoes option within shoes category
SelectAllShoesInsideShoeCategory() {
   WomensShoesPage.AllShoes.click()
}

//ChecksUrlBasedofTemplate - this could also live under the WomensShoesPage as it would probably make more sense
// CheckUrlContainsPath(pathTemplate) {
   
//    //Change to use playwright
//    page.url.should("include", pathTemplate)
// }

ClickRandomShoeOption()
{
   //Click on a random product
   //Have just done first shoe for now but would ideally select the list of shoes and do a loop to select a few from the list 
   //if not all to check all work depending on how granual we are looking for.
   WomensShoesPage.ShoeOptionsButton.first().click()
}

async SelectShoeSize(shoesSizes) {
   //this could also be on a seperate page so it could be used for multiple different tests on other areas depdending on wanted usage.
   let randomString = this.RandomSize(shoesSizes);
   let storedSize = randomString
   return storedSize
}

RandomSize(list) {
   let length = list.length;
   let randomNumber = Math.floor(Math.random() * length);
   return list[randomNumber];
}

//This needs refining as not very trust worthy
SelectShoeAndToBag(randomString) {
   WomensShoesPage.ShoeSize.should("be.visible").select(randomString)

   // cy.get('select').select(randomString, { force: true })

}

CheckOutOfStockMessage() {
   //Have assumped most users would maybe try half a side down or up depending on size as per I would. 
   //however, alternative would have been to stop test and throw and exception with '{item} out of stock' 

   WomensShoesPage.OutOfStockMessage.then(($el) => {
      if ($el.length) {
         cy.get('select')
            .select(storedSize - 0.5, { force: true })
      }
   });
}

ClickOnBagToCheckout() {
   //Clicks on bag icon to checkout
   WomensShoesPage.BagIcon.click()
}

SelectCheckoutOption() {
   //Select Checkout
   CheckoutPage.CheckoutButton.click()
}

SelectsSignIn() {
   //Selects sign in 
   CheckoutPage.SignInRadioButton.click();
}

CheckUsernameTextboxDisplayedOnCheckout() {

   //Checks username field is displayed
   //Ideally would want to use a better way of asserting with a throw exception if not displayed so easier to maintain
   CheckoutPage.UsernameTextbox.should("be.visible")
}

CheckPasswordTextboxDisplayedOnCheckout() {
   //Checks password field is displayed
   //Ideally would want to use a better way of asserting with a throw exception if not displayed so easier to maintain
   CheckoutPage.PasswordTextbox.should("be.visible")
   }
}
module.exports = CommonCode;