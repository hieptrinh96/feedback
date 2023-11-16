import db from '../db/db.js'
import XLSX, { read } from 'xlsx'
const showUser = (req, res) => {
  const user = req.user
  const listOfPersonnels = readExcelFile()
  res.status(200).json(user)
  // if (user.email.includes('mil')) {
  //   db.query('update users set ')
  // }
}

const readExcelFile = () => {
  const path = '../server/references/Team List for Peer Feedback 2023Q2.xlsx'
  const tabs = XLSX.readFile(path)
  const personnel = tabs.SheetNames[0]
  const sheet = tabs.Sheets[personnel]
  const holder = []
  const listOfPersonnels = XLSX.utils.sheet_to_json(sheet)
  for (let i = 0; i < listOfPersonnels.length; i++) {
    const person = listOfPersonnels[i]
    holder.push(person)
  }
  // return listOfPersonnels
  // console.log(listOfPersonnels)
  // console.log(holder)
  return holder
}
// readExcelFile()

const recordUserData = (req, res) => {
  const user = req.user
  const listOFUsers = readExcelFile()
  for (let i = 0; i < listOFUsers.length; i++) {
    const userInfo = listOFUsers[i]
    if (user.email.includes('mil')) {
      if (user.email === user.displayName) {
        db.query(`update users set Name = ?, Cohort = ?, Current_Team = ?, SDU = ? WHERE Email = ${user.email}`, [userInfo['Name'], userInfo['Cohort'], userInfo['Current Team'], userInfo['SDU']], (err, result) => {
          if (err) console.log(err)
          console.log(`${user.displayName} was added`)
        })
      }
    }
  }
}

const teamChecker = (req, res) => {
  const user = req.user
  const userEmail = user.email
  if (userEmail.includes('atx')) {
    // display all members from ATX 
  }
  if (userEmail.includes('mil')) {
    const query = `select * from users where email = ?`
    const value = [userEmail]
    db.query(query, value, (err, results) => {
      if (err) console.error('There was an error', err)
      else console.log('This is the result of the query', results)
    })
  }
}

// const addToAdmins = (req, res) => {
//   const user = req.user
//   console.log('show me everything from the user', user)
// }

export {
  showUser,
  readExcelFile,
  recordUserData,
  teamChecker
  // addToAdmins
}