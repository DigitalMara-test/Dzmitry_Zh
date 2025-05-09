import express from 'express'
import logRoutes from './routes/logs'

const app = express()
app.use(express.json())

app.use('/api/logs', logRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`> Running on http://localhost:${PORT}`)
})
