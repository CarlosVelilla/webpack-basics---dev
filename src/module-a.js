document.getElementById("root").innerHTML = `

<div class="backgroundimg"><img src="./img/jpg1.jpg"></div>
<div class="welcomeimg"><img src="./img/png2.png"></div>
<form id="form">
<h1>Welcome</h1>
<label for="user-name-input">What's your name?
<input type="text" id="user-name-input" name="user-name-input" required/>
</label>
<label for="user-email-input">What's your email?
<input type="text" id="user-email-input" name="user-email-input" required/>
</label>
<div>
<label for="user-rol-input"><img class="iconimg" src="./img/png1.png">I'm a teacher
<input type="radio" name="user-rol-input" value="teacher" required/>
</label>
<label for="user-rol-input"><img class="iconimg" src="./img/svg1.svg">I'm a student
<input type="radio" name="user-rol-input" value="student" required/>
</label>
</div>
<p>What do you want to teach/learn?</p>
<div>
<label for="checkbox-javascript">Javascript
<input type="checkbox" name="checkbox-javascript" value="javascript">
</label>
<label for="checkbox-sass">Sass
<input type="checkbox" name="checkbox-sass" value="sass">
</label>
<label for="checkbox-react">React
<input type="checkbox" name="checkbox-react" value="react">
</label>
</div>
<input type="submit" id="send-btn" value="Send"/>
</form>
<div id="message" class="message"></div>
<!--<div id="images" class="images">
<div class="imgflex"><p>jpg1</p><img src="./img/jpg1.jpg"></div>
<div class="imgflex"><p>png1</p><img src="./img/png1.png"></div>
<div class="imgflex"><p>png2</p><img src="./img/png2.png"></div>
<div class="imgflex"><p>svg1</p><img src="./img/svg1.svg"></div>
</div>-->
`

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

  form.get('checkbox-javascript') == 'javascript' ? studies.push(' Javascript') : ''
  form.get('checkbox-sass') == 'sass' ? studies.push(' Sass') : ''
  form.get('checkbox-react') == 'react' ? studies.push(' React') : ''

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
