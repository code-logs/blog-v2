declare global {
  interface Window {
    gtag: (event: 'event', eventName: string, GtagParams?: {}) => void
  }
}

export const enum GtagEventName {
  BannerClick = 'BANNER_CLICK',
}

export class GTagUtil {
  static log(eventName: GtagEventName, params?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Gtag only prompt log on development environment')
      console.log({ eventName, params })
    } else {
      window.gtag('event', eventName, params)
    }
  }
}
