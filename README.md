### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.
To start the app : npm start
url host locally : http://localhost:4200/
clone the repo:
install dependencies: npm install
install browsers : npx playwright install
run UI = npx playwright test --project=chromium --ui
run first headed = npx playwright test --project=chromium -y "first test" -- headed
run with tracer= npx playwright test --project=chromium --traceon
run codegen( recorder)= npx playwright codegen --http://localhost:4200/

