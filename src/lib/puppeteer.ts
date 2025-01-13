import puppeteer from "puppeteer";

export const getCarPageHTML = async (regNumber: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  // Navigate to the specified URL
  await page.goto("https://biluppgifter.se/", {
    waitUntil: "domcontentloaded",
  });

  // Type the registration number into the form
  await page.type('input[id="query"]', regNumber);

  // Simulate pressing 'Enter' to submit the form
  await page.keyboard.press('Enter');

  // Wait for navigation to the results page
  await page.waitForNavigation({
    waitUntil: "domcontentloaded",
  });

  // Extract and clean the text content of the specified sections
  const sectionsText = await page.evaluate(() => {
    const extractText = (selector: any) => {
      const element = document.querySelector(selector);
      return element ? element.textContent.trim() : '';
    };

    return {
      summary: extractText('section#summary'),
      vehicleData: extractText('section#vehicle-data'),
      technicalData: extractText('section#technical-data'),
    };
  });

  // Close the browser
  await browser.close();

  return sectionsText;
};

// Example usage
