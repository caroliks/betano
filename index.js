const puppeteer = require('puppeteer');

(async () => {

    let movieUrl = 'https://ro.betano.com/league/Soccer-FOOT/Liga-1-Romania-17088';

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(movieUrl , { waitUntil: 'networkidle2' });

    let data = await page.evaluate(() => {
        //liga 1                                            https://ro.betano.com/league/Soccer-FOOT/Liga-1-Romania-17088
        // meci 1 
        let cota1 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > a").innerText; 
        let cota2 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").innerText;
        let cota3= document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").innerText;
        //meci 2 
        let cota4 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a").innerText;
        let cota5 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a").innerText;
        let cota6 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a").innerText;
        //meci 3
        let cota7 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > a").innerText;
        let cota8 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > a").innerText;
        let cota9 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(4) > a").innerText;
        //meci 4
        let cota10 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > a").innerText;
        let cota11 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(3) > a").innerText;
        let cota12 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(4) > a").innerText;
        //meci 5 
        let cota13 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").innerText;
        let cota14 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(3) > a").innerText;
        let cota15 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(4) > a").innerText;
        //meci 6
        let cota16 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > a").innerText;
        let cota17 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(3) > a").innerText;
        let cota18 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(6) > td:nth-child(4) > a").innerText;
        //meci 7
        let cota19 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(2) > a").innerText;
        let cota20 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(3) > a").innerText;
        let cota21 = document.querySelector("#js-layout-mainholder > div.content > div > div.category > div:nth-child(2) > div.category-body.js-league-body > div > div > div > table > tbody > tr:nth-child(7) > td:nth-child(4) > a").innerText;



        return {
            cota1,
            cota2,
            cota3,
            cota4,
            cota5,
            cota6,
            cota7,
            cota8,
            cota9,
            cota10,
            cota11,
            cota12,
            cota13,
            cota14,
            cota15,
            cota16,
            cota17,
            cota18,
            cota19,
            cota20,
            cota21

        }
    });
    
 console.log(data);

 debugger;

 await browser.close();
})();

