//---------back.js 1-----------
const express=require("express")

const bodyParser=require("body-parser")

const adminRouter=require("./routes/admin")
const shopRoutes=require("./routes/shop")
const contactRouter=require("./routes/contact")
const successRouter=require("./routes/success")

const back=express()



back.use(bodyParser.urlencoded({extend:false}))

back.use(adminRouter)
back.use(shopRoutes)
back.use(contactRouter)
back.use(successRouter)

back.use((req,res)=>{
    res.status(404).send(`<h1>Page Not Found !!!`)
})





back.listen(5000,()=>{
    console.log("serevr is at port 5000")
})

//----------admin.js 2---------------

const express=require("express")

const path=require("path")

const router=express.Router()

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../",'views','adminHome.html'))
})

module.exports=router

//--------- shop.js 3--------------------

const express=require("express")

const path=require("path")

const router=express.Router()

router.get("/user",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","shopHome.html"))
    
})

router.post("/user",(req,res)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports=router

//-------contact us 3------

const express =require("express")

const path =require("path")

const router=express.Router()

router.get("/contactus",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","conatct.html"))
})
router.post("/contactus",(req,res)=>{
    res.redirect("/success")
})

module.exports=router

//-----success.js 4---------------

const express=require("express")

const router=express.Router()

router.get("/success",(req,res)=>{
    res.send(`<h1>Form Successfully Filled</h1>`)
})

module.exports=router


//-------------------------------------------------------------------------------------------------

//--------adminHome.html 1------------------------------------------
  
        //<!DOCTYPE html>
        //<html lang="en">
        //<head>
            //<meta charset="UTF-8">
            //<meta http-equiv="X-UA-Compatible" content="IE=edge">
            //<meta name="viewport" content="width=device-width, initial-scale=1.0">
            //<title>WebSite</title>
        //</head>
        //<body>
            //<nav>
                //<ul>
                    //<li><a href="/">Home</a></li>
                    //<li><a href="/user">User</a></li>
                    //<li><a href="/contactus">contact us</a></li>
                //</ul>
            //</nav>
            //<main>
                //<h1>This the Home Page</h1>
            //</main>
            
        //</body>
        //</html>

//----------------------------------------------------------------------------
//-----shopHome.html 2------------------------------

        //!DOCTYPE html>
        //<html lang="en">
        //<head>
            //<meta charset="UTF-8">
            //<meta http-equiv="X-UA-Compatible" content="IE=edge">
            //<meta name="viewport" content="width=device-width, initial-scale=1.0">
            //<title>WebSite</title>
        //</head>
        //<body>
            //<nav>
                //<ul>
                    //<li><a href="/">Home</a></li>
                    //<li><a href="/user">User</a></li>
                    //<li><a href="/contactus">contact us</a></li>
                //</ul>
            //</nav>
            //<main>
                //<form method="POST">
                    //<label for="inputid">Product Name :</label>
                    //<input type="text" id="inputid" name="product" />
                    //</br>
                    //<button type="submit">Add</button>
                //</form>
            //</main>
            
        //</body>
        //</html>

//--------------------------------------------------------------------------------------------------
//---------------contact.html 3---------------------------------------------------
            //<!DOCTYPE html>
            //<html lang="en"> 
            //<head>
                //<meta charset="UTF-8">
                //<meta http-equiv="X-UA-Compatible" content="IE=edge">
                //<meta name="viewport" content="width=device-width, initial-scale=1.0">
                //<title>WebSite</title>
            //</head>
            //<body>
                //<nav>
                    //<ul>
                        //<li><a href="/">Home</a></li>
                        //<li><a href="/user">User</a></li>
                        //<li><a href="/contactus">contact us</a></li>
                    //</ul>
                //</nav>
                //<main>
                    //<form method="POST">
                        //<label for="inputid1">Name :</label>
                        //<input type="text" id="inputdi1" name="name"/>
                        //</br>
                        //<label for="inputdi2">Gmail :</label>
                        //<input id="inputid2" type="text" name="gmail">
                        //</br>
                        //<button type="submit">Get Call</button>

                    //</form>
                //</main>
                
            //</body>
            //</html>

