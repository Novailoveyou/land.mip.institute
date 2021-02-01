import '../scss/main.scss'

const btnsRipple = document.querySelectorAll('.btn')
const learnMoreBtn = document.getElementById('js-learn-more')

const hide = (el) => {
  el.classList.add('hiding')
  setTimeout(() => {
    el.classList.remove('hiding')
    el.classList.add('hidden')
  }, 300)
}

const addRipplesToBtns = (selectedClass = null) => {
  if (selectedClass !== null) {
    selectedClass.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const circle = document.createElement('span')
        circle.classList.add('btn__circle')
        circle.style.top = y + 'px'
        circle.style.left = x + 'px'

        this.appendChild(circle)

        setTimeout(() => {
          circle.remove()
        }, 500)
      })
    })
  }
}

const showHiddenForm = (e) => {
  const hiddenForm = document.getElementById('js-hidden-form')
  hiddenForm.classList.add('show')
  hide(e.target)
}

addRipplesToBtns(btnsRipple)

learnMoreBtn.addEventListener('click', showHiddenForm)
