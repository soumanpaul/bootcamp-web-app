# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

## Projects Structures

```
.
├── config
│   ├── config.env
│   ├── config.env.env
│   └── db.js
├── controllers
│   ├── auth.js
│   ├── bootcamps.js
│   ├── courses.js
│   ├── reviews.js
│   └── users.js
├── _data
│   ├── bootcamps.json
│   ├── courses.json
│   ├── reviews.json
│   └── users.json
├── docs
│   └── readme.md
├── middleware
│   ├── advancedResults.js
│   ├── async.js
│   ├── auth.middleware.js
│   ├── error.js
│   └── logger.js
├── models
│   ├── Bootcamp.js
│   ├── Course.js
│   ├── Review.js
│   └── User.js
├── mode_nginx_ssl.md
├── package.json
├── package-lock.json
├── public
│   └── uploads
│       └── photo_5d725a1b7b292f5f8ceff788.jpg
├── README.md
├── routes
│   ├── auth.js
│   ├── bootcamps.js
│   ├── courses.js
│   ├── reviews.js
│   └── users.js
├── seeder.js
├── server.js
└── utils
    ├── errorResponse.js
    ├── geocoder.js
    └── sendEmail.js

```

## Usage
 
Rename "config/config.env.env" to "config/config/config.env" and update the values/settings to your own

## Install Dependencies
```
npm install
```

## Run App 
```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```


## Demo

The API is live at [Live API](ttps://devbootcamps.herokuapp.com/api/v1/bootcamps)

Extensive documentation with examples [here](https://documenter.getpostman.com/view/5731747/SWEDzEg7?version=latest)

- Version: 1.0.0
- License: MIT
- Author: Souman Paul
