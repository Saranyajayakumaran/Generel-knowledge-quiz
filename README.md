# GK GENERAL KNOWLEDGE QUIZ


This quiz game is designed to challenge and expand your understanding across a wide range of topics.The main aim is to make learning fun and accessible for users of all ages and interests. 
the user can expand your knowledge in various topics.

The website is responsive on a screens




## Features

### Technologies
- HTML
    - Html is used to design the basic sructure of the Game.
- Css
    - The game is styled with many css propeties in a external css file.
- Javascript
    - Javascript is used to make the game user interactive.
- GitHub
    - GitHub is used to store and manage the code and deploy the code with git pages.
- Git 
    - Git is used to commit and push code from the development Interface.

### Existing Features

- HomePage 
    - The home page shows the Title of the quiz and a start quiz button.
    - Title
        - The title of the quiz showed as a block with the logo of the quiz game.
    - Start button
        - When user clicks the start button it navigates to the instruction section of the page.

- Game information Section
    - This section contains the title of the quiz , user name input, game instruction, continue button and a exit button
    - User Name input
        - The field get the name of the user o show in the welcome alert and in the score section.
    - Instruction
        - The filed contains the instruction to the user before starting the game.
    - Continue button
        - Continue button will navigate to the Game section when user enters the name and click continue.
    -Exit button
        - Exit button will navigate to home page and refresh the name input if the user given the name already.

- Game section
    - The game section contains the questions with options,next button and also the time line for each question.
    - Time line
      - Time line is used to dispaly the time for each each question.
    - Question and answer
      - Each question have 4 options and 15 sec time.
      - The questions will always different as e code select randomm question from quiz data array.
    - Next button
        - It provides a way to to go to next question when user selects the answer before 15 seconds.

- Score section
    - The score section contains the actual score of the user and give a feed back based on the score
    - Resart Game button
        - This button helps the user to play the game again if they are interested.

### Features left to Implement

 - Add more field for quiz that user can choose like sport,science etc
 - When user select the option timer also can be stopped.


### How the Game works 

- Step 1: Click start quit Button.
- Step 2: The start button navigates to game info section.
- Step 3: User should enter the name before starting the Game(Name can only contain alphabets, period (.) and Space).
- Step 4: When user clicks continue button the Game section will schow the first question with 4 options.
- Step 5: When user clicks exit button it navigate to home page.
- Step 6: Each qustion wil have 15 mins time to select the option
- Step 7: User can select only one option then all the other options will be disabled.
- step 8: If user select correct option the score will be increased to 1.
- Step 9: if the user clicks the wrong answer the score will be same.
- Step 10: The correct answer will be shown in green colour.
- Step 11: If user clicks the wrong answer it will show in red colour and also show the correct answer in green.
- Step 12: when User clicks next button it will go to next question.
- Step 13: When the question reaches 10 it will show the score out of 10 and feedback based on the score.
- Step 14: User can restart the game by clicking the Restart game button.


### Design
#### Flow chart
#### Wireframes



### Testing

#### Responsiveness

- I tested that this website is working in different browsers: Chrome, Firefox ,Safari.
- I confirmed that the project is responsive,looks good and functions on all standard screen size using the devtools device toolbar.
- I confirmed that all the blocks Home page, game info and name input, question and option section and score section are all readable and easy to understand.

#### Functional Testing

| Action  | Expected Result | Pass/Fail|

|Enter Home Page URL| Open the home Page| Pass|
|Click the Start Quiz Button| Display Game info section| Pass|
|Leave the input name blank and click continue|Alert(Enter your name before starting the game)|Pass|
|Type the name with special character and number|Alert(Give a valid name)|Pass|
|Type the valid Username and click continue| Alert Quiz started |Pass|
|Click ok in alert|Go to Game section and show first question with timer|Pass|
|Click ok in alert|Pick random question from array|Pass|
|Click Exit in game info section|Go to home page|Pass|
|Leave all the question without selecting any option|Automatically go to next question till 10 th question after 15 seconds|Pass|
|Click the correct option| Option should show in green colour|Pass|
|Click any Option|Options should disabled|Pass|
|Click the wrong answer|Wrong answer should be shown in red colour and also show the correct answer in green|
|Click any option and click next|go to next question|Pass|
|Click next in 10th Question|Go to Score section|Pass|
|If score less than 5| Give feedback (you can improve next time)|Pass|
|If score greater or equal to 5|Give feedback (Great job,Keep it up)|Pass|
|Click restart button|Reset all the details|Pass|
|Replay the game|Get new name input|Pass|
|Go to game section|Not repeating the questions in same order|Pass|

 
### Bugs

#### Solved Bugs
- The input section allows all the character as input. I wanted it only alphabets ,period(.) and space.
   solved the bug by checking the input  in javascript continue with username function.
- The timer was not resetting wen clicking the next question. solved the problem using clearinterval library function.
- The user input and score was not resetting when playing the game again . Solved the issue by resetting all the uI elements and variables in resetQuiz function.
- Coudnt print the score area line by line and added the lines in Html itself ans solved the bug.

### Validator Testing

#### Fixed Bugs 
- HTML
    - Missed some end tag when passing through the official W3C validator
    - Resolved it and again tested : No error found.
- CSS

    - Missed some semicolon when passing through CSS validator.
    - Resolved it and again tested : No error found.

- JavaScript
    - Missed some semicolon and colosing brackets.
    - Had some unused UI elements.
    -   Resolved it and again tested : No error found.

### Accessibility

I confirmed that the color and fonts choosen are easy to read and accessible by running it through lighthouse in devtools.

- Unfixed Bugs
    - A waring in the Javascript is not fixed because it wll not create any problem in this project.
    

### Deployment

#### Version Control
- The game is created using VS code IDE and commited and pushed to gitub using git.
- The commands used to push code to remote repository are:
    - git add .
    - git commit -m "..."
    - git push
    - git diff


#### Deployment to Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
    
    - In the GitHub repository,navigate to the settings tab.
    
    - Select the Pages from Code and automation menu.
    
    - Then give the default branch to main.
    
    - The page provides the link to complete website.

#### Clone the Repository Code Locally

- The steps to deploy are as follows:

    - In the GitHub repository click code tab and copy the URL of repository.
    - Open command prompt in the local computer and type git clone and paste the URL of GitHub repository. "git clone https://github.com/Saranyajayakumaran/Happy-Yoga.git"
    - The repository will be deployed in loco machine.
    - We can check the directory using "dir" command in command prompt.

### Credits

- Content











