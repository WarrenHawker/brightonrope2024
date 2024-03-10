//Retrieves the translation of text.
import { __ } from "@wordpress/i18n";

//package imports
import {
	MediaUpload,
	InnerBlocks,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.css";

/*
Edit React Component 

Runs all the code needed to display the custom block in the 
Wordpress page edit screen
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

	return (
		<div {...blockProps} style={previewStyle} className="hero-banner-preview">
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
					<Button
						className="button button-large btn-change-image"
						onClick={open}
					>
						{attributes.backgroundImage ? "Change Image" : "Upload Image"}
					</Button>
				)}
			/>
			<InnerBlocks />
		</div>
	);
};

export default Edit;
