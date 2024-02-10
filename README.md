# ![Alt text](https://raw.githubusercontent.com/Saranyajayakumaran/Generel-knowledge-quiz/main/assets/images/favicon.ico) GENERAL KNOWLEDGE QUIZ

Join us for a fun and educational adventure! Our quiz game is designed to challenge your knowledge across various topics, making learning enjoyable and accessible for all ages. Expand your understanding while having a great time!

The website is responsive on all screens

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/RESPONSIVE.png)


### Technologies Used
- HTML
    - Html is used to design the basic structure of the Game.
- Css
    - The game is styled with many css propeties in a external css file.
- Javascript
    - Javascript is used to make the game user interactive.
- GitHub
    - GitHub is used to store and manage the code and deploy the code with git pages.
- Git 
    - Git is used to commit and push code from the development Interface.

## Features

### Existing Features

#### HomePage 
 - The home page shows the Title of the quiz and a start quiz button.
    - Title
        - The title of the quiz showed as a block with the logo of the quiz game.
    - Start button
        - When user clicks the start button it navigates to the instruction section of the page.

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%201.png)

#### Game information Section
- This section contains the title of the quiz , user name input, game instruction, continue button and a exit button
    - User Name input
        - The field get the name of the user o show in the welcome alert and in the score section.
    - Instruction
        - The field contains the instruction to the user before starting the game.
    - Continue button
        - Continue button will navigate to the Game section when user enters the name and click continue.
    -Exit button
        - Exit button will navigate to home page and refresh the name input if the user given the name already.

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page2.png)

#### Game section
- The game section contains the questions with options,next button and also the time line for each question.
    - Time line
      - Time line is used to dispaly the time for each each question.
    - Question and answer
      - Each question have 4 options and 15 sec time.
      - The questions will always different as e code select randomm question from quiz data array.
    - Next button
        - It provides a way to to go to next question when user selects the answer before 15 seconds.

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%203.png)
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%204.png)
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%205.png)

#### Score section
- The score section contains the actual score of the user and give a feed back based on the score
    - Resart Game button
        - This button helps the user to play the game again if they are interested.
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/scrennshot%20page%206.png)

### Future Implementations
- In future implementation i would like to implement
 - Add more field for quiz that user can choose like sport,science etc.
 - Give the users to select  the difficulty level.
 - When user select the option timer also can be stopped.
 - Can create a previous question buton to see previous question.
 - Create a backend datatbase to enable me to store scores and compare high scores.


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
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/flowchart%20how%20game%20works.png)
#### Wireframes

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/Wireframe%201%20and%202.png)


![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/wireframe%202%20and%203.png)



### Testing

#### Responsiveness

- I tested that this website is working in different browsers: Chrome, Firefox ,Safari.
- I confirmed that the project is responsive,looks good and functions on all standard screen size using the devtools device toolbar.
- I confirmed that all the blocks Home page, game info and name input, question and option section and score section are all readable and easy to understand.

#### Functional Testing

| Action  | Expected Result | Pass/Fail|
|---------|-----------------|----------|
|Enter Home Page URL| Open the home Page| Pass|
|Click the Start Quiz Button| Display Game info section| Pass|
|Leave the input name blank and click continue|Alert(Enter your name before starting the game)|Pass|
|Type the name with special character and number|Alert(Give a valid name)|Pass|
|Type the valid Username and click continue| Alert Quiz started |Pass|
|Click ok in alert|Go to Game section and show first question with timer|Pass|
|Click ok in alert|Pick random question from array|Pass|
|Click Exit in game info section|Go to home page|Pass|
|Leave all the question without selecting any option|Automatically go to next question till 10 th question after 15 seconds|Pass|
|Click the correct option| selected Option should show in green colour|Pass|
|Click any Option|All Option should disabled immedietly|Pass|
|Click the wrong answer|Wrong answer should be shown in red colour and also show the correct answer in green|Pass|
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

![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/validator%20testing.png)

#### Fixed Bugs 
- HTML
    - Missed some end tag when passing through the official W3C validator
    - Resolved it and again tested : No error found.
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/html%20valodator%20screenshot.png)
- CSS

    - Missed some semicolon when passing through CSS validator.
    - Resolved it and again tested : No error found.
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/css%20validator.png)

- JavaScript
    - Missed some semicolon and colosing brackets.
    - Had some unused UI elements.
    - Resolved it and again tested : No error found.
![Alt text](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/javascript%20validation%20.png)
### Accessibility

I confirmed that the color and fonts choosen are easy to read and accessible by running it through lighthouse in devtools.

- Unfixed Bugs
    - A warning in the Javascript is not fixed because it will not create any problem in this project.
    

### Deployment

#### Version Control
- The game is created using VS code IDE and commited and pushed to gitub using git.
- The commands used to push code to remote repository are:
    - git add .
    - git commit -m "..."
    - git push
    - git diff


#### Deployment to Github Pages
- The site is deployed using GitHub pages. The steps to deploy are as follows:
    
    1. Login to Github.
    2. Go to repository for the project.
    3. Click the settings button.
    4. Select pages in the left hand navigation menu.
    5. From the source dropdown select main branch and press save.
    6. The site has been deployed.

#### Local deployment

- To clone the Repository:
    1. Click on the code drop down button
    2. Click on HTTPS
    3. Copy the repository link to the clipboard
    4. Open your IDE of choice (git must be installed for the next steps)
    5. Type git clone copied-git-url into the IDE terminal The project will now of been cloned on your local machine for use.
    
### Credits

- Content











