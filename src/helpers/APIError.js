import { INTERNAL_SERVER_ERROR } from 'http-status'
import { INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERROR_TYPE } from '../errors'

export class APIError {
  constructor(params) {
    this.status = params.status || INTERNAL_SERVER_ERROR
    this.type = params.type || INTERNAL_SERVER_ERROR_TYPE
    this.message = params.message
    this.stack = params.stack
    this.errors = params.errors
  }
}

export default APIError
