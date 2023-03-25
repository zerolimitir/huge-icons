var React = require("react");

function GenIcon({ tag, attr, child }) {
	return function ({ size, ref, ...props }) {
		return (
			child &&
			React.createElement(
				/* Tag name Component */
				tag || "svg",

				/* Tag Attr Component */
				Object.assign(
					{
						width: size || "1rem",
						height: size || "1rem",
						ref: ref,
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "none",
					},
					attr,
					props,
				),

				/* Cilde Tag Components */
				child.map(({ tag, attr }, index) => {
					return React.createElement(
						React.Fragment,
						{ key: index },
						React.createElement(tag, { ...attr }),
					);
				}),
			)
		);
	};
}

module.exports.GenIcon = GenIcon;
