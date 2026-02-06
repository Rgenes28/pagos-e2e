import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login.page';
import { CustomWorld } from '../support/world';
import { HomePage } from '../pages/home.page';

Given('el usuario se encuentra en la pagina de inicio de sesion', async function (this: CustomWorld) {
    this.homePage = new HomePage(this.page);
    await this.homePage.goTo();
});


When('ingresa el usuario {string}', async function (this: CustomWorld, string) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.fillUser(string);
});


When('ingresa la contrasena {string}', async function (this: CustomWorld, string) {
    await this.loginPage.fillPassword(string);
});


When('confirma el inicio de sesion', async function (this: CustomWorld) {
    await this.loginPage.submit();
    await this.homePage.tituloHome();

});

When('navega a la seccion Pago de Servicios', async function (this: CustomWorld) {
    this.usuario = await this.homePage.obtenerUsuario();
    await this.homePage.navegarPagoServicios();
    await this.homePage.verificarDashboardPagoServicios();
});

When('selecciona el servicio {string}', async function (this: CustomWorld, servicio: string) {
    this.servicio = servicio;
    await this.pagoPage.seleccionarServicio(servicio);

});

When('visualiza el monto {string}', async function (this: CustomWorld, monto: string) {
    this.monto = await this.pagoPage.obtenerMonto();

});


When('confirma el pago', async function (this: CustomWorld) {
    await this.pagoPage.confirmarPago();
});

Then('se muestra un mensaje de pago exitoso', async function (this: CustomWorld) {
    await this.pagoPage.verificarMensajePagoExitoso();

});

Then('se habilita el boton Descargar PDF', async function (this: CustomWorld) {
    await this.pagoPage.verificarBotonDescargarPDFHabilitado();
    await this.pagoPage.clickDescargarPDF();
});

Then('el comprobante PDF se genera con los datos correctos', async function () {
    const { filePath, download } =
        await this.pagoPage.descargarComprobante();

    await this.pagoPage.validarComprobantePDF(
        filePath,
        this.usuario,
        "Fibertel",  
        this.monto
    );

    const pdfBuffer =
        await this.pagoPage.obtenerBufferPDF(download);

    await this.attach(pdfBuffer, 'application/pdf');
});

