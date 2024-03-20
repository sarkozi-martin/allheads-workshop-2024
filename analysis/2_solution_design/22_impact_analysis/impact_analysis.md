# Impact Analysis

## Impacted Teams

### Security Team

#### Oauth Server
- Provide standard Oauth 2.0 solution to secure API access of Quiz Server for the users.
- Users will use only name and email as authorization credentials. See User Authroization in Quiz We Application specification.
- [Oauth Server Specification](../../3_functional_specifications/31_oauth_server/oath_server_spec.md)

### Quiz Domain Team
- Provide data for the Quiz Application

#### Quiz Server
- Create new Microservice deployed to AWS to process Quiz Web Application requests according to specification.
- [Quiz Server Specification](../../3_functional_specifications/32_quiz_server/quiz_server_spec.md)

#### Quiz Web Application
- Create new mobile-first web application that delivers quizzes with immediate feedback and end-of-quiz summary.
- Application will be interacting with Quiz Server as its only source of data.