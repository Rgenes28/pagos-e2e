import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-btn');
    }

    async fillUser(username: string) {
        await this.usernameInput.fill(username);
    }
    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }
    async submit() {
        await this.loginButton.click();
        console.log('Se ha enviado el formulario de inicio de sesion');
    }
}