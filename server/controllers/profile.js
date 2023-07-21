import db from '../db/db.js'
import XLSX from 'xlsx'
const showUser = (req, res) => {
  const user = req.user
  if (user.email.includes('atx')) {
    
  }
}

const readExcelFile = () => {
  const path = '../../server/references/Team List for Peer Feedback 2023Q2.xlsx'
  const tabs = XLSX.readFile(path)
  const personnel = tabs.SheetNames[0]
  const sheet = tabs.Sheets[personnel]
  const listOfPersonnels = XLSX.utils.sheet_to_json(sheet)
  return listOfPersonnels
}

  readExcelFile()

export {
  showUser,
  readExcelFile
}