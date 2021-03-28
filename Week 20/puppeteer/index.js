const puppeteer = require('puppeteer');

(async ()=>{
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.zhihu.com/sdfsdfsdfsdfsdfsf')
  let oops = await page.$eval('.ErrorPage-subtitle', node => node.innerText)
  console.log(oops)
})()