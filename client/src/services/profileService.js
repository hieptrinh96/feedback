const  base = `${process.env.REACT_APP_BACKEND_URL}`

const fetchUser = async () => {
  try {
    const res = await fetch(`${base}/profile`, {
      credentials: "include"
    })
    if (!res.ok) throw new Error (`HTTP error! status: ${res.status}`)
    const data = await res.json()
    return data
  } catch(err) {
    console.log('Error fetching users: ', err)
  }
}

const fetchTeam = async () => {
  try {
    const res = await fetch(`${base}/profile/teamCheck`, {
      credentials: 'include'
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    console.log('Checking if this function is running')
    const data = await res.json()
    return data
  } catch(err) {
    console.log('Error fetching teams', err)
  }
}

const logIn = async () => {
  const queryParams = new URLSearchParams({
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: `${base}/auth/google/callback`,
    response_type: 'code',
    scope: 'profile email',
    prompt: 'select_account'
  })
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${queryParams}`;
  window.location.href = authUrl
}

const logOut = async () => {
  console.log('Attempting to log out')
  try {
    const response = await fetch(`${base}/auth/logout`, {
      method: 'get',
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Response from logout:', data.message)
    sessionStorage.removeItem('userToken')
    document.cookie = 'googleAuthToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
  } catch (err) {
    console.error('Log out failed', err)
  }
}

const checkLoginStatus = async () => {
  try {
    const response = await fetch(`${base}/auth/login/success`, {
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok && data.user) console.log('User is authenticated', data.user)
    else console.log('User is not authenticated')
    
  } catch(err) {
    console.error('An error occurred while checking the login status', err)
  }
}

export {
  fetchUser,
  logIn,
  logOut,
  checkLoginStatus,
  fetchTeam
}