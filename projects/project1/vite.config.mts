/// <reference types="vitest" />


import { playwright } from '@vitest/browser-playwright';
import { defineProject, UserWorkspaceConfig } from 'vitest/config';
export default defineProject(({ mode }) => {
  const config: UserWorkspaceConfig =  {
    test: {
      name: 'project1',
      browser: {
        provider: playwright({
          contextOptions: {
            viewport: { width: 1920, height: 1080 }
          }
        }),
        enabled: true,
        headless: true,
        ui: false,
        instances: [
          { browser: 'chromium' }
        ],
        viewport: { width: 1920, height: 1080 },
        screenshotFailures: false,
      },
      include: ['**/*.test.ts'],
    }
  };

  return config;
});
