import { NOT_FOUND } from 'http-status'
import APIError from '../helpers/APIError'
import { NOT_FOUND as NOT_FOUND_TYPE } from '../errors'

export const handleResponse = (err, res) => {
  const response = new APIError(err)

  // if (NODE_ENV !== 'development') {
  //   delete response.stack
  // }

  res.status(response.status)
  res.json(response)
}

export const handleError = (err, req, res, next) => {
  handleResponse(err, res)
}

export const handleNotFound = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: NOT_FOUND,
    type: NOT_FOUND_TYPE,
  })

  handleResponse(err, res)
}

export default {
  handleResponse,
  handleError,
  handleNotFound,
}
