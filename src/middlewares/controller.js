export const controllerHandler = (promise) => (req, res, next) =>
  Promise.resolve(promise(req, res, next)).then((result) =>
    res.json(result || { message: 'OK' }),
  )

export default controllerHandler
