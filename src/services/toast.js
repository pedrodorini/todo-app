export const showToast = (text, variant = 'success', time = 6000) => {
  const root = document.getElementById('root')
  const toast = document.createElement('div')
  const paragraph = document.createElement('p')
  const dismiss = document.createElement('button')
  const close = document.createElement('span')
  const count = document.getElementsByClassName('toast').length || 0
  const id = `toast${count}`

  toast.id = id
  toast.classList.add('toast')
  toast.classList.add(`toast-${variant}`)
  toast.style.animation = 'toastIn .5s'

  paragraph.classList.add('toast-text')
  paragraph.textContent = text

  dismiss.classList.add('toast-dismiss')
  dismiss.addEventListener('click', () => removeToast(id))

  close.textContent = 'Fechar'

  dismiss.appendChild(close)

  toast.appendChild(paragraph)
  toast.appendChild(dismiss)

  root.appendChild(toast)

  setTimeout(() => removeToast(id), 6000)
}

const removeToast = id => {
  const element = document.getElementById(id)
  if (element) {
    element.style.animation = 'toastOut .5s linear'
    setTimeout(() => {
      const elem = document.getElementById(id)
      elem && elem.parentNode.removeChild(elem)
    }, 400)
  }
}
