const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let nome = document.getElementById('name').value
  let email = document.getElementById('email').value
  let data = {
    nome,
    email
  }
  let convertData = JSON.stringify(data)
  localStorage.setItem('lead', convertData)

  let response = document.getElementById('content')
  let carregando = '<p>carregando...</p>'
  let pronto = '<p>Cadastro Realizado!</p>'
  response.innerHTML = carregando

  setTimeout(() => {
    response.innerHTML = pronto
  }, 1000)

  setTimeout(() => {
    location.reload()
  }, 3000)
 
})