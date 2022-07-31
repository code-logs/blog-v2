`focus` 속성은 브라우저와 OS 환경에 따라 약간의 차이를 보이는데 정리하자면 다음과 같다.

[Clicking and focus - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)

표에서 보는바와 같이 `Safari`는 `<button>`, `<input type=”button” />`, `<input type="submit" />` 의 `focus` 속성을 지원하지 않는다.

```html
<button id="button">Button</button>

<script>
  const button = document.querySelector('#button')
  button.addEventListener('click', () => console.log('Click on button'))
  button.addEventListener('focus', () => console.log('Focus on button'))
</script>
```

위 `html` 을 통해 생성된 `<button />`을 클릭하고 개발자 도구의 `console`을 확인하면

`Chrome`의 경우 - Focus on button 과 Click on button 을 번갈아 가며 출력하는 반면

`Safari`의 경우 - Click on button 만 출력하게 된다.

이러한 특성에 기인하여
`focus`, `focus-within` , `focus-visible` 등의 의사 클래스를 통한 DOM 조작이 예상치 못한 방향으로 흘러 갈 수 있으니 주의해야 한다.
