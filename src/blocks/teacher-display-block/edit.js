//Retrieves the translation of text.
import { __ } from "@wordpress/i18n";

//package imports
import { useBlockProps } from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import "./editor.css";

/*
Edit React Component 

Runs all the code needed to display the custom block in the 
Wordpress page edit screen
*/

const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} className="teacher-grid-preview">
			<ServerSideRender block="brighton-rope/teacher-block" />
		</div>
	);
};

export default Edit;
