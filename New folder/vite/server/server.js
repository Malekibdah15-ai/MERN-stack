const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
];
app.get("/api/users",(req,res)=>{
    res.json(users)

})
app.post("/api/users", (req, res) => {
    users.push(req.body);
    res.json({ status: "ok" });
});

app.get("/api/users/:id", (req, res)=>{
    res.json(users[req.params.id]);
})

app.patch("/api/users/:id", (req, res)=>{
    const id = req.params.id;
    users[id] = req.body;
    res.json({status : "ok"});
})
app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id;
    users.splice(id, 1);
    res.json({status : "ok"});
})

app.listen(port, () => console.log(`Server running on port ${port}`));

