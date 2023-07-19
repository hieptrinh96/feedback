const checkAuth = (req, res, next) => {
  return req.user ? next() : res.status(401).json({message: 'Not Authorized'})
}

export { checkAuth}