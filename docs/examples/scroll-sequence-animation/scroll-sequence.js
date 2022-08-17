'use strict'

const imageSources = Array(121)
  .fill('')
  .map((_, idx) => `./images/${String(idx + 1).padStart(3, '0')}.png`)

const computeStartScrollY = () => {
  let prevElementSibling = wrapper.previousElementSibling
  let height = 0
  while (prevElementSibling) {
    height += prevElementSibling.offsetHeight
    prevElementSibling = prevElementSibling.previousElementSibling
  }

  return height
}

const initFirstFrame = () => {
  const image = new Image()
  image.src = imageSources[0]
  image.onload = () =>
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
}

const preloadImages = () => {
  imageSources.forEach((imgSrc) => {
    const img = new Image()
    img.src = imgSrc
  })
}

const onScrollHandler = () => {
  requestAnimationFrame(render)
}

const currentFrameIndex = () => {
  const index = Math.floor((main.scrollTop - startScrollY) / standardHeight)
  if (index < 0) return 0
  if (!imageSources[index]) return imageSources.length - 1

  return index
}

const render = () => {
  const frameIndex = currentFrameIndex()
  const image = new Image()
  image.src = imageSources[frameIndex]
  context.drawImage(image, 0, 0, canvas.width, canvas.height)
}

const main = document.querySelector('main')
main.onscroll = onScrollHandler

const wrapper = document.querySelector('#wrapper')
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.width = wrapper.offsetWidth
canvas.height = (canvas.width / 3) * 2

canvas.style.position = 'sticky'
canvas.style.top = '50%'
canvas.style.transform = 'translateY(-50%)'

wrapper.append(canvas)

const startScrollY = computeStartScrollY()
const standardHeight = canvas.height / imageSources.length

initFirstFrame()
preloadImages()
