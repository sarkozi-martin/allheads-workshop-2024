# Quiz Server Specification

## Overview
Quiz Server Microservice that enable users to receive and answer questions.

## Data model
```mermaid
---
title: Quiz Server ERD
---
%%{init: {'theme':'base'}}%%
erDiagram
    Question {
        string _id PK "Unique identifier"
        string description "Question text"
        Option options "List of options"
        string correctOption "ID of correct option"
        string nextQuestion FK "Next question reference"
    }

    Option {
        string _id "Unique identifier"
        string name "Option name"
    }

    Answer {
        string _id PK "Unique identifier"
        string userId "User reference"
        string questionId FK "Question reference"
        string selectedOption FK "Selected option reference"
        datetime createdAt "Creation date"
    }

    Question ||--|{ Option : "is composed of"
    Question ||--|| Answer : "has"
    Answer ||--o| Option : "is composed of"
    Question ||--o| Question : "next"
```

### Inital load
[Questionnaire data - DEMO](assets/questionnaire.yaml)

## API Specification

### Structure
[**Quiz Server OpenAPI specification ⚙️**](quiz_server-openapi.yaml)

### Business Logic

#### GET /question
```mermaid
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    participant client as Client
    participant quizServer as Quiz Server
    participant db as Storage

    client ->>+ quizServer: GET /question

    alt The user did not answer any question yet
        quizServer ->>+ db: Retrieve the first question data
        db -->>- quizServer: The first question data
        
    else The user has already answered a question
        quizServer ->>+ db: Find the last question user has answered
        db -->>- quizServer: The last answered question data
        
        quizServer ->> quizServer: Set the next question by its order

        quizServer ->>+ db: Retrieve the next question data
        db ->>- quizServer: The next question data
    end

    quizServer -->>- client: Question resource
```
#### POST /answer-and-next
```mermaid
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    participant client as Client
    participant quizServer as Quiz Server
    participant db as Storage

    client ->> client: Submit the selected question option as the answer
    client ->>+ quizServer:  POST /answer-and-next

    quizServer ->>+ db: Retrieve the answered question data
    db -->>- quizServer: The answered question data

    quizServer ->> quizServer: Check if the submitted option is correct
    note over quizServer, quizServer: Answer evaluation

    alt The next question exists
        quizServer ->>+ db: Retrieve the next question data
        db -->>- quizServer: The next question data

        quizServer -->> client: The answer evaluation and next question
    else The next question does not exist
        quizServer -->>- client: The answer evaluation
    end
```
#### GET /status
```mermaid
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    participant client as Client
    participant quizServer as Quiz Server
    participant db as Storage

    client ->>+ quizServer:  GET /status

    quizServer ->>+ db: Retrieve user's answers
    db -->>- quizServer: User answers

    quizServer ->>+ db: Retrieve quiz questions
    db -->>- quizServer: Quiz questions

    quizServer ->> quizServer: Obtain the quiz statistical information
    quizServer ->> quizServer: Calculate the quiz progress

    quizServer -->>- client: The personalised quiz evaluation
```
#### GET /report
`OUT-OF-SCOPE`
Retrieve current ranking of Quiz contestants. *Not part of the DEMO.*

## Testing
- [Quiz DEMO Smoke Test - Postman Collection](assets/Quiz%20DEMO%20-%20All%20Heads%202024.postman_collection.json)