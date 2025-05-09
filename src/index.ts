import path from 'node:path'
import express from 'express'
import logRoutes from './routes/logs'

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/logs', logRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`> Running on http://localhost:${PORT}`)
})

export default app
