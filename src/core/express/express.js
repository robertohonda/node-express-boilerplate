import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from '../../routes'
import errors from '../../middlewares/errors'

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cors())

app.use(morgan('dev'))

app.disable('etag')

app.use('/api', routes)

app.use('/api', errors.handleError)

app.use('/api', errors.handleNotFound)

export default app
