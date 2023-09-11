import puppeteer from "puppeteer";
import path from "path";

(async () => {
    const pathToExtension = path.join(process.cwd(), "my-extension");
    const browser = await puppeteer.launch({
        headless: "new",
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`,
        ],
    });
    const backgroundPageTarget = await browser.waitForTarget(
        (target) => target.type() === "background_page"
    );
    const backgroundPage = await backgroundPageTarget.page();
    // Test the background page as you would any other page.
    await browser.close();
})();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.message === "start_automation") {
        console.log("start_automation");
        // performAutomation(message.data);
    }
});
