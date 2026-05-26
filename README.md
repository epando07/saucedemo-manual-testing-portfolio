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









# TEST-01: Verify successful login with valid credentials

## Preconditions:
- User is on the login page (https://www.saucedemo.com/)

## Test Steps:
1. Enter 'standard_user' into the Username field.
2. Enter 'secret_sauce' into the Password field.
3. Click the 'Login' button.

## Expected Result:
- User is successfully redirected to the inventory page (`/inventory.html`).
- The "Products" header is visible.
---


# TEST-02: Verify unsuccessful login with invalid credentials

## Preconditions:
- User is on the login page (https://www.saucedemo.com)

## Test Steps:
1. Enter 'standarduser_' into the Username field.
2. Enter 'secret_sauce' into the Password field.
3. Click the 'Login" button.

## Expected Result:
- User is denied and login error message pops up (#login_button_container > div > form > div.error-message-container.error)
- Error message ("Epic sadface: Username and password do not match any user in this service")


# TEST-03: Verify User is locked out with username 'locked_out_user'

## Preconditions:
- User is on the login page (https://saucedemo.com)

## Test Steps:
1. Enter 'locked_out_user' into the Username field.
2. Enter 'secret_sauce" into the password field.
3. Click 'login' button.

## Expected Results:
- users is denied and login error message pops up (#login_button_container > div > form > div.error-message-container.error)
- error message (Epic sadface: Sorry, this user has been locked out.)


# TEST-04: Adding an item to cart (verify the cart badge updates to "1")

## Preconditions:
- User is logged in and on the Products landing page (https://www.saucedemo.com/inventory.html)

## Test Steps: 
1. Enter username and password into the username and password field (saucedemo.com)
2. Click 'login'
3. Redirected to products page
3. Add a product from the products page 
4. Click 'Add to cart'

## Expected Result:
- Cart badge in top right corner updates to 1 (#shopping_cart_container > a > span) (<span class="shopping_cart_badge" data-test="shopping-cart-badge">1</span>)

# TEST-05: Completing the checkout form with a first name, last name, and postal code (verify you reach the "Checkout: Complete!" page)

## Preconditions:
- User is logged in and added product to the cart

## Test Steps:
1. entered username and password into login fields and clicked login (saucedemo.com)
2. Redirected to products page (https://www.saucedemo.com/inventory.html)
3. Add product to cart 'click add to cart'
4. Click cart badge
5. redirected to cart (https://www.saucedemo.com/cart.html)
6. Click 'checkout' button.
7. enter valid information into 'First name, Last name , and Zip/Postal code' field
8. Click 'Continue' Button
9. Redirected to 'Checkout:Overview" page (https://www.saucedemo.com/checkout-step-two.html)
10. Click 'Finish' Button
11. Redirected to 'Checkout:Complete!' Page 
12. Check out complete text is visible 'Thank you for your order!' (#checkout_complete_container > h2)
