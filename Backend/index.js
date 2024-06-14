const port = 3002;

const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const usersModel = require('./Models/Users');
const multer=require("multer");
const path= require("path");
const { log } = require("console");


//added this below lines
//const Product = require('./Models/Product'); // Import Product model
//const Category = require('./Models/CategoryModel');
//const BusinessUser= require('./Models/BuisinessUser');
//const productRoutes = require('./routes/ProductRoutes'); // Import product routes
//const categoryRoutes = require('./routes/CategoryRoutes'); // Import category routes
//const authenticateJWT = require('./Middleware/authMiddleware');// Import the authentication middleware

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

//added this line
//app.use(express.static('public'));
//Database connection string

mongoose.connect("mongodb://127.0.0.1:27017/users");
//mongoose.connect("mongodb+srv://supriyabadhe86:super%4026@cluster0.fbhz9r5.mongodb.net/Eccommerce_project")


const secretKey = 'secret';

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
};




app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Check if a user with the same email already exists
        const existingUser = await usersModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // If the user does not exist, proceed with registration
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            usersModel.create({ firstName, lastName, email, password: hash })
                .then(user => res.json({ message: "Registration successful" }))
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



/*app.post('/login', async (req, res) => {
    const { email, password, userType, adminSecretKey } = req.body;

    try {
        if (userType === 'admin') {
            // Admin login
            if (!adminSecretKey) {
                return res.status(400).json({ message: "Admin secret key is required" });
            }

            if (adminSecretKey !== 'admin') {
                return res.status(400).json({ message: "Invalid admin secret key" });
            }

            // Generate admin token
            const token = jwt.sign({ email: 'admin@example.com', userType: 'admin' }, secretKey);
            return res.json({ message: "Success", token });
        } else {
            // Regular user login
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            const user = await usersModel.findOne({ email: email });

            if (!user) {
                return res.status(400).json({ message: "Incorrect email or password" });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(400).json({ message: "Incorrect email or password" });
            }

            // Generate user token
            const token = jwt.sign({ email: user.email, userType: 'user' }, secretKey);
            return res.json({ message: "Success", token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

*/




app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await usersModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        // Generate user token
        const token = jwt.sign({ email: user.email, userType: 'user' }, secretKey);
        return res.json({ message: "Success", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});









/*
// Route for getting all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route for creating a new product
app.post("/products", async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const product = new Product({ name, description, price });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for updating a product
app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.description = description;
        product.price = price;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for deleting a product
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.remove();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route for getting all categories
app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route for creating a new category
app.post("/categories", async (req, res) => {
    const { name } = req.body;
    try {
        const category = new Category({ name });
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for updating a category
app.put("/categories/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        category.name = name;
        const updatedCategory = await category.save();
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route for deleting a category
app.delete("/categories/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.remove();
        res.json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mount product routes with authentication middleware
app.use('/products', authenticateJWT, productRoutes);
// Mount category routes with authentication middleware
app.use('/categories', authenticateJWT, categoryRoutes);

*/


//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        //return cb(null,${file.fieldname}_${Date.now()}${path.extname(file.originalname)})
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);

    }
})

const upload = multer({storage:storage})



//Creating Upload Endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});



//Schema for creating product
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },  
})



app.post('/addproduct',async (req,res) =>{
    let products= await Product.find({});
    let id ;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id =last_product.id+1;
    }
    else
    {
        id=1;
    }
   

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });

    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})



//Creating API for deleting products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})


//Creating API for getting all products
app.get('/allproducts',async(req,res) =>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})


//Schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
 })

/*
 //Creating Endpoint for registering the user
app.post('/register',async (req,res) =>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })


    await user.save();


})*/

app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

app.get("/protected", authenticateJWT, (req, res) => {
    res.json({ message: "This is a protected route" });
});



app.listen(port, (error) => {
    if(!error){
    console.log(`Server is running on http://localhost:${port}`);
}else{
    console.log("Error: " +error)
}
})

