import { describe, it, expect } from 'vitest'
import { request } from './tests/setup'

describe('backend', () => {
  describe('POST /api/logs', () => {
    it('returns error if body is missing', async () => {
      const res = await request.post('/api/logs').send()
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Invalid JSON format')
    })

    it('returns error if body is not json', async () => {
      const res = await request.post('/api/logs').send('123asd')
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Invalid JSON format')
    })

    it('creates log entry', async () => {
      const res = await request
        .post('/api/logs')
        .send({ message: 'new entry 1' })

      expect(res.status).toBe(201)
      expect(typeof res.body.id).toBe('string')
      expect(res.body.inserted_at).toBeDefined()
      expect(res.body.json).toStrictEqual({ message: 'new entry 1' })
    })
  })

  describe('GET /api/logs', () => {
    it('returns list of log entries', async () => {
      const res = await request.get('/api/logs')
      expect(res.status).toBe(200)
      expect(res.body.length).toBeGreaterThan(0)
    })
  })
})
