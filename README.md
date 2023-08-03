# Basic_Restful_API
This repository contains a simple implementation of a RESTful API using modern web development technologies. The API serves as a foundation for building scalable and maintainable web applications that communicate through HTTP requests.
## Features

- Create, Read, Update, and Delete operations for managing resources.
- Validation of incoming data using Joi validation library.
- Utilizes Express.js for handling routing and middleware.
- Interacts with a MongoDB database to store and retrieve data.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/armansyahhakim/basic_restful_api.git

2. cd basic_restful_api

3. npm install
4. MONGODB_URI=mongodb://127.0.0.1:27017/user-crud-arman
5. npm start
6. 
The API will be accessible at http://localhost:3000.

API Endpoints
Create Data
Endpoint: POST /tambahData
Request Body: JSON object representing the data to be added.

Update Data
Endpoint: PUT /updateData/:id
Request Body: JSON object containing updated data.
URL Parameter: id - ID of the data to be updated.

Delete Data
Endpoint: DELETE /deleteData/:id
URL Parameter: id - ID of the data to be deleted.

Get All Data
Endpoint: GET /getData

Get Data by ID
Endpoint: GET /getDataById/:id
URL Parameter: id - ID of the data to retrieve.
Error Handling
The API includes error handling for invalid requests, database errors, and other potential issues.

Validation
Joi validation is used to validate incoming data, ensuring data integrity and consistency.

Contributing
Contributions are welcome! If you find any issues or would like to add new features, please feel free to open a pull request.

