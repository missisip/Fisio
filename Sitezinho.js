let links = document.querySelectorAll('#menu a')

for (link of links) {
	let target = link.getAttribute('data-target')

	link.addEventListener('click', function() {
		mudaTela(target)
	})
}


function mudaTela(target) {
	let tela_target = document.getElementById(target)
	let link_target = document.querySelector('a[data-target="'+target+'"]')

	document.querySelector('div.tela.active').classList.remove('active')
	document.querySelector('a.active').classList.remove('active')

	tela_target.classList.add('active')
	link_target.classList.add('active')
}


