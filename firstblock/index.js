var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType( 'skblocks/firstblock', {
	edit: function () {
		return createElement(
			'p',
			{ className: 'class' },
			'Hello World! - Edit'
		);
	},
	save: function () {
		return createElement( 'p', null, 'Hello World! - Save' );
	},
} );
