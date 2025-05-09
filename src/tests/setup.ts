import { beforeAll, afterEach, afterAll } from 'vitest'
import supertest, { SuperAgentTest } from 'supertest'
import { Server } from 'http'
import app from '../index'

let server: Server
let request: SuperAgentTest

beforeAll(async () => {
  server = app.listen(0)
  request = supertest(app) as unknown as SuperAgentTest
})

afterEach(async () => {
  console.log('After each')
})

afterAll(async () => {
  server.close()
})

export { request }
