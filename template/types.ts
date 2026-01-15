export interface Hero {
  type: string
  url: string
  size: string
  aspectMode: string
  aspectRatio: string
}

export interface FluffyContent {
  type: string
  wrap: boolean
  color: string
  size: string
  flex: number
  text: string
}

export interface PurpleContent {
  type: string
  layout: string
  spacing: string
  contents: FluffyContent[]
}

export interface BodyContent {
  type: string
  text?: string
  weight?: string
  size?: string
  align?: string
  wrap?: boolean
  layout?: string
  contents?: PurpleContent[]
}

export interface Body {
  type: string
  layout: string
  contents: BodyContent[]
  spacing: string
  paddingAll: string
}

export interface Action {
  type: string
  label: string
  text: string
}

export interface ContentsContent {
  type: string
  size: string
  hero: Hero
  body: Body
  action: Action
}

export interface Contents {
  type: string
  contents: ContentsContent[]
}

export interface FlexPlaces {
  type: string
  altText: string
  contents: Contents
}
