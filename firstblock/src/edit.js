import { useBlockProps } from '@wordpress/block-editor';
import "./editor.scss";

export default function () {
	const blockProps = useBlockProps();
	return <p { ...blockProps }>Edit JSX compiled</p>;
}
