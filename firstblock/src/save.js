import { useBlockProps } from '@wordpress/block-editor';

export default function () {
	const blockProps = useBlockProps.save();
	return <p { ...blockProps }>Save JSX compiled</p>;
}
