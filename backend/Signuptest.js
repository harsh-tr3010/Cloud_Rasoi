const bodyParser=require('body-parser');
const cors=require('cors');
const mysql = require('mysql2');
const express =require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3100;


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage:storage });
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// set up mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xyz'
});

connection.connect((err) => {
    if(err){
        console.error('Error Connecting to the database: ',err.stack);
        return;
    }
    console.log('connected to the database as id'+connection.threadId);
});


// UserSignup
app.post('/insignup',(req,res)=>{
    const {name,email,phone,createpassword,confirmpassword,pincode}=req.body;
    if(!name || !email || !phone || !createpassword || !confirmpassword || !pincode){
        res.status(200).send('Please provide name,email,phone,createpassword,confirmpassword,pincode');
        return;
    }


    const sql1='Insert into signupdata(name,email,phone,createpassword,confirmpassword,pincode) values(?,?,?,?,?,?)';
    const sql2='Insert into profiledata(name,email,phone,pincode) values(?,?,?,?)';


    connection.query(sql1,[name,email,phone,createpassword,confirmpassword,pincode],(error,results,fields)=>{
        if (error){
            console.error('Error inserting data into vendorverify table: ',error);
            return;
        }
        res.send("review added successfully");
        console.log('vendor verified successfully');
    });
    connection.query(sql2,[name,email,phone,pincode],(error,results,fields)=>{
        if (error){
            console.error('Error inserting data into vendorverify table: ',error);
            return;
        }
        res.send("review added successfully");
        console.log('vendor verified successfully');
    });
    });




// Add your rasoi
app.post('/addrasoi', upload.single('image_URL'), (req,res)=>{
    const {rasoi_name,rasoi_category,rasoi_address,pincode}=req.body;
    const image_URL = req.file ? req.file.filename : null; // Get the filename of the uploaded image
    


    const sql1='INSERT INTO rasoidata (rasoi_name,rasoi_category,rasoi_address,image_URL,pincode) values(?,?,?,?,?)';


    connection.query(sql1,[rasoi_name,rasoi_category,rasoi_address,image_URL,pincode],(error,results,fields)=>{
        if (error) {
            console.error('Error inserting data:',error);
            res.status(500).send('error inserting data'); 
            return;
        }
        res.status(200).send('review added successfully!');
    });
});

  // Get all rasoidata
  app.get('/fetchrasoi', (req, res) => {
    const sql = 'SELECT * FROM rasoidata';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  

// User Login
app.post('/fetchlogin',(req,res)=>{
        const {phone,confirmpassword} = req.body;
    
        // const sql='select * from caterdata';
        connection.query('select name,email,pincode FROM signupdata where phone=? and confirmpassword=?',[phone,confirmpassword],(error,results,fields)=>{     
            if (error){
                console.error('Error fetching data from signupdata table ',error);
                res.status(200).send('error fetching data from signupdata table')
                return;
            }
            if(results.length>0)
            {
                res.send(results);
            }else{
                res.send({'status':false});
            }
    
            // console.log(results);
        });
});

// RasoiTitleFetching
app.post('/rasoititle', (req, res) => {
    const {id}=req.body;
    console.log(req.body);
    console.log("Welcome");
    connection.query('select * from rasoidata', (error, results, fields) => {
        if (error) {
            console.error('Error inserting data into emp table', error);
            res.status(500).send('Error fetching data from tiffinservice table')
            return;
        }
        res.json(results);
    });
})

// searchbar
app.post('/search', (req, res) => {
    const { query } = req.body;
    const sql = `SELECT * FROM rasoidata WHERE rasoi_name LIKE ? OR rasoi_address LIKE ? OR pincode LIKE?`;
    connection.query(sql, [`%${query}%`, `%${query}%`,`%${query}%`], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Something went wrong');
      }
      res.json(results);
    });
  });


// RasoiMenuFetching
app.post('/rasoimenu', (req, res) => {
    
    connection.query('select * from crmenudata', (error, results, fields) => {
        if (error) {
            console.error('Error inserting data into emp table', error);
            res.status(500).send('Error fetching data from tiffinservice table')
            return;
        }
        res.json(results);
    });
})

// Insert caterer data
app.post('/insertconfec', upload.single('profileImage'), (req, res) => {
    const { name, phone, description, address } = req.body;
    const profileImage = req.file ? req.file.filename : null;
  
    const query = 'INSERT INTO caterersdata (name, phone, address, description, profileImage) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [name, phone, address, description, profileImage], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }
      res.status(200).send('Profile inserted successfully!');
    });
  });


  // Get all caterers
