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

const addtoDB = () => {
  const listOfPersonnels = readExcelFile()
  listOfPersonnels.forEach(person => {
    const sqlQuery = 'insert into users (Name, Cohort, Current_Team, SDU, Email) values (?, ?, ?, ?, ?)'
    const example = 'select * from users'
    const sqlValues = [person.Name, person.Cohort, person['Current Team'], person.SDU, person.Email]
    console.log('sqlValues =', sqlValues)
    db.query(sqlQuery, sqlValues, (error, results, fields) => {
      if (error) console.error('There is an error', error)
      else console.log(results)
    })
    
  })
}

// const addToAdmins = (req, res) => {
//   const user = req.user
//   console.log('show me everything from the user', user)
// }

export {
  showUser,
  readExcelFile,
  recordUserData,
  addtoDB,
  // addToAdmins
}