import db from '../db/db.js'
const showUser = (req, res) => {
    db.query('SELECT * FROM users WHERE email = ?', [req.user.email], (err, user) => {
      if (err) {
        res.status(500).json()
        console.log('The error from showUser function is ', err)
      }
      else {
        res.status(201).json(user)
      }
    })
}


export {
  showUser
}