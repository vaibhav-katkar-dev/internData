const express = require("express");
const app = express();
const path = require("path");




const mongoose = require("mongoose");

main().then(() => {
    console.log("connection successfuly");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/internship")
};


const stdSchema = mongoose.Schema({

    email: {
        type: String,

        maxLength: 50,
    },
    name: {
        type: String,

    },
    phone_no: {
        type: Number,
        required: true,
        //min:[1,"prise is to low "],       -this is used to print custome errors usig aray
    },
    colledge_name: {

        type: String,
    },
    address: {
        type: String,
        //emum is array wich allow accept value only if in this present.
    },
    trade: {
        type: String,
    }

});


const Std_Data = mongoose.model("Std_Data", stdSchema);


const port = 4444;
//let count = 0;


app.listen(port, () => {
    console.log(`listning on ${port}`)
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));




app.get("/internship", (req, res) => {
    res.render("index")

})
app.post("/internship", (req, res) => {

    let data = req.body;
    try {
        Std_Data.insertMany({
            email: data.email, name: data.name, phone_no: data.pno,
            colledge_name: data.cname, address: data.add, trade: data.trade
        })


    } catch (err) {
        throw err;

    }

    res.render("result")
    //console.log({data})


});

app.get("/admin", async (req, res) => {
    //console.log("coockei",coockei);


    res.render("admin")

})

//login=>>
app.post("/admin", async (req, res) => {
    let data = req.body;
    let data1 = require("./views/validation.json");


    async function find() {

        return await Std_Data.find()

    }


    //afte login display data
    // if (data.count <= 0) {
        if (data1.valid.user === data.username && data1.valid.pass === data.pass) {




            //console.log(coockei);

            find().then((std_data) => {
                res.render("std_data", { std_data ,Std_Data})

            })


        }
        else {
            res.redirect("/admin")
        }

  //  } 
    // else {
    //     find().then((std_data) => {
    //         res.render("std_data", { std_data })

    //     })
    // }





})





app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/io",(req,res)=>{
    res.render("io")
})
app.get("/internship",(req,res)=>{
    res.render("index")
})






