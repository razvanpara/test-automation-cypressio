# This is a web test framework POC using Cypress.io

### Requirements:
- node js 

## Test cases:
All test cases are using [selenium base demo page](https://seleniumbase.io/demo_page) as the application under test

### Tests:
---
- Text Input Field Accepts Input
    - Go to the webpage
    - Enter text 'Hello World' into the text input
    - Assert that the input field's value is equal to 'Hello World'
---
- Select Dropdown Can Select
    - Go to the webpage
    - Select the option with value '50%'
    - Assert that:
    - The selected option text contains '50%'
    - The meter value is the '0.5'
--- 
- Button Color Changes On Click
    - Go to the webpage
    - Assert that the button's colour is 'green'
    - Click the button
    - Assert that the button's colour is 'purple'
---
- Drag And Drop Test
    - Go to the webpage
    - Click the checkbox that enables the draggable elements
    - Drag the element
    - Assert that the element's coordinates have changed on the page
