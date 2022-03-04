interface GAConfig {
  id: string
}

const gaConfig: GAConfig = {
  id: process.env.NEXT_PUBLIC_GA_ID || ''
}

export default gaConfig
