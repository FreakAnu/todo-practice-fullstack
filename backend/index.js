const express = require("express");
const { updateTodo, createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createpayload = req.body
    const parsepayload = createTodo.safeParse(createpayload) 
    if(!parsepayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
    }
    await todo.create({
        title:createpayload.title,
        description: createpayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})
app.get("/todos",async function(req,res){
    const todos =await todo.find({}) 
    res.json({
        todos
    })
})
app.put("/completed",async function(req,res){
    const updatepayload = req.body
    const parseupdatepayload = updateTodo.safeParse(updatepayload)
    if(!parseupdatepayload.success){
        res.status(411).json({
            msg:"You send the wrong id"
        })  
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})



app.listen(port,() => {
    console.log(`app is listening on port${port}`)
})