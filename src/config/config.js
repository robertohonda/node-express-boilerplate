import dotenv from 'dotenv'

dotenv.config()

export const { PORT } = process.env

export default {
  PORT,
}
