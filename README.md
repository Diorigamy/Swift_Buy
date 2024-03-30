# Swift_Buy eCommerce Platform

 eCommerce platform built with the MERN stack & Redux.
 
 <img src="./frontend/public/images/screens.png">
 
 This ALX-Software Engineering Portfolio project is part of my [MERN Stack | eCommerce Platform]. It is a full-featured shopping cart with PayPal & credit/debit payments.
 
 - [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- MongoDB database 
- PayPal account 

### Env Variables


```
NODE_ENV = development
PORT = 5000
MONGO_URI =mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = paypal client id
PAGINATION_LIMIT = 8
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

mzabibu@email.com (Customer)
123456

mtabibu@email.com (Customer)
123456

katibu@email.com (Customer)
123456

dabibu@email.com (Customer)
123456
```

---
## Authors

Contributors names and contact info

Lewis Wangui  
[@Lewis](https://twitter.com/lewiswakahenya)

Carol Nyakio 
[@carol](https://github.com/lynlinah)

## Acknowledgments

Inspiration, code snippets, etc.
* [ALX Africa](https://www.alxafrica.com/)


