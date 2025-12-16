// import express
const express = require("express");
const app = express();
const port = 8000;


const { faker } = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const createUser=()=>{
    const newUser={
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser
}

const createCompany =()=>{
    const newCompany={
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
    }
}
return newCompany
}
app.get("/api/user/new",(req, res)=>{
    const user = createUser();
    res.send(user);
})
app.get("/malek",(req, res)=>{
    console.log("ssssssssssssssss");
    
    res.json({msg:"user"});
})
app.get("/api/company/new", (req, res)=>{
    res.json(createCompany());
})

app.get("/api/company", (req, res)=>{
    const company = createCompany();
    const user = createUser();
    res.json(user, company)


})


app.listen(port, () => console.log(` Server running on port ${port}`));






