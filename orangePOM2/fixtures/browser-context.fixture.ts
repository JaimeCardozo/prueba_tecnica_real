import { chromium, BrowserContext } from '@playwright/test';
import path from 'path';

export async function createBrowserContext(): Promise<BrowserContext> {
    const userDataDir = '/tmp/test-user-data-dir';
    
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
            `--auto-open-devtools-for-tabs`,
        ],
    });

   
    return context;
}