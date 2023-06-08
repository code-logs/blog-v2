export interface KakaoAdfitProps {
  adfitUnitID: string
  position: 'main' | 'aside'
}

export default function KakaoAdfitBanner(props: KakaoAdfitProps) {
  let width: number
  let height: number

  if (props.position === 'main') {
    width = 320
    height = 100
  } else {
    width = 160
    height = 600
  }

  return <ins className="kakao_ad_area" style={{ display: 'none' }} data-ad-unit={props.adfitUnitID} data-ad-width={width} data-ad-height={height}></ins>
}
