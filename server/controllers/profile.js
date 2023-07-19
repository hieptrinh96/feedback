import db from '../db/db.js'
const showUser = (req, res) => {
  const user = req.user
  // console.log('the user is', req.sessionStore.sessions)
  // console.log('res = ', res)
  // console.log('the req.user is', user)
  db.query('SELECT * FROM users WHERE email = ?', [user.email], (err, user) => {
    if (err) {
      res.status(500).json()
      console.log('The error from showUser function is ', err)
    }
    else {
      res.status(200).json(user)
    }
  })
}


export {
  showUser
}