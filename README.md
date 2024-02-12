# ![LOGO](https://raw.githubusercontent.com/Saranyajayakumaran/Generel-knowledge-quiz/main/assets/images/favicon.ico) GENERAL KNOWLEDGE QUIZ

Join us for a fun and educational adventure! Our quiz game is designed to challenge your knowledge across various topics, making learning enjoyable and accessible for all ages. Expand your understanding while having a great time!

The website is responsive on all screens [General knowledgeQuiz](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/deployments)

![Game responsive screen](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/RESPONSIVE.png)


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
- Vscode
    - Used for programming HTML, CSS and Javascript.

## Features

### Existing Features

#### HomePage 
 - The home page shows the Title of the quiz and a start quiz button.
    - Title
        - The title of the quiz is designed as a block with logo.
    - Start button
        - When user clicks the start quiz button it navigates to the instruction section of the page.

![Home page of the game](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%201.png)

#### Game information Section
- This section contains the title of the quiz , user name input, game instruction, continue button and a exit button
    - User Name input
        - The field get the name of the user which will be displayed in the welcome quiz alert and score section.
    - Instruction
        - The field contains the instruction to the user before starting the game.
    - Continue button
        - Continue button will navigate to the Game section when user enters the name and click continue.
    -Exit button
        - Exit button will navigate to home page and refresh the name input if the user given the name already.

![Game rule section](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page2.png)

#### Game section
- The game section contains the questions with options,next button and also the time line for each question.
    - Time line
      - Time line is used to dispaly the time for each each question.
    - Question and answer
      - Each question have 4 options and 15 sec time.
      - The questions will always different as e code select randomm question from quiz data array.
    - Next button
        - It provides a way to to go to next question when user selects the answer before 15 seconds.

![Game section with question and options](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%203.png)
![Game section with correct answer](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%204.png)
![Game section with wrong answer](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/screenshot%20page%205.png)

#### Score section
- The score section contains the actual score of the user and give a feed back based on the score
    - Resart Game button
        - This button helps the user to play the game again if they are interested.
![Score section screenshot](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/scrennshot%20page%206.png)

### Future Implementations
- In future implementation i would like to implement
 - Add more field for quiz that user can choose like sport,science etc.
 - Give the users to select  the difficulty level.
 - When user select the option timer also can be stopped.
 - Can create a previous question buton to see previous question.
 - Create a backend datatbase to enable me to store scores and compare high scores.


### How the Game works 

- Step 1: Click start quiz Button.
- Step 2: The start button navigates to game info section.
- Step 3: User should enter the name before starting the Game(Name can only contain alphabets, period (.) and Space).
- Step 4: When user clicks continue button the Game section will display the first question with 4 options.
- Step 5: When user clicks exit button it navigate to home page.
- Step 6: Each question wil have 15 seconds time to select the option.
- Step 7: User can select only one option after selecting all the other options will be disabled.
- step 8: If user select correct option the score will be increased to 1.
- Step 9: If the user clicks the wrong answer the score will be same.
- Step 10: The correct answer will be shown in green colour.
- Step 11: If user clicks the wrong answer it will show in red colour and also show the correct answer in green.
- Step 12: When User clicks next button it will go to next question.
- Step 13: When the question reaches 10 it will show the score out of 10 and feedback based on the score.
- Step 14: User can restart the game by clicking the Restart game button.


### Design
#### Flow chart
##### How the Game works
![Flowt char how game works](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/flow%20chart%20how%20to%20play.png)

#### Wireframes

![Wireframe Desktop and mobile](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/Wireframe%20mobile%20and%20desktop.png)


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
|Click Exit in game info section|Go to Home Page|Pass|
|Leave all the question without selecting any option|Automatically go to next question till 10th question after 15 seconds|Pass|
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

|Bugs found|EXPECTATION|How I solved it|
|----------|-----------|---------------|
|The input section allows all the character as input|It should allow only alphabets,space and period(.)|I declared a variable isalphabet with all the characters i need and compared with the user input with if else condition|
|The timer was not resetting when clicking the next question button|Should restart from 15 sec|Solved the problem by using Clear interval function. |
|The user input and score was not resetting when playing the game again|The name input and score should be reset with blank string|Cleared all the inputs from user in reset quiz function|
|Coudn't print the score area line by line|Display the score and feedback in next lines|Solved by added the lines in Html and print the name and score in javascript|
|First question was not displayed when we click the continue button|Questions should be displayed in game section|Solved the bug by deleting the for loop which i used to get questions 10 times and call the next question function each time when we click continue button|

### Validator Testing

![Validation](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/validation%20testing%20screenshot.png)

#### Fixed Bugs 
- HTML
    - Missed some end tag when passing through the official W3C validator
    - Resolved it and again tested : No error found.
![W3c html validator](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/html%20valodator%20screenshot.png)
- CSS

    - Missed some semicolon when passing through CSS validator.
    - Resolved it and again tested : No error found.
![W3C css validator](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/css%20validator.png)

- JavaScript
    - Missed some semicolon and colosing brackets.
    - Had some unused UI elements.
    - Resolved it and again tested : No error found.
![Jigsaw validator](https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/blob/main/assets/images/javascript%20validation%20.png)

### Unfixed Bugs

    - A warning in the Javascript is not fixed because it will not create any problem in this project.
    

### Accessibility

I confirmed that the color and fonts choosen are easy to read and accessible by running it through lighthouse in devtools.


### Deployment

#### Version Control
- The game is created using VS code IDE and commited and pushed to gitub using git.
- The commands used to push code to remote repository are:
    - git add .     -using to add the changes
    - git commit -m "..."   - using to commit the changes to github
    - git push  - using to push the commited chnages to github
    - git diff  - used to see the changes we made before commiting.


#### GitHub Deployment 
- The site is deployed using GitHub pages. The steps to deploy are as follows:
    
    1. Login to Github.
    2. Go to repository for the project.
    3. Click the settings button.
    4. Select pages in the left hand navigation menu.
    5. From the source dropdown select main branch and press save.
    6. The site has been deployed.

#### Local deployment

 - The steps to deploy are as follows:

    1. In the GitHub repository click code tab and copy the URL of repository.
    2. Open command prompt in the local computer and type git clone and paste the URL of GitHub repository. "git clone https://github.com/Saranyajayakumaran/Generel-knowledge-quiz/deployments
    3. The repository will be deployed in loco machine.
    4. We can check the directory using "dir" command in command prompt.

### Credits

- I would thank many sources and people who spported to complete my project.
    - Thanking my mentor Dick vlaanderen who guided me and his ideas and corrections was very helpful.
    - I would like to thank some youtube channels helped t learn the concepts and ideas.
    - W3schools and stackoverflow plays a major role to learn the concepts.
    - The idea of webpage design and some coding has been referred from youtube channel [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8)
    - Learned some concepts from the [Love-Math](https://github.com/Saranyajayakumaran/Love-Math)

### Content

- All of my quiz questions has been taken from the website [Mentimeter](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates) and [Opinion Stage](https://www.opinionstage.com/blog/trivia-questions/)
- Read me references taken from [Love-Running](https://code-institute-org.github.io/love-running-2.0.) and [Happy yoga](https://github.com/Saranyajayakumaran/Happy-Yoga)














