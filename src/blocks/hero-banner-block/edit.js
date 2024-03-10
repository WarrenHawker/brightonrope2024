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
	MediaUpload,
	InnerBlocks,
	useBlockProps,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import { Button } from "@wordpress/components";

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

	const previewStyle = {
		backgroundImage: attributes.backgroundImage
			? `url(${attributes.backgroundImage})`
			: "none",
	};

	const onSelectImage = (media) => {
		setAttributes({ backgroundImage: media.url });
	};

	// const renderSelectedImage = (obj) => {
	// 	return wp.element.createElement(
	// 		wp.components.Button,
	// 		{
	// 			onClick: obj.open,
	// 			className: "button button-large",
	// 		},
	// 		attributes.backgroundImage ? "Change Image" : "Upload Image",
	// 	);
	// };

	return (
		<div {...blockProps} style={previewStyle} className="hero-banner-preview">
			<div className="hero-banner-inner-preview">
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes={[
						"image/gif",
						"image/jpeg",
						"image/png",
						"image/svg+xml",
						"image/webp",
					]}
					value={attributes.backgroundImage}
					render={({ open }) => (
						<Button className="button button-large" onClick={open}>
							{attributes.backgroundImage ? "Change Image" : "Upload Image"}
						</Button>
					)}
				/>
				<InnerBlocks />
			</div>
		</div>
	);
};

export default Edit;
