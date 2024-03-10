/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	URLInput,
	InspectorControls,
	SelectControl,
	PanelColorSettings,
	RichText,
	BlockEdit,
} from "@wordpress/block-editor";

import {
	TextControl,
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
	ColorPicker,
	FontSizePicker,
} from "@wordpress/components";

import { __experimentalDimensionControl as DimensionControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.css";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
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
