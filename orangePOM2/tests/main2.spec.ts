import { test as base, expect,type BrowserContext } from '@playwright/test';
import { Login } from '../pages/login';
import { createBrowserContext } from '../fixtures/browser-context.fixture';
import { Dashboard } from '../pages/dashboard';
import { Recruitment } from '../pages/recruitment';
import { waitForResponse } from '../utils/waitResponse';
import { apiEndpoint } from '../utils/globals';

export const test = base.extend<{
    context: BrowserContext;
}>({
    context: async ({}, use) => {
        const context = await createBrowserContext();
        await use(context);
        await context.close();
    }
});

test('Recruitment', async ({context}) => {
    const pageOrange = await context.newPage();
    const login = new Login(pageOrange);
    await login.loginSuccessful();
    const dashboard = new Dashboard(pageOrange);
    await dashboard.clickButtonToViewRecruitment();
    const recruitment = new Recruitment(pageOrange);
    await recruitment.clickButtonToAdd()
    await recruitment.createCandidate()
    await recruitment.clickButtonShorlist()
    await recruitment.saveNext()
    await recruitment.clickbuttonScheduleInterview()
    await recruitment.SchuleInterview()
    await recruitment.clickbuttonMarkInterviewPassed()
    await recruitment.saveNext()
    await recruitment.clickOfferJob()
    await recruitment.saveNext()
    await recruitment.clickHire()
    await recruitment.saveNext()
    await pageOrange.pause()
})
