import express from './core/express'
import { PORT } from './config'

express.listen(PORT, () => console.log(`Server running on port ${PORT}`))
