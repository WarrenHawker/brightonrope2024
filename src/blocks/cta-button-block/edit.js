//Retrieves the translation of text.
import { __ } from "@wordpress/i18n";

//package imports
import {
	useBlockProps,
	URLInput,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	TextControl,
	ToggleControl,
	PanelBody,
	FontSizePicker,
} from "@wordpress/components";
import "./editor.css";

/*
Edit React Component 

Runs all the code needed to display the custom block in the 
Wordpress page edit screen
*/

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const {
		text,
		url,
		textColor,
		backgroundColor,
		borderColor,
		openInNewTab,
		textSize,
	} = attributes;
	const disableLink = (e) => {
		e.preventDefault();
	};

	const previewStyles = {
		color: textColor,
		backgroundColor: backgroundColor,
		borderColor: borderColor,
		fontSize: textSize,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<URLInput
						value={url}
						label="Link URL"
						onChange={(url) => {
							setAttributes({ url });
						}}
					/>
					<TextControl
						label="Button Text"
						value={text}
						onChange={(text) => setAttributes({ text })}
					/>
					<ToggleControl
						label="Open link in New Tab"
						checked={openInNewTab}
						onChange={(openInNewTab) => setAttributes({ openInNewTab })}
					/>
					<PanelColorSettings
						title={__("CTA button Color Settings", "brighton-rope-cta")}
						icon="art"
						initialOpen={false}
						colorSettings={[
							{
								value: textColor,
								onChange: (textColor) => setAttributes({ textColor }),
								label: __("Font Color", "brighton-rope-cta"),
							},
							{
								value: backgroundColor,
								onChange: (backgroundColor) =>
									setAttributes({ backgroundColor }),
								label: __("Background Color", "brighton-rope-cta"),
							},
							{
								value: borderColor,
								onChange: (borderColor) => setAttributes({ borderColor }),
								label: __("Border Color", "brighton-rope-cta"),
							},
						]}
					></PanelColorSettings>
					<FontSizePicker
						value={textSize}
						withSlider={true}
						onChange={(newFontSize) => {
							setAttributes({ textSize: newFontSize });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps} className="cta-button-block-preview">
				<a
					className="cta-button"
					href={url}
					onClick={disableLink}
					style={previewStyles}
					target={openInNewTab ? "_blank" : "_self"}
				>
					{text}
				</a>
			</div>
		</>
	);
};

export default Edit;
