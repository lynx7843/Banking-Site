<div align="center">
<h1>🏦 Banking Site </h1>

<p> 
A modern, full-stack digital banking platform built with React, Spring Boot, and MySQL. 
Features include secure authentication, a multi-step account creation wizard, and an interactive financial dashboard.
</p>

<h4>
   <a href="#features">Features</a> •
   <a href="#getting-started">Getting Started</a> •
   <a href="#tech-stack">Tech Stack</a> •
   <a href="#preview">Preview</a> 
</h4>
</div>

## ✨ Features

* MongoDB atlas for data storage
* Spring Boot REST API for handling user authentication
* React front-end login interface

## 🛠️ Getting Started

### Installation

```bash
1. Clone this repository
git clone https://github.com/lynx7843/Banking-Site.git

2. Configure the database
Step 1: Create the Cluster (banking_app_db)
Step 2: Get Your Connection String
        Create and Insert the String under MONGO_URI Variable inside .env
Step 3: Create Collections
- account_details
- customer_info
- transactions

3. Start the back-end
cd src
mvn spring-boot:run

4. Start the front-end
cd Banking-Site/frontend/src
npm run dev
```

## ⚙️ Tech Stack

* Front-end: React
* Back-end: Spring Boot
* Database: MongoDB atlas

## 📷 Preview
<div align="center">

#### Login 
<img src="img/login.png" alt="Login"> <br/>

#### SignUp 
<img src="img/signup.png" alt="SignUp"> <br/>

#### Dashboard 
<img src="img/dashboard.png" alt="Dashboard"> <br/>

#### Personal Account 
<img src="img/personal.png" alt="Personal Account"> <br/>

#### Business Account 
<img src="img/business.png" alt="Business Account"> <br/>

#### Features 
<img src="img/features.png" alt="Features"> <br/>
</div>
