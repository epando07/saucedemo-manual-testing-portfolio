# saucedemo-manual-testing-portfolio
This repository contains my manual testing artifacts, exploratory notes, and bug reports for the SauceDemo web application as part of my QA engineering skill rebuilding program





















# BUG-01: Login fails with generic error when using uppercase locked-out username

## Environment:
- **OS:** [e.g., Windows 11 / macOS]
- **Browser:** Google Chrome (Latest Version)
- **URL:** https://www.saucedemo.com/

## Description:
When attempting to log in with a valid locked-out username typed in all capital letters, the system does not recognize the user status and throws a generic "does not match" error instead of the specific "locked out" error.

## Steps to Reproduce:
1. Navigate to https://www.saucedemo.com/
2. Type 'LOCKED_OUT_USER' into the Username field.
3. Type 'secret_sauce' into the Password field.
4. Click the 'Login' button.

## Expected Result:
The system should normalize the text or recognize the account status and display: *"Epic sadface: Sorry, this user has been locked out."*

## Actual Result:
The system displays: *"Epic sadface: Username and password do not match any user in this service."*

# BUG-02: Login username/password fail with error text shows the text cut off 

## Enviroment:
- **OS:** windows 11
- **Browser:** Google chrome (Latest version)
- **URL:** https://www.saucedemo.com/

## Description:
When attempting to login with invalid username or password, the login error messages text appears partially cut off and when clicking on the inspect feature it minimizes the browser window which fixes the text cut off to make it appear normal

## Steps to Reproduce:
1. Navigate to https://www.saucedemo.com/
2. Type incorrect login eg. 'lockedout' into the username field.
3. Type 'secret_sauce" into password field.
4. Click the 'Login' button.
5. Right click webpage
6. Click 'Inspect'

## Expected Result: 
The text font should be slightly cut off 

## Actual Result:
when inspect window opens and the webpage minimizes the username error text isnt cut off anymore and resorts to normal
