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

export {
  fetchUser
}