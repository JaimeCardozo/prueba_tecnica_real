import {expect, type Locator, type Page } from '@playwright/test'
import{url, credentials, candidates, apiEndpoint, uploads, interview} from '../utils/globals'
import { waitForResponse } from '../utils/waitResponse';
import path from 'path';
import { time } from 'console';

export class Recruitment{
    readonly page: Page;
    private readonly buttonAdd: Locator;
    private readonly firtsName: Locator;
    private readonly middleName: Locator;
    private readonly lastName: Locator;
    private readonly vacancy: Locator;
    private readonly vacancySelect: Locator;
    private readonly email: Locator;
    private readonly contactNumber: Locator;
    private readonly resumeFile: Locator;
    private readonly keywords: Locator;
    private readonly applicationDate:Locator;
    private readonly applicatioDay:Locator;
    private readonly notes: Locator;
    private readonly consentToKeepData: Locator;
    private readonly buttonSave: Locator;
    private readonly buttonShorlist: Locator;
    private readonly notes2: Locator;
    private readonly buttonSchedule: Locator;
    private readonly interviewTitle: Locator;
    private readonly interviewer: Locator;
    private readonly interviewerOption: Locator;
    private readonly date: Locator;
    private readonly time: Locator;
    private readonly buttonMarkInterviewPassed: Locator;
    private readonly buttonOfferJob: Locator;
    private readonly buttonHire: Locator;
    private readonly textHire: Locator;

    constructor(page:Page){
        this.page = page;
        
        this.buttonAdd = page.locator('button:has-text("Add")')
        this.firtsName = page.locator('[name="firstName"]')
        this.middleName = page.locator('[name="middleName"]')
        this.lastName = page.locator('[name="lastName"]')
        this.vacancy = page.locator('div.oxd-select-text.oxd-select-text--active')
        this.vacancySelect = page.getByRole('option', { name: 'Payroll Administrator' })
        this.email = page.getByPlaceholder('Type here').nth(0)
        this.contactNumber = page.getByPlaceholder('Type here').nth(1)
        this.resumeFile = page.locator('input.oxd-file-input')
        this.keywords = page.locator('input[placeholder="Enter comma seperated words..."]')
        this.applicationDate = page.locator('input.oxd-input--active').nth(6)
        this.applicatioDay = page.getByText('16')
        this.notes = page.getByPlaceholder('Type here').nth(2)
        this.consentToKeepData = page.locator('span.oxd-checkbox-input--active')
        this.buttonSave = page.locator('button:has-text("Save")')
        this.buttonShorlist = page.locator('button:has-text("Shortlist")')
        this.notes2 = page.getByPlaceholder('Type here')
        this.buttonSchedule = page.locator('button:has-text("Schedule Interview")')
        this.interviewTitle = page.locator('div:nth-child(2) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.interviewer = page.getByPlaceholder('Type for hints...')
        this.interviewerOption = page.getByRole('option', { name: 'Ranga Akunuri' })
        this.date = page.locator('form i').nth(1)
        this.time = page.locator('form i').nth(2)
        this.buttonMarkInterviewPassed = page.locator('button:has-text(" Mark Interview Passed")')
        this.buttonOfferJob = page.locator('button:has-text(" Offer Job ")')
        this.buttonHire = page.locator('button:has-text(" Hire ")')
        this.textHire = page.locator('p.oxd-text.oxd-text--subtitle-2', { hasText: 'Status: Hired' });
    }

    async clickButtonToAdd () {
        await this.buttonAdd.click()
        await waitForResponse(this.page,apiEndpoint.WORKWEEK)
    }

    async createCandidate(){
        await this.firtsName.fill(candidates.FIRST_NAME)
        await this.middleName.fill(candidates.MIDDLE_NAME)
        await this.lastName.fill(candidates.LAST_NAME)
        await this.vacancy.click()
        await this.vacancySelect.click()
        await this.email.fill(candidates.EMAIL)
        await this.contactNumber.fill(candidates.CONTACT_NUMBER)
        const filePath = path.resolve(__dirname, uploads.resume_pdf);
        await this.resumeFile.setInputFiles(filePath)
        await this.keywords.fill(candidates.KEYWORDS)
        await this.applicationDate.click()
        await this.applicatioDay.click()
        await this.notes.fill(candidates.NOTES)
        await this.consentToKeepData.click()
        await this.buttonSave.click()
        await waitForResponse(this.page,apiEndpoint.WORKWEEK)
        
    }

    async clickButtonShorlist(){
        await this.buttonShorlist.click()      
       
    }

    async saveNext(){
        await this.notes2.fill(candidates.NOTES)
        await this.buttonSave.click()
        await waitForResponse(this.page,apiEndpoint.WORKWEEK)
    }

    async clickbuttonScheduleInterview(){
        await this.buttonSchedule.click()
        await waitForResponse(this.page, apiEndpoint.WORKWEEK)    
    }

    async SchuleInterview(){
        await this.page.waitForTimeout(100)
        await this.interviewTitle.fill(interview.INTERVIEW_TITLE)
        await this.interviewer.fill(interview.INTERVIEWER)
        await this.interviewerOption.click()
        await this.date.click()
        await this.applicatioDay.click()
        await this.time.click()
        await this.notes2.fill(candidates.NOTES)
        await this.buttonSave.click()
        await waitForResponse(this.page,apiEndpoint.WORKWEEK)
    }

    async clickbuttonMarkInterviewPassed(){
        await this.buttonMarkInterviewPassed.click()
    }


    async clickOfferJob(){
        await this.buttonOfferJob.click()
        
    }

    async clickHire(){
        await this.buttonHire.click()
    }

    async validateHire(){
        await expect(this.textHire).toBeVisible()
    }

}