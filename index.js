const puppeteer = require('puppeteer');
const $ = require('cheerio')
const CronJob = require('cron').CronJob;
const nodeemailer = require('nodemailer');


const url = "https://www.amazon.co.uk/Apple-Airpods-Charging-latest-Model/dp/B07PZR3PVB/";


async function configure(){
    const browser = await puppeteer.launch({headless:false});
    const page = await puppeteer.newPage();
    await page.goto(url);
}

