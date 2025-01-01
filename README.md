
# **intenData**

A small project for practicing backend development using Node.js, Express, Mongoose, and EJS. This project focuses on dynamic content rendering and basic data input operations.  

## **Project Setup**

Follow these steps to set up the project on your local machine:  

### **1. Clone the Repository**  
```bash
git clone https://github.com/vaibhav-katkar-dev/internData.git
cd intenData
```

### **2. Install Dependencies**  
Run the following command to install the required packages:  
```bash
npm install
npm install express
npm install ejs
npm install mongoose
```

### **3. Configure Login Credentials**  
To access the admin panel, set a username and password in the `views/validation.json` file:  
```json
{
    "valid":{
        "user":"<your-username>",
        "pass":"<password>"
    }

   
}
```

### **4. Set Up the Database**  
Make sure you have MongoDB installed and running. Update the MongoDB connection string in your `app.js` or configuration file:  
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/<name-database>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### **5. Start the Server**  
Start the Node.js server with the following command:  
```bash
node app.js
```

The server will start running at `http://localhost:3000`.

---

## **Features**
- Dynamic content rendering with **EJS**.
- Basic input operations for data management.
- Secure login for the admin panel.
- Database integration using **Mongoose** and **MongoDB**.
- Store all data of the Students in Database (MongoDB) And Show Only Admin.

---

## **Requirements**
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB
- Express
- Mongoose
- EJS

---

## **Contributing**
Feel free to fork this repository and submit pull requests to suggest improvements!  

---
