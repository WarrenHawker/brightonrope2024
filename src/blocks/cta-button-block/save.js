/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const save = ({ attributes }) => {
	const blockProps = useBlockProps.save();
	const {
		text,
		url,
		textColor,
		backgroundColor,
		borderColor,
		openInNewTab,
		textSize,
	} = attributes;

	const Styles = {
		color: textColor,
		backgroundColor: backgroundColor,
		borderColor: borderColor,
		fontSize: textSize,
	};
	return (
		<div {...blockProps} className="cta-button-block">
			<a
				className="cta-button"
				href={url}
				style={Styles}
				target={openInNewTab ? "_blank" : "_self"}
				rel="noopener"
			>
				{text}
			</a>
		</div>
	);
};

export default save;
