import jwt_decode from 'jwt-decode'

function setToken(token) {
  localStorage.setItem('code', token)
}

function getToken() {
  let token = localStorage.getItem('code')
  if (token) {
    const payload = jwt_decode(token)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('code')
      token = null
    }
  }
  else {
    localStorage.removeItem('code')
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  return token ? jwt_decode(token).user : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken}