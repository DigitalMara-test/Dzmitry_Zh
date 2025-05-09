import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  try {
    console.log('GET /api/logs')
    const logs = await prisma.log.findMany({
      orderBy: {
        inserted_at: 'desc'
      }
    })
    res.json(logs)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch logs' })
  }
})

router.post('/', async (req, res) => {
  try {
    console.log('POST /api/logs', req.body)
    const log = await prisma.log.create({
      data: { json: req.body }
    })
    res.json(log)
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: 'Invalid JSON format' })
  }
})

export default router
