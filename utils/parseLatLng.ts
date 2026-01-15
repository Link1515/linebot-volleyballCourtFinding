import { Location } from '@utils/calculateDistance'

export function parseLatLng(latLng: string): Location | null {
  const parts = latLng.split(',').map(s => s.trim())
  if (parts.length !== 2) return null
  const latitude = Number(parts[0])
  const longitude = Number(parts[1])

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null

  return { latitude, longitude }
}
