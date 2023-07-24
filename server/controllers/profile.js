import db from '../db/db.js'
import XLSX from 'xlsx'
const showUser = (req, res) => {
  const user = req.user
  const listOfPersonnels = readExcelFile()
  // if (user.email.includes('mil')) {
  //   db.query('update users set ')
  // }
}

const readExcelFile = () => {
  const path = '../../server/references/Team List for Peer Feedback 2023Q2.xlsx'
  const tabs = XLSX.readFile(path)
  const personnel = tabs.SheetNames[0]
  const sheet = tabs.Sheets[personnel]
  const listOfPersonnels = XLSX.utils.sheet_to_json(sheet)
  // for (let i = 0; i < listOfPersonnels.length; i++) {
  //   const person = listOfPersonnels[i]
  //   console.log(person)
  // }
  return listOfPersonnels
}

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

recordUserData()

export {
  showUser,
  readExcelFile
}