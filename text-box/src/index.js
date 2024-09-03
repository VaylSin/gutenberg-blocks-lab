import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('skblocks/text-box', {
	icon: {
		background: '#f03',
		foreground: '#fff',
		src: 'text-page',
	},
	edit: Edit,
	save,
});
