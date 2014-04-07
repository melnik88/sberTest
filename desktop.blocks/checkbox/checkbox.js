modules.define('checkbox', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('checkbox', {

	onSetMod : {
		'checked': function() {
//                        console.log (this.domElem.className)
		                this.domElem.hasClass('main-checkbox') ? console.log (this.findBlockOn('table', 'checkbox')): '';
		            }
	}
}));

});