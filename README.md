# usePopcorn - Movie Tracking Platform

- [About](#about)
- [Main Features](#main-features)
- [Getting Started](#getting-started)
- [1. Clone the Repository](#1-clone-the-repository)
- [2. Install Dependencies](#2-install-dependencies)
- [3. API Key](#3-api-key)
- [4. Environment Variables](#4-environment-variables)
- [5. Start the Development Server](#5-start-the-development-server)

# About

- **usePopcorn** is a movie tracking platform, inspired by IMDb.
- Built with **create-react-app** and **React v18**

### Main Features

* Search for movies and series you've watched.
* Add and rate movies to your personal list.

### Getting Started

Follow these steps to clone the repository and set up the project locally:

## 1. Clone the Repository:

* Open your terminal or command prompt.
* Navigate to the directory where you want to store the project.
* Run the following command to clone the repository:

  ```bash
  git clone https://github.com/yourusername/usepopcorn.git

## 2. Install Dependencies
* Navigate to the project directory:
  ```bash
  cd usepopcorn
  npm install
    
## 3. API Key
* Generate your own Api Key from [https://www.omdbapi.com/apikey.aspx)](https://www.omdbapi.com/apikey.aspx)
* To learn more about how the api works visit OMDb here: [https://www.omdbapi.com](https://www.omdbapi.com)
  
## 4. Environment Variables
* Create .env file in the root directory
* Add your environment variables (API key)
  ```bash
  REACT_APP_SECRET_KEY="your-api-key-here"
    
## 5. Start the Development Server
* Run the following command to start the development server:
  ```bash
  npm start
 **Open your browser** and navigate to `http://localhost:3000`.

## Acknowledgements
This app was developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. Special thanks to Jonas for being an excellent instructor throughout the course.
