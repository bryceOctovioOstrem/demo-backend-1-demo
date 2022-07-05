// this is were we import server/express
const express = require("express");
const cors = rrequire("cores");
//allows to shares recources across urls

const app = express();

//middle wear code to start every time st
app.use(express.json());
app.use(cors());// allows our server to a

app.listen(5050, ()=> {
    console.log("server is up and running");

});
app.get("api/inventory", (req, res) => {
    console.log("Endpoint hi");
    console.log(req.query);
    req.statusCode(200).sen(dummyDatabase);
    if (req.query.item){
        const filteredItems = dummyDatabase.filteredItems(() => {
                return ingredient.toLowerCase().includes(req.query.item.toLowerCase());
        
            })
    }
    res.status(200).send(dummyDatabase);
    }else{
        return res.status(200).send(dummy)
    }
});
app.get("api/inventory/:id", (req,res) =>{
    console.log(req.params);
    console.log("fsda;lfhad");
    const nuiIndex = +req.params.id;

})
