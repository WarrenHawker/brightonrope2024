//Retrieves the translation of text.
import { __ } from "@wordpress/i18n";

//package imports
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.css";

/*
Edit React Component 

Runs all the code needed to display the custom block in the 
Wordpress page edit screen
*/

const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} className="brighton-rope-column-preview">
			<InnerBlocks />
		</div>
	);
};

export default Edit;
