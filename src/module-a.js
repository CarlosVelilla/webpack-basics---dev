const SENDBTN = document.getElementById('send-btn')
const FORM = document.getElementById('form')
const MESSAGE = document.getElementById('message')


SENDBTN.addEventListener('click', event => {
  event.preventDefault()
  let form = new FormData(FORM)
  let username = form.get('user-name-input')
  let email = form.get('user-email-input')
  let rol = form.get('user-rol-input')
  let studies = []

  form.get('checkbox-javascript') == 'javascript' ? studies.push('Javascript') : ''
  form.get('checkbox-sass') == 'sass' ? studies.push('Sass') : ''
  form.get('checkbox-react') == 'react' ? studies.push('React') : ''

  let teacher
  let student

  if (rol == 'teacher') {
    teacher = new Teacher(username,email,rol,studies)
    MESSAGE.textContent = teacher.getHi()
  } else if (rol == 'student') {
    student = new Student(username,email,rol,studies)
    MESSAGE.textContent = student.getHi()
  }
})

class User {
  constructor(username, email) {
    this.username = username
    this.email = email
  }
}

class Teacher extends User {
  constructor(username, email, rol, studies) {
    super(username, email)
    this.rol = rol
    this.studies = studies
  }

  getHi() {
    return `Hi! I am ${this.username}, my email is ${this.email}, and I teach ${this.studies}`
  }
}

class Student extends User {
  constructor(username, email, rol, studies) {
    super(username, email)
    this.rol = rol
    this.studies = studies
  }

  getHi() {
    return `Hi! I am ${this.username}, my email is ${this.email}, and I am learning ${this.studies}`
  }
}