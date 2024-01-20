const input = document.querySelector('.text-input')
const addBtn = document.querySelector('.btn-success')
const removeBtn = document.querySelector('.btn-danger')
const ul = document.querySelector('.list-group')
const bgInfo = document.querySelector('body')
const text = document.querySelector('.text-center')

addBtn.addEventListener('click', () => {
	bgInfo.style.background = randomColor()
	addList()
})

input.addEventListener('keydown', e => {
	// bgInfo.style.background = randomColor()
	text.style.color = randomColor()
	if (e.key === 'Enter') {
		addList()
	}
})

removeBtn.addEventListener('click', () => {
	ul.innerHTML = ''
})

input.addEventListener('keydown', ev => {
	if (ev.key === 'Backspace') {
		addList()
	}
})

function addList() {
	if (input.value.trim()) {
		ul.innerHTML += `<li class="list-group-item">${input.value}</li>`
		input.value = ''
	}
}

addBtn.addEventListener('click', () => {
	body.style.background = randomColor()
})

function randomColor() {
	let color = '#'
	for (let i = 1; i < 7; i++) color += Math.floor(Math.random() * 10)
	return color
}
randomColor()

text.addEventListener('click', () => {
	text.style.color = randomColor()
})
