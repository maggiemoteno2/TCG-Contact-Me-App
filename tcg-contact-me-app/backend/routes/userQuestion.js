const User = require('../model/userSchema')

const postQuestion = (server) => {
  server.post('/user', async (req, res) => {
    const { name, email, surname, Mobile_Number,Question} = req.body
    try {
      const user = await new User({
        name,
        email,
        surname,
        Mobile_Number,
        Question

        
      }).save()
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
    }

  })
}

module.exports = {postQuestion}