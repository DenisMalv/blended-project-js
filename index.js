const books = [
	{
		id: "1",
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
	},
	{
		id: "2",
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
	{
		id: "3",
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];

const allbooks = document.querySelector('#root');
console.log(allbooks)
const main = document.createElement('div')
main.className = 'main_div'
// main.textContent = 'This is a main-div'
root.appendChild(main);
// левый див
const left_div = document.createElement('div')
left_div.className = 'left_div'
main.appendChild(left_div);

const left_div_list = document.createElement('ul')
left_div.appendChild(left_div_list)

left_div_list.className = 'books_list'
const listBooks = document.querySelector('.books_list')

const left_div_button = document.createElement('button')
left_div_button.className = 'button_Add'
left_div_button.textContent = 'Add'
left_div.appendChild(left_div_button)
const addButton = document.querySelector('.button_Add')
addButton.addEventListener('click', addNewBook)

// правый див
const right_div = document.createElement('div')
right_div.className = 'right_div'
main.appendChild(right_div);
const rightDiv = document.querySelector('.right_div')





function renderList() {
	const listMarkUp = books.map(({ title }) => {
		return `<li class="books_item">
		<p class='title_text'>${title}</p>
		<button class='delete'>Delete
		</button>
		<button class='edit'>Edit
		</button>
		</li>`
	}).join('')
	listBooks.insertAdjacentHTML('beforeend', listMarkUp)
	const titleText = document.querySelectorAll('.title_text')
	titleText.forEach(item => item.addEventListener('click', renderPreview))
	const deleteButton = document.querySelectorAll('.delete')
	const editButton = document.querySelectorAll('.edit')
	deleteButton.forEach(button => button.addEventListener('click',deleteBook))
	editButton.forEach(button => button.addEventListener('click',editContent))
}
renderList()

function deleteBook() {
	console.log('delete')
}
function editContent() {
	console.log('edit')
}
function addNewBook() {
	console.log('add')
}

function renderPreviewMarkUp({title, author, img, plot}) {
	return `
	<div>
        <h2>${title}</h2>
        <p>${author}</p>
        <img src=${img} alt=${title}>
		<p>${plot}</p>
    </div>
	`
}

function renderPreview(event) {
	console.log(event.target)
	const result = books.find(element => element.title === event.target.innerText)
	rightDiv.innerHTML = ''
rightDiv.insertAdjacentHTML('beforeend', renderPreviewMarkUp(result))
 console.log(result)
}


