import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from '../../router'
import errors from '../../middlewares/errors'

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cors())

app.use(morgan('dev'))

app.disable('etag')

app.use('/api', router)

app.use('/api', errors.handleError)

app.use('/api', errors.handleNotFound)

export default app
