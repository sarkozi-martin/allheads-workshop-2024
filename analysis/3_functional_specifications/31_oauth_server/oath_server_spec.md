# Oauth Server Specification

## Overview
Standard Oauth 2.0 server according to [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749).

## Data model
```mermaid
---
title: Oauth Server ERD
---
%%{init: {'theme':'base'}}%%
erDiagram
    User {
        string _id PK "Unique identifier"
        string username "User's name"
        string email "User's email"
    }
    
    Token {
        string _id PK "Unique identifier"
        string token "JWT token"
        datetime expiresAt "Expiration date"
        datetime createdAt "Creation date"
        string userId FK "Link to User"
    }

    User ||--o{ Token : "has"
```

## API Specification
See [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)

### Business Logic

#### POST /authorize
```mermaid
---
title: Registration & Authorization
---
%%{init: {'theme':'base'}}%%
sequenceDiagram
    autonumber
    participant client as Client
    participant oauth as Oauth Server

    client ->>+ oauth: POST /authorize

    alt The user is unknown
        oauth ->> oauth: Register the user by provided identifier
        oauth ->> oauth: Authorize
    else The user has been already registered
        oauth ->> oauth: Authorize
    end

    oauth -->>- client: Authorization token
```