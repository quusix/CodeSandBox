document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.navigate').classList.toggle('open')
})
const notification = document.getElementById('navigate_notification_text')
let number = 0
notification.textContent = number
function increment() {
	number++, (notification.textContent = number)
}

function changequete(index) {
	let list = [
		'A sandbox needs no setup - new projects,  or start from a GitHub repo and begin coding in seconds.',
		'A sandbox needs no setup - new projects, or start from a GitHub repo',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ad!',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cupiditate eveniet veritatis delectus ullam voluptates quas aut laudantium nam tempore, ducimus quae fugit perferendis assumenda?',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus voluptate qui sed, error praesentium earum. Soluta aliquam porro odit.',
		'Lorem ipsum dolor sit amet.',
	]
	let selectedtext = list[index]
	let queteDisplay = document.getElementById('quete_text')
	queteDisplay.textContent = selectedtext
}
