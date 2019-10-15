(function () {
  const redInput = document.querySelector('.r-slide')
  const greenInput = document.querySelector('.g-slide')
  const blueInput = document.querySelector('.b-slide')
  const hexOutput = document.querySelector('.hex')

  function rgbToHex(rgb) {
    let hex = Number(rgb).toString(16)
    if (hex.length < 2) {
      hex = "0" + hex
    }
    return hex
  }

  function fullColorHex(r, g, b) {
    let red = rgbToHex(r)
    let green = rgbToHex(g)
    let blue = rgbToHex(b)
    return `#${red + green + blue}`
  }

  // 調整顏色
  function changeColor(event) {
    let redValue = redInput.value
    let greenValue = greenInput.value
    let blueValue = blueInput.value
    event.target.nextElementSibling.innerText = event.target.value
    hexOutput.innerText = fullColorHex(redValue, greenValue, blueValue)
    document.body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")"
  }

  // 監聽器設置
  redInput.addEventListener('input', function () {
    changeColor(event)
  })

  greenInput.addEventListener('input', function () {
    changeColor(event)
  })

  blueInput.addEventListener('input', function () {
    changeColor(event)
  })


})()