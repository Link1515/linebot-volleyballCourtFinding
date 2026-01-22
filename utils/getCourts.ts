import { Court } from '@projectRoot/data/types'
import { promises as fs } from 'node:fs'
import { resolve } from 'node:path'
import { fetchCourts } from './fetchCourts'

const COURTS_JSON_FILE = resolve(__dirname, '../data/courts.json')

let courts: Court[] = []

export async function getCourts() {
  if (courts.length > 0) return courts

  if (!(await fileExists(COURTS_JSON_FILE))) {
    await fetchCourts()
  }

  try {
    courts = JSON.parse(await fs.readFile(COURTS_JSON_FILE, 'utf-8')) as Court[]
  } catch {
    return []
  }
  return courts
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}
