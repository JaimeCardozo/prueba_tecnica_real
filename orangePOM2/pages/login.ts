import { expect, type Locator, type Page } from '@playwright/test'
import{url, credentials, apiEndpoint} from '../utils/globals'
import { waitForResponse } from '../utils/waitResponse';

export class Login{
    readonly page: Page;
    private readonly user: Locator;
    private readonly password: Locator;
    private readonly clickbutton: Locator;

    constructor(page:Page){
        this.page = page;

        this.user = page.locator('[name="username"]')
        this.password = page.locator('[name="password"]')
        this.clickbutton = page.getByRole('button',{name: 'Login'})

    }

    async loginSuccessful() {
        await this.page.goto(url.URL_LOGIN)
        await this.user.fill(credentials.USER_NAME)
        await this.password.fill(credentials.PASSWORD)
        await this.clickbutton.click()
        await waitForResponse(this.page,apiEndpoint.LOCATION)
    }

}