app.get('/caterers', (req, res) => {
    const sql = 'SELECT * FROM caterersdata';
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Get single caterer by ID
  app.get('/caterers/:id', (req, res) => {
    const sql = 'SELECT * FROM caterersdata WHERE id = ?';
    const id = req.params.id;
    connection.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  });


//   delivery display
  app.get('/abc', (req, res) => {
    const {firstName, lastName,phonenumber,vehiclenumber,gender}=req.body;
      
    connection.query('select * from deliveryboys' , [firstName, lastName,phonenumber,vehiclenumber,gender],(error, results, fields) => {
        if (error) {
            console.error('Error inserting data into emp table', error);
            res.status(500).send('Error fetching data from tiffinservice table')
            return;
        }
        
        res.json(results);
    });
  });


//   delivery insertion
  app.post('/delivery-signup',(req,res)=>{
    const {name,phonenumber,pincode,vehiclenumber,licensenumber} = req.body;

    // const sql='select * from caterdata';
    connection.query('INSERT INTO deliveryboys (name,phonenumber,pincode,vehiclenumber,licensenumber)VALUES(?,?,?,?,?)',[name,phonenumber,pincode,vehiclenumber,licensenumber],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
           
        }
        res.status(200).send('Signup Successful');

        
    });
});


// faizah 
app.post('/rasoi-addDish',(req,res)=>{
    const {name , description , price} = req.body;
    const query = 'insert into rasoi_menu(name,description,price)values(?,?,?)';
    connection.query(query,[name,description,price],(err,results,field)=>{
        if(err){
            console.error(err);
            return res.status(500).send({message:'Error in inserting dish in database'});
        }
        return res.status(200).send({message:'Dish Added Successfully'});
    })
})


app.post('/rasoi-editDish',(req,res)=>{
    console.log(req.body);
    const {name , description , price , id} = req.body;
    const query = 'update rasoi_menu set name = ? , description = ? , price = ? where id = ?';
    connection.query(query,[name,description,price,id],(err,results,field)=>{
        if(err){
            console.error(err);
            return res.status(500).send({message:'Error in updating dish in database'});
        }
        return res.status(200).send({message:'Dish Updated Successfully'});
    })
})


app.post('/fetch-rasoi-dishes',(req,res)=>{
    const query = 'select * from rasoi_menu';
    connection.query(query,[],(err,results,field)=>{
        if(err){
            console.error(err);
            return res.status(500).send({message:'Error in inserting dish in database'});
        }
        return res.status(200).send({message:'Dish Added Successfully',results});
    })
})

// rasoimenu insert
app.post('/add-food-item', upload.single('image_URL'), (req, res) => {
    const { name, quantity_kg, price } = req.body;
    const image_URL = req.file ? req.file.filename : null;



    const sql = 'INSERT INTO food_items (name, quantity_kg, price, image_URL) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, quantity_kg, price, image_URL], (err, result) => {
        if (err) throw err;
        res.send('Food item added.');
    });
});


// display rasoi menu
app.post('/food-items/:id', (req, res) => {
    console.log(req.body);
    let k=req.params.id;
    console.log(k);

    const sql = 'SELECT * FROM food_items where rasoi_id=?';
    connection.query(sql,[k], (err, results) => {
        if (err) throw err;
        res.json(results);
        console.log(results);
    });
});

// aadil tiffin insert
app.post('/tiffin-insert',(req,res)=>{
    const {planname,itemname,description,span,price} = req.body;

    // const sql='select * from caterdata';
    connection.query('INSERT INTO tiffin_items (planname,itemname,description,span,price)VALUES(?,?,?,?,?)',[planname,itemname,description,span,price],(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
           
        }
        res.status(200).send('Signup Successful');

        // console.log(results);
    });
});

// Vdashboard counts
app.get('/order-requests', (req, res) => {
    const query = 'SELECT COUNT(*) AS totalOrders FROM orders';
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ totalOrders: results[0].totalOrders });
    });
  });
  
  app.get('/delivery-partners', (req, res) => {
    const query = 'SELECT COUNT(*) AS totalPartners FROM deliveryboys';
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ totalPartners: results[0].totalPartners });
    });
  });


  app.post('/api/place-order', (req, res) => {
    const { items } = req.body;
  
    const orderQuery = `INSERT INTO orders (item_name, quantity, price, kitchen_name) VALUES ?`;
    const orderValues = items.map(item => [item.name, item.quantity, item.price, item.kitchenName]);
  
    connection.query(orderQuery, [orderValues], (err, result) => {
      if (err) {
        console.error('Error inserting order:', err);
        res.status(500).send('Failed to place order.');
      } else {
        res.send('Order placed successfully!');
      }
    });
  });
  
  
  // Backend Express.js route to fetch orders with optional filters
  app.get('/api/orders', (req, res) => {
      const { itemName, kitchenName } = req.query; 
    
      let query = 'SELECT * FROM orders';
      const queryParams = [];
    
      if (itemName || kitchenName) {
        query += ' WHERE';
        if (itemName) {
          query += ' item_name = ?';
          queryParams.push(itemName);
        }
        if (kitchenName) {
          if (queryParams.length > 0) query += ' AND'; 
          query += ' kitchen_name = ?';
          queryParams.push(kitchenName);
        }
      }
    
      // Execute the query
      connection.query(query, queryParams, (err, results) => {
        if (err) {
          console.error('Error fetching orders:', err);
          res.status(500).send('Failed to fetch orders.');
        } else {
          res.json(results); 
        }
      });
    });
app.listen(port,()=> {
    console.log('Server is running on port ${port}');
})