import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Starting...')
    const logs = await prisma.log.findMany()
    console.log('Logs before', logs)
    const log = await prisma.log.create({
      data: { json: { a: 1 } }
    })
    console.log('Created log', log)
    const newLogs = await prisma.log.findMany()
    console.log('Logs after', newLogs)
    console.log('Done!')
  } catch (err) {
    console.error(err)
  }
}

main()
