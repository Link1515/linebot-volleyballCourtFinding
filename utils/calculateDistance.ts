export interface LatLng {
  latitude: number
  longitude: number
}

// nm = nautical mile
export type Unit = 'km' | 'nm' | 'm'

const EARTH_RADIUS = {
  km: 6371.0088,
  m: 6371008.8,
  nm: 3440.0695
}

export function calculateDistance(a: LatLng, b: LatLng, unit: Unit = 'km') {
  const lat1 = toRad(a.latitude)
  const lat2 = toRad(b.latitude)
  const dLat = lat2 - lat1
  const dLon = toRad(b.longitude - a.longitude)

  // Harversine
  const sinDLat = Math.sin(dLat / 2)
  const sinDLon = Math.sin(dLon / 2)
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon

  const clampedH = Math.min(1, Math.max(0, h))
  const c = 2 * Math.asin(Math.sqrt(clampedH))

  return EARTH_RADIUS[unit] * c
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}
