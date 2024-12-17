import { expect, type Locator, type Page } from '@playwright/test'
import{url, credentials, apiEndpoint} from '../utils/globals'
import { waitForResponse } from '../utils/waitResponse';

export class Dashboard{
    readonly page: Page;
    private readonly clickbutton: Locator;

    constructor(page:Page){
        this.page = page;
        this.clickbutton = page.locator('a.oxd-main-menu-item[href="/web/index.php/recruitment/viewRecruitmentModule"]');

    }

    async clickButtonToViewRecruitment () {
        await this.clickbutton.click()
        await waitForResponse(this.page,apiEndpoint.WORKWEEK)
    }

}