import { Page, Locator, expect } from '@playwright/test';
import { leerTextoPDF } from '../utils/pdf.utils';

export class PagoPage {
    readonly page: Page;
    readonly selectServicio: Locator;
    readonly monto: Locator;
    readonly confirmarPagoBtn: Locator;
    readonly mensajeExitoso: Locator;
    readonly descargarPdfBtn: Locator;
    readonly montoTexto: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectServicio = page.locator('#service-select');
        this.monto = page.locator('#suggested-amount-text');
        this.confirmarPagoBtn = page.locator('#service-details > button > span.btn-text');
        this.mensajeExitoso = page.locator('.payment-success-msg p');
        this.descargarPdfBtn = page.locator('#download-receipt-pdf');
        this.montoTexto = page.locator('#service-amount');

    }
    async seleccionarServicio(servicio: string) {
        await this.selectServicio.waitFor({ state: 'visible' });
        await this.selectServicio.selectOption(servicio);
        console.log(`Servicio seleccionado: ${servicio}`);

    }
    async validarMontoEsperado(montoEsperado: string) {
        await expect(this.monto).toContainText(montoEsperado);
        console.log(`Monto sugerido es correcto: ${montoEsperado}`);
    }

    async obtenerMonto(): Promise<string> {
        const texto = await this.montoTexto.innerText();
        return texto.trim();
    }

    async confirmarPago() {
        await this.confirmarPagoBtn.click();
        console.log('Pago confirmado');
    }
    async verificarMensajePagoExitoso() {
        const mensaje = await this.mensajeExitoso.textContent();
        expect(mensaje).toContain('Pago Finalizado con éxito');
        console.log(`Mensaje de pago exitoso: ${mensaje}`);

    }
    async verificarBotonDescargarPDFHabilitado() {
        await expect(this.descargarPdfBtn).toBeVisible();
        await expect(this.descargarPdfBtn).toBeEnabled();
        console.log('El boton Descargar PDF esta habilitado');
    }
    async clickDescargarPDF() {
        await this.descargarPdfBtn.click();
        console.log('Descargando comprobante PDF');
    }
    async descargarComprobante() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.descargarPdfBtn.click()
        ]);

        const filePath = await download.path();

        if (!filePath) {
            throw new Error('No se pudo obtener el path del PDF');
        }

        return { filePath, download };
    }

    async validarComprobantePDF(
        filePath: string,
        cliente: string,
        proveedor: string,
        monto: string
    ) {
        const text = await leerTextoPDF(filePath);

        expect(text).toContain(cliente);
        console.log("Usuario capturado:", cliente);
        expect(text).toContain(proveedor);
        expect(text).toContain("Pago por servicio de Internet");
        expect(text).toContain("Pago acreditado");
        console.log(cliente, proveedor);

        // Normalizar monto
        const montoNormalizado = monto.replace(/[^0-9]/g, '');
        const textoNormalizado = text.replace(/[^0-9]/g, '');

        expect(textoNormalizado).toContain(montoNormalizado);
        console.log('Comprobante PDF validado con éxito');

    }

    async obtenerBufferPDF(download: any) {
        const stream = await download.createReadStream();
        const chunks: Buffer[] = [];

        for await (const chunk of stream) {
            chunks.push(chunk);
        }

        return Buffer.concat(chunks);
    }


}