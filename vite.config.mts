/// <reference types="vitest" />

import { playwright } from '@vitest/browser-playwright';
import { UserConfig } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const projectConfig: UserConfig = {
    test: {
      projects: [
        //     // 'projects/*',
        {
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
        }
      ],
    }
  };

  ///
  // This triggers the bug.
  //
  return projectConfig;

  //
  // This config works as expected, but the project-based config above does not.
  //
  const singleConfig: UserConfig = {
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

  //
  // This works as expected.
  //
  return singleConfig;
});
