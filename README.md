# Capsule

## Description

Capsule is a social media platform that allows users to prepare posts in advance, "encapsulating" moments and thoughts to
be revealed in the future. It's designed for users to experience the nostalgia of opening time capsules of their life.

## Current Functionality

### Login Screen

- Basic login/registration screen (authentication not yet implemented).
- Visitors can currently click login without username/password to enter the app.

### Dashboard

Features the following navigation options:

1. **Friends**
    - Lists all of the user's friends (not fully implemented, currently just displays all users from the users table).
    - Visually the friends are displayed on cards with their profile pic, username, and bio.
2. **Trending**
    - Shows the hottest new posts from popular users (not fully implemented, currently shows all posts with 100 or more likes from the posts table).
    - Includes poster's profile picture, username, post image, text, "buried" date, and "uncovered" date.
3. **Upcoming**
    - Shows upcoming dates and events to encourage posting on.
    - Generated based on interests the user selects for their profile.
    - Currently under development.

### Profile Page

- Here the user can edit their bio and explore/add interests (interests needs implementation).
- Option to upload a new profile picture (needs implementation).

### Deployment

- Live version hosted on Vercel: [Capsule](https://capsule-livid.vercel.app/)

### Backend

- Utilizes a PostgreSQL database hosted on Vercel.

## Planned Development

- **Authentication:** Implement secure login and user authentication.
- **Posts:** Enable scheduled posting, media uploads, and engagement.
- **Friends:** Functionality for users to add friends, view profiles, and engage with one another.
- **Interests:** Option for users to list and edit personal interests.
