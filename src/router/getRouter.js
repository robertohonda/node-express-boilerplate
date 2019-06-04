import { Router } from 'express'
import controllerHandler from '../middlewares/controller'

export const getRouter = (routes) => {
  return routes.reduce((router, route) => {
    const {
      path,
      method,
      controller,
      middlewares = [],
      routes: childRoutes,
    } = route

    if (childRoutes != null)
      return router.use(path, ...middlewares, getRouter(childRoutes))
    return router[method](path, ...middlewares, controllerHandler(controller))
  }, Router())
}

export default getRouter
