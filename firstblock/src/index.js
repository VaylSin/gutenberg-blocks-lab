import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import "./style.scss";
import "./editor.scss";

registerBlockType( 'skblocks/firstblock', {
    edit: function () {
        const blockProps = useBlockProps();
		return <p {...blockProps}>Edit JSX compiled</p>;
	},
    save: function () {
        const blockProps = useBlockProps.save();
		return <p {...blockProps}>Save JSX compiled</p>;
	},
} );
