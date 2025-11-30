This is a reproduction repository for a VSCode Vitest Extension bug.

# Description

Vitest is setup for multiple projects using (https://vitest.dev/guide/projects)[https://vitest.dev/guide/projects]. This repo only has a single project to keep it simple.

The project is configured to use a headless browser to perform the tests in.

The tests complete successfully via either `npm run test` or clicking the `Play` button in the VSCode tests panel.

The bug happens when I set a breakpoint in the `add` test in `math.test.ts` line `6`, and attempt to click the `Debug Test` button for the test.

The test runs, and reports a success result, but never breaks into the debugger. I eventually after a timeout recieve an error saying `Cannot connect to the target at localhost:9229: Could not connect to debug target at http://localhost:9229: Could not find debuggable target` from VSCode.