import { Page, Response } from '@playwright/test';

/**
 * Espera una respuesta HTTP específica basada en condiciones.
 * @param page - La página de Playwright donde se escucha la respuesta.
 * @param urlFragment - Parte de la URL que identifica la respuesta (puede ser parcial).
 * @param expectedStatus - El código de estado esperado (por defecto 200).
 * @returns La respuesta que cumple con los criterios o lanza un error si no se encuentra dentro del tiempo de espera predeterminado.
 */
export async function waitForResponse(
  page: Page,
  urlFragment: string,
  expectedStatus: number = 200
): Promise<Response> {
  return await page.waitForResponse(response => 
    response.url().includes(urlFragment) && response.status() === expectedStatus
  );
}