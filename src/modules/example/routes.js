import { GET } from '../../router/methods'

const routes = [
  {
    path: '/',
    method: GET,
    middlewares: [(req, res, next) => console.log('oi') || next()],
    controller: () => ({ message: 'oi' }),
  },
]

export default routes
