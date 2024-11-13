const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const { ObjectId } = require('mongodb');


//middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());


//mongodb configuration

const { MongoClient, ServerApiVersion } = require('mongodb');
const password = encodeURIComponent("Pranav@123");
const uri = `mongodb+srv://bookstore:${password}@cluster0.tfocfqw.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    //create a collection of documents
    const booksCollections = client.db("BookInventory").collection("Books")

    //insert  a book to db: post method

    app.post('/upload-book', async (req, resp) => {
      const data = req.body;
      const result = await booksCollections.insertOne(data)
      resp.send(result)
    })

    // get all books from database 

    //update book : update or patch method
    app.patch('/book/:id', async (req, resp) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) }
      const updateDoc = {
        $set: {
          ...updateBookData
        }
      }

      //update
      const options = { upsert: true };
      const result = await booksCollections.updateOne(filter, updateDoc, options)
      resp.send(result)
    })

    //delete 

    app.delete('/book/:id', async (req, resp) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await booksCollections.deleteOne(filter)
      resp.send(result);
    })

    // find by category 

    app.get('/all-books', async (req, resp) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category }
        console.log(query)
      }
      const result = await booksCollections.find(query).toArray();
      resp.send(result);
    })

    // to get single book data

    app.get('/book/:id', async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await booksCollections.findOne(filter)
      res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error){
    console.log(error)
  }
}
run().catch(console.dir);

app.get('/', (req, resp) => {
  resp.send("Hello World")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})