import { PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    reporter: "./reporter.ts",
    use: {
        headless: true,
        viewport: { width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "on-first-retry", 
        screenshot: "only-on-failure",
        trace: "retry-with-trace"
        
    },
    projects: [
        {
            name: "chromium",
            use: { browserName: "chromium" },
        },
        {
            name: "firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "webkit",
            use: { browserName: "webkit" },
        },
    ]
}

export default config