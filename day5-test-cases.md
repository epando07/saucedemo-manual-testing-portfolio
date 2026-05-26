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
