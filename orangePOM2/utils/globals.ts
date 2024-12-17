import dotenv from 'dotenv'
dotenv.config();

export const url = {
    URL_LOGIN: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' 
}

export const credentials = {
    USER_NAME: 'Admin',
    PASSWORD: 'admin123'
}

export const candidates = {
    FIRST_NAME: 'JUAN',
    MIDDLE_NAME:'JOSE',
    LAST_NAME: 'JOESTAR',
    EMAIL:'correo@email.co',
    CONTACT_NUMBER: '1557784',
    KEYWORDS:'Secret word',
    NOTES: 'Notes about candidate',
}

export const apiEndpoint = {
    LOCATION: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
    WORKWEEK: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
    INTERVIEWERS: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/interviewers?nameOrId=a'
}

export const uploads ={
    resume_pdf: '../uploads/Documento 3.pdf' 
}

export const interview ={
    INTERVIEW_TITLE: 'Technical Interview - QA',
    INTERVIEWER: 'Ranga  Akunuri'

}