const  base = `${process.env.REACT_APP_BACKEND_URL}/profile`

export async function tester() {
  try {
    const res = await fetch(`${base}`)
    return res.json()
  } 
  catch(err) {
    throw err
  }
}

