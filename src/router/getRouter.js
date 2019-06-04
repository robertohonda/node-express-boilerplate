import { Router } from 'express'
import controllerHandler from '../middlewares/controller'

export const getRouter = (routes) => {
  const router = Router()

  routes.forEach(
    ({ path, method, controller, middlewares = [], routes: childRoutes }) => {
      if (childRoutes != null) {
        router.use(path, ...middlewares, getRouter(childRoutes))
        return
      }
      router[method](path, ...middlewares, controllerHandler(controller))
    },
  )

  return router
}

export default getRouter
