import dotenv from 'dotenv';

dotenv.config();


import { After, Before } from "@cucumber/cucumber";

Before(async function () {
  
  await this.init();
  console.log('Se ha inicializado el navegador y la pagina');
});

After(async function () {
  await this.cleanup();
});

