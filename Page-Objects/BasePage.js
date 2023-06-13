const baseUrl = 'https://uk.burberry.com/';
const { expect } = require('@playwright/test');

 class BasePage {

    constructor(page) {
      this.page = page;
    }

async navigate(path){
    await this.page.goto(baseUrl+path)
}

}

exports.BasePage = BasePage;