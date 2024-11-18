const express = require("express")
const router = express.Router()
const {getAllUsers}= require ("../controllers/usersControllers")

const db=require("../database")

router.get('/users', );

router.post("/users", (req, res) => {
const { firstName, lastName } = req.body

const lastId = users[users.length - 1].id

const newId = lastId + 1

const newUser = {
    firstName,
    lastName,
    id:newId,
}

users.push(newUser)

res.status(201).json(newUser)
})

router.put("/users/:id", (req, res) => {

const { firstName, lastName } = req.body
const id = parseInt(req.params.id)
const userIndex = users.findIndex((user) => user.id === id)

if (userIndex < 0)
    return res.status(404).json({ msg: "utilisateur non trouvé" })

if (firstName) users[userIndex].firstName = firstName
if (lastName) users[userIndex].lastName = lastName

res.json({
    msg: "utilisateur mis à jour",
    user: users[userIndex],
})


})

router.delete("/users/:id", (req, res) => {

const id = parseInt(req.params.id)

const userIndex = users.findIndex((user) => user.id === id)

if (userIndex < 0)
    return res.status(404).json({ msg: "utilisateur non trouvé" })



users.splice(userIndex, 1)

res.json({
    msg: "utilisateur suprimée",
})

})


module.exports = router