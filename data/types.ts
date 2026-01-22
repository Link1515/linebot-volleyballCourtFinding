type OpenState = 'E' | 'H' | 'N' | 'O' | 'W'

type RentState = '不開放對外場地租借' | '付費對外場地租借' | '免費對外場地租借'

export interface Court {
  GymID: number
  Name: string
  OperationTel: string
  Address: string
  Rate: number
  RateCount: number
  Distance: number
  GymFuncList: string
  Photo1: string
  LatLng: string
  RentState: RentState
  OpenState: OpenState
  Declaration: null | string
  LandAttrName: string
}
