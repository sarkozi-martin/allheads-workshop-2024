# Quiz Web Application Specification

## Overview
A mobile-first web application that delivers quizzes with immediate feedback and end-of-quiz summary.

Application features design approach focused on usability, interactivity, and responsive design.

- Landing page with user authentication.
- Clean, distraction-free UI, focusing on one question at a time.
- Multiple-choice questions.
- Progress bar and question count (e.g., "Question 5").
- Immediate feedback upon answer submission (correct/incorrect indication).
- Next button to proceed.
- Quiz summary after the last question is answered. 

## Navigational flow
![Navigational Flow diagram](assets/navigation/quiz_web_application_navigation_flow.drawio.png)

Source: [Navigational Flow diagram](assets/navigation/quiz_web_application_navigation_flow.drawio)

### Authorization
A simple, user-friendly interface allows new users to register or existing users to log in.

#### Design
Capture user information and authenticate against the backend server.

![Signup](assets/designs/1%20Signup.png)

##### SignUp Screen
- Quiz logo with application title as static text.
- Introduction to the quiz app as static text.
- Input fields for user authentication.
- User consent message for use of their data (email). `OUT-OF-SCOPE` *Not part of the DEMO.*
  - The consent is granted by starting the quiz.
- Start button to begin the quiz.

#### Functionality
```mermaid
---
title: User Authorization
---
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    actor user as User
    participant quizWeb as Quiz Web Application
    participant auth as Oauth Server

    user ->>+ quizWeb: Enter Quiz Web
    quizWeb -->> user: Quiz Signup page

    user ->> quizWeb: Submit required Signup inputs
    quizWeb ->> quizWeb: Validate inputs
    
    quizWeb ->>+ auth: POST /authorize
    auth -->>- quizWeb: Authorization token
    quizWeb ->> quizWeb: Store token

    quizWeb -->>- user: User is authorized
```

### The Quiz

#### Designs

##### Question Screen
Displays a question with multiple-choice answers.

- Progress bar and question count (e.g., "Question 5") from BE.
- Question text from BE.
- Multiple-choice input for answer selection from BE.
- Button to submit the selected answer to BE to evaluate and receive feedback.

![Signup](assets/designs/2%20Question.png)

##### Feedback Screen
Shows the question's correct answer.

- Progress bar and question count (e.g., "Question 5") from BE.
- Question text from BE.
- Multiple-choice input in a read-only form.
  - Highlight the submitted answer.
    - Highlight style differs if the submitted answer was correct or not.
  - Highlight the correct answer.
- Next button to proceed.

![Signup](assets/designs/3%20Feedback.png)

##### Quiz Evaluation Screen
Shows the user's quiz results, including score.

- Quiz logo with summary screen title as static text.
- Congratulation message as static text.
- Summary of performance, including the number of correct answers and total questions from BE.
- Computed quiz length from BE.
- Optional message as static text.

![Signup](assets/designs/4%20Evaluation.png)

#### Functionality
```mermaid
---
title: Quiz Client-Server communication
---
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    actor user as Authorized user
    participant quizWeb as Quiz Web Application
    participant quizServer as Quiz Server

    user ->>+ quizWeb: Start the Quiz

    quizWeb ->>+ quizServer: GET /status
    quizServer -->>- quizWeb: Quiz progression data
    quizWeb ->> quizWeb: Update quiz progress bar

    quizWeb -->> user: Display quiz progress

    quizWeb ->>+ quizServer: GET /question
    quizServer ->> quizServer: Retrieve first quiz question
    quizServer -->>- quizWeb: First quiz question

    loop Repeat until next question does not exist
        quizWeb -->>- user: Display the question
        user ->>+ quizWeb: Choose option as answer
        quizWeb -->> user: Mark chosen option as selected
        user ->> quizWeb: Submit the answer

        quizWeb ->>+ quizServer: POST /answer-and-next
        quizServer ->> quizServer: Evaluate the answer

        alt Next question exists
            quizServer ->> quizServer: Select next question
            quizServer -->> quizWeb: Answer evaluation & next question
        else Next question does not exist
            quizServer -->>- quizWeb: Answer evaluation
        end

        alt Answer is correct
            quizWeb ->> quizWeb: Highlight the selected option as correct
        else Answer is wrong
            quizWeb ->> quizWeb: Highlight the correct option
            quizWeb ->> quizWeb: Highlight the selected option as wrong
        end
        quizWeb -->>- user: Receive answer evaluation

        alt Next question exists
            user ->>+ quizWeb: Continue (to next question)
        else Next question does not exist
            user ->> quizWeb: Continue
            quizWeb ->>+ quizServer: GET /status
            quizServer -->>- quizWeb: Personalized quiz evaluation
            quizWeb -->>- user: Display personalized quiz evaluation
        end
    end
```