//Retrieves the translation of text.
import { __ } from "@wordpress/i18n";

//package imports
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import "./editor.css";

/*
Edit React Component 

Runs all the code needed to display the custom block in the 
Wordpress page edit screen
*/

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const { maxWidth } = attributes;

	const previewStyles = {
		maxWidth: maxWidth,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label="Column Max Width"
						value={maxWidth}
						onChange={(maxWidth) => setAttributes({ maxWidth })}
						min={100}
						max={2000}
						step={100}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				className="brighton-rope-column-preview"
				style={previewStyles}
			>
				<InnerBlocks />
			</div>
		</>
	);
};

export default Edit;
