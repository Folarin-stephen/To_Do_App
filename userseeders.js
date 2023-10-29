const db = require("./db/index")
const models = require("./models/usermodel");
const bcrypt = require("bcrypt")



db.connect().then(async()=>{
    await models.insertMany([
        {
            name: "Folarin Oladimeji",
            email: "folarinoladimeji@gmail.com",
            contact: "Ibeju lekki, Lagos",
            password:  "Fola1234567",
            phone_number: "07040701165",
            user_type: "admin",
            gender: "male"
        }
    ])
    
    console.log("Added to db successfully");
    process.exit(1)
}).catch((err) => {
    console.log("Error seeding", err);
    return err
})