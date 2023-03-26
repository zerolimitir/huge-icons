module.exports = {
	ref: true,
	titleProp: true,
	replaceAttrValues: {
		"#28303F": "currentColor",
	},
	svgProps:{
		width:"{props.size || '1rem'}",
		height:"{props.size || '1rem'}"
	}
};
