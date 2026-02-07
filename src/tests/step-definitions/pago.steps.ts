import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('que el usuario inició sesión como {string} con la contraseña {string}', async function (this: CustomWorld, username: string, password: string) {
  await this.homePage.goTo();
  await this.loginPage.loginUser(username, password);
  await this.homePage.tituloHome();
});

Given('navega a la sección Pago de Servicios', async function (this: CustomWorld) {
  this.usuario = await this.homePage.obtenerUsuario();
  await this.homePage.navegarPagoServicios();
  await this.homePage.verificarDashboardPagoServicios();
});

When('selecciona el servicio {string}', async function (this: CustomWorld, servicio: string) {
  this.servicio = servicio;
  await this.pagoPage.seleccionarServicio(servicio);
});

Then('visualiza el monto {string}', async function (this: CustomWorld, montoEsperado: string) {
  this.monto = await this.pagoPage.obtenerMonto();
  
});

When('confirma el pago', async function (this: CustomWorld) {
  await this.pagoPage.confirmarPago();
});

Then('se muestra un mensaje de pago exitoso', async function (this: CustomWorld) {
  await this.pagoPage.verificarMensajePagoExitoso();
});

Then('se habilita el botón Descargar PDF', async function (this: CustomWorld) {
  await this.pagoPage.verificarBotonDescargarPDFHabilitado();
});

Then('el comprobante PDF se genera con los datos correctos', async function (this: CustomWorld) {
  const { filePath, download } = await this.pagoPage.descargarComprobante();
  await this.pagoPage.validarComprobantePDF(
    filePath,
    this.usuario,
    'Fibertel',
    this.monto
    );
  const pdfBuffer = await this.pagoPage.obtenerBufferPDF(download);
  await this.attach(pdfBuffer, 'application/pdf');
});

