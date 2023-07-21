const  base = `${process.env.REACT_APP_BACKEND_URL}`

const fetchUser = async () => {
  try {
    const res = await fetch(`${base}/profile`, {
      credentials: "include"
    })
    return res.json()
  } catch(err) {
    console.log(err)
  }
}

const logIn = async () => {
  try {
    const res = await fetch(`${base}/auth/google`, {
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET
    })
    return res.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  fetchUser,
  logIn
}