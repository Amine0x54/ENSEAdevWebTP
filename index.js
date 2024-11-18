const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")

app.use(express.json());

app.use("/api/", usersRouter)

app.get('/', (req, res) => {
        res.json(users)
});

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});


app.delete("/", (req, res) => {
	res.json({
		msg: "hello rest api ici le delete",
	})
})

app.post("/", (req, res) => {
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

app.put("/:id", (req, res) => {

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

app.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })



    users.splice(userIndex, 1)

	res.json({
		msg: "utilisateur suprimée",
	})

})
app.use("/api/", usersRouter)