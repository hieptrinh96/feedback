const  base = `${process.env.REACT_APP_BACKEND_URL}`

const firstQuery = async () => {
  try {
    const res = await fetch(`${base}/profile`, {
      credentials: "include"
    })
    console.log('this is the res', res)
    return res.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  firstQuery
}