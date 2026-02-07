import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly heading: Locator;
    readonly pagoServiciosBtn: Locator;
    readonly pagosDashboard: Locator;
    readonly userName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { level: 2, name: 'Panel Principal' });
        this.pagoServiciosBtn = page.locator('#app-view > div > aside > ul > li:nth-child(5) > span')
        this.pagosDashboard = page.getByRole('heading', { level: 2, name: 'Pago de Servicios' });
        this.userName = page.locator('#user-name');
    }
    async goTo(){
        console.log('BASE_URL:', process.env.BASE_URL);
        await this.page.goto(process.env.BASE_URL!);
    }

    async tituloHome(){
        await expect(this.heading).toBeVisible();
        console.log('El titulo del home es visible');
    }
    async obtenerUsuario(): Promise<string> {
        const nombreUsuario = await this.userName.textContent();
        console.log(`Usuario logueado: ${nombreUsuario}`);
        return nombreUsuario?.trim() || '';
    }
    async navegarPagoServicios(){
        await this.pagoServiciosBtn.click();
        console.log('Navegando a la seccion Pago de Servicios');
    }
    async verificarDashboardPagoServicios(){
        await expect(this.pagosDashboard).toBeVisible();
        console.log('El dashboard de Pago de Servicios es visible');
    }


}