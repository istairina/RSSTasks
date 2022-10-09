function Carousel(setting) {

	/* Scope privates methods and properties */
	let privates = {};

	/* Privates properties */
	privates.setting = setting;

	privates.sel = {
		"main": document.querySelector(privates.setting.main),
		"wrap": document.querySelector(privates.setting.wrap),
		"children": document.querySelector(privates.setting.wrap).children,
		"prev": document.querySelector(privates.setting.prev),
		"next": document.querySelector(privates.setting.next)
	};

	privates.opt = {
		"position": 0,
		"max_position": document.querySelector(privates.setting.wrap).children.length
	};

	// Control
	if(privates.sel.prev !== null) {
		privates.sel.prev.addEventListener('click', () => {
			this.prev_slide();
		});
	}

	if(privates.sel.next !== null) {
		privates.sel.next.addEventListener('click', () => {
			this.next_slide();
		});
	}

}