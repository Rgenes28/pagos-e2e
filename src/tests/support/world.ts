import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { PagoPage } from '../pages/pago.page';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  homePage!:HomePage;
  pagoPage!:PagoPage;
  usuario!: string;
  monto!: string;
  servicio!: string;


    
  async init() {
    this.browser = await chromium.launch({ headless: true}); 
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.pagoPage = new PagoPage(this.page);
  }

  async cleanup() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
