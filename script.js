document.getElementById('button').addEventListener('click', pricing)
let age = 0
let day = 0

function pricing () {
  age = document.getElementById('age-input').value
  age = parseInt(age)
  day = document.getElementById('day-input').value

  if ((age > 12 && age < 21) || (day === 'tuesday' || day === 'thursday')) {
    age = document.getElementById('result').innerHTML = 'You get the student pricing.'
  } else {
    age = document.getElementById('result').innerHTML = 'You don\'t apply for the student pricing.'
  } document.getElementById('result').style.display = 'block'
}
