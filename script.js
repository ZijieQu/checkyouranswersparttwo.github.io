const answerOne = document.getElementById('answerOne')
const answerTwo = document.getElementById('answerTwo')
const answerThree = document.getElementById('answerThree')
const answerFour = document.getElementById('answerFour')
const answerFive = document.getElementById('answerFive')
const answerSix = document.getElementById('answerSix')
const answerSeven = document.getElementById('answerSeven')
const answerEight = document.getElementById('answerEight')
const answerNigh = document.getElementById('answerNigh')
const answerTen = document.getElementById('answerTen')
const answerEleven = document.getElementById('answerEleven')
const answerTwelve = document.getElementById('answerTwelve')
const answerThirteen = document.getElementById('answerThirteen')
const answerFourteen = document.getElementById('answerFourteen')
const answerFifteen = document.getElementById('answerFifteen')
const answerSixteen = document.getElementById('answerSixteen')
const answerSeventeen = document.getElementById('answerSeventeen')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (answerOne.value === '' || answerOne.value == null) {
    messages.push('Answer is required')
  }

  if (answerOne.value == 58) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerTwo.value == 22) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerThree.value == 30) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerFour.value == 37) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerFive.value == 64) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerSix.value == 33) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerSeven.value == 14) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerEight.value == 62) {
    messages.push('20, correct')
  } else {
      messages.push('20, error')
    }

  if (answerNigh.value == 1997) {
    messages.push('correct')
  } else {
      messages.push('error')
    }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
