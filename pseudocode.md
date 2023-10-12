# Team Profile Generator Notes + Pseudocode
✓ Install packages and dependencies needed
    ✓ Inquirer
    ✓ Jest

**Writing in ``index.js``**
- When user starts the application they are prompted to enter the team manager's
    - name
    - employee ID
    - email address
    - office number

- When user enters the requirements the user is presented with a menu with options to
    - Add an engineer
    - Add an intern
    - Finish building the team

- When user selects the engineer option, the user is then prompted to enter the following and then the user is taken back to the menu
    - Engineer's name
    - ID
    - Email
    - GitHub username

- When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu
    - Intern's name
    - ID
    - Email
    - School

- When a user decides to finish building their team, then they exit the application and the HTML is generated

- Calling the ``render`` function provided and pass in an array containing all employee objects
    - The ``render`` function will generate and return a block of HTML including templated divs for each employee

- Create an HTML file using the HTML returned from the render function
    - Write it to a file named ``team.html`` in the output folder
    - You can use the provided variable ``outputPath`` to target this location.


## Test 
- ✓ First class is an ``Employee`` parent class with following properties and methods
    - name
    - id
    - email
    - getName()
    - getId()
    - getEmail()
    - getRole() - returns ``**'Employee'**``

- ✓ Other three classes will extend Employee

- ✓ ``**Manager**`` will also have following properties and methods
    - officeNumber
    - getRole() - overridden to return ``**'Manager'**``

- ✓ ``**Engineer**`` will also have 
    - github - GitHub username
    - getGithub()
    - getRole() - overridden to return ``**'Engineer'**``

- ✓ ``**Intern**`` will also have the following
    - school
    - getSchool()
    - getRole() - overridden to return ``**'Intern'**``

- ✓✓ Add validation to ensure user input is in the proper format

