window.addEventListener('scroll', scrolling);

openModalButtons.foreach(button=> {

	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);

	})
});

function scrolling() {
	let header = document.querySelector('header');
	header.classList.toggle('scrolling-active', window.scrollY > 0);

}

function scrollToTim() {
	window.scrollTo({
		top: 930,
		behavior: 'smooth'
	});
}
