
# DevCamper API

Backend API for DevCamper application to manage bootcamps, courses, reviews, users, and authentication.

## Indices

* [Authentication](#authentication)

  * [Register user](#1-register-user)
  * [Login user](#2-login-user)
  * [Get Logged in User via Token](#3-get-logged-in-user-via-token)
  * [Forgot Password](#4-forgot-password)
  * [Reset password](#5-reset-password)
  * [Update user Details](#6-update-user-details)
  * [Update User Password](#7-update-user-password)
  * [Logout User](#8-logout-user)

* [Bootcamps](#bootcamps)

  * [Get All Bootcamps](#1-get-all-bootcamps)
  * [Get Single Bootcamp](#2-get-single-bootcamp)
  * [Create New Bootcamp](#3-create-new-bootcamp)
  * [Updates bootcamps](#4-updates-bootcamps)
  * [Delete  bootcamps](#5-delete--bootcamps)
  * [Get Bootcamps by Distance](#6-get-bootcamps-by-distance)
  * [upload Photo](#7-upload-photo)

* [Courses](#courses)

  * [Get All Courses](#1-get-all-courses)
  * [Get Courses for Bootcamp](#2-get-courses-for-bootcamp)
  * [Get Single Course](#3-get-single-course)
  * [Create bootcamp course](#4-create-bootcamp-course)
  * [Update Course](#5-update-course)
  * [Delete Course](#6-delete-course)

* [Reviews](#reviews)

  * [Get All Reviews](#1-get-all-reviews)
  * [Get Reviews for Bootcamps](#2-get-reviews-for-bootcamps)
  * [Get Single Review](#3-get-single-review)
  * [Add Review For Bootcamp](#4-add-review-for-bootcamp)
  * [update Review](#5-update-review)
  * [Delete Review](#6-delete-review)

* [Users](#users)

  * [Get all Users](#1-get-all-users)
  * [Get Single User](#2-get-single-user)
  * [Create user](#3-create-user)
  * [Update user](#4-update-user)
  * [Delete User](#5-delete-user)


--------


## Authentication
Routes for user authentication including register, login, reset password, etc



### 1. Register user


Add user to database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON TYPE |



***Body:***

```js        
{
"name": "Souman Paul",
"email": "paul1729@gmail.com",
"password": "123456",
"role": "user"
}
```



### 2. Login user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"email": "paul1729@gmail.com",
	"password": "123456"
}
```



### 3. Get Logged in User via Token



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



### 4. Forgot Password


Generate password token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	
"email": "souman1729@gmail.com"
	
}
```



### 5. Reset password


reset user password using token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/resetpassword/8dc5439eaa50118a076b1e3fe556c711ddf7a2a3
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"password": "Linux@2016"
}
```



### 6. Update user Details


Update loged in user name and email


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Souman Ch Paul",
	"email": "souman1729@gmail.com"
}
```



### 7. Update User Password


Update logged in user password


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"currentPassword": "123456",
	"newPassword": "Sam$1994@#"
}
```



### 8. Logout User


Clear token cookie


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/auth/logout
```



## Bootcamps
Bootcamps CURD functionality



### 1. Get All Bootcamps


Fetch all bootcamps from database. Inclus=des pagination, filtering etc.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps
```



### 2. Get Single Bootcamp


Get Single Bootcamp by ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```



### 3. Create New Bootcamp


Add new bootcamp to database. Must be authenticated and must be publisher or admin.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	
	  "housing": false,
        "jobAssistance": true,
        "jobGuarantee": true,
        "acceptGi": true,
        "name": "Machine learning Bootcamp",
        "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development",
        "website": "https://exd.com",
        "phone": "(444) 444-44nn4",
        "email": "hggggl@devcentral.com",
        "address": "45 Upper College Rd Kingston RI 02881",
        "careers": [
            "Mobile Development",
            "Web Development",
            "Data Science",
            "Business"
        ]
}
```



### 4. Updates bootcamps


Update singel bootcamp and Database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5e03ccf8c77e1f349ee9d37a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"housing": true
}
```



### 5. Delete  bootcamps


Detele bootcamp from database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/bootcamps/5e03ccf8c77e1f349ee9d37a
```



### 6. Get Bootcamps by Distance


Get bootcamps within radius  of a specific zipcode


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps/radius/02118/100
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
"name": "Devworks Bootcamp",
		"description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
		"website": "https://devworks.com",
		"phone": "(111) 111-1111",
		"email": "enroll@devworks.com",
		"address": "233 Bay State Rd Boston MA 02215",
		"careers": ["Web Development", "UI/UX", "Business"],
		"housing": true,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```



### 7. upload Photo


Route to upload Bootcamp Photo


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5e03ce07c77e1f349ee9d37b/photo
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



## Courses
Create, Read, Update and Delete.



### 1. Get All Courses


Get All Courses in Database.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/courses/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tuition": 13000,
    "minimumSkill": "Advanced"
}
```



### 2. Get Courses for Bootcamp


Get the specific courses for bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a037b292f5f8ceff787/courses
```



### 3. Get Single Course


Get single course by its ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725cfec4ded7bcb480eaa4
```



### 4. Create bootcamp course


Create a course for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5e03ce07c77e1f349ee9d37b/courses
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	
		"title": "Front End Web Development",
		"description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
		"weeks": 8,
		"tuition": 8000,
		"minimumSkill": "beginner",
		"scholarhipsAvailable": true
}
```



### 5. Update Course


Update Course in database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tuition": 15000,
    "minimumSkill": "advanced"
}
```



### 6. Delete Course


Remove course from Database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"tuition": 13000,
            "minimumSkill": "Advanced"
}
```



## Reviews



### 1. Get All Reviews


Get all reviews from database and populate with bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/
```



### 2. Get Reviews for Bootcamps


Fetch the reviews for a specific bootcamp 


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5e03ce07c77e1f349ee9d37b/reviews
```



### 3. Get Single Review


Fetch a review from database by id and populate Bootcamp name and descriptoin/


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```



### 4. Add Review For Bootcamp


Insert review for specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5e03ce07c77e1f349ee9d37b/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"title": "Nice bootcamp",
	"text": "i learned a lot",
	"rating": 8
}
```



### 5. update Review


Update Review in Database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/5e03d4fbc77e1f349ee9d37f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"title": "Good instructors"
}
```



### 6. Delete Review


Delete review from Database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/5e03d4fbc77e1f349ee9d37f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"title": "Worst instructors"
}
```



## Users
CURD functionality for users  only available to admins



### 1. Get all Users


Get all users (Admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/
```



### 2. Get Single User


Get single user by id (admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5dfb311335cd025182c78569
```



### 3. Create user


Add user to database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON Type |



***Body:***

```js        
{
	"name": "Love Paul",
	"email": "paulsam1729@gmail.com" ,
	"password": "Sam$1994@#"
}
```



### 4. Update user


Update user in Database


***Endpoint:***

```bash
Method: PUT
Type: 
URL: {{URL}}/api/v1/users/5dfb329c35cd025182c7856b
```



### 5. Delete User


Delete user from Database


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/users/5dfb329c35cd025182c7856b
```



---
[Back to top](#devcamper-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2019-12-26 12:33:23 by [docgen](https://github.com/thedevsaddam/docgen)
