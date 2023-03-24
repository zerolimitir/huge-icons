import Highlight, { defaultProps } from "prism-react-renderer";
import PrismTheme from "prism-react-renderer/themes/nightOwl";
import { FileWrite } from "react-huge-icons/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const ShowCodeJSX = ({ code, language }) => {
	const exampleCode = code.trim() || "//Zero Icon";
	const exampleLanguage = language.trim() || "jsx";

	const setCopy = () => {
		toast.success(`Copied to clipboard`, {
			position: "bottom-center",
			autoClose: 1000,
			closeOnClick: true,
			theme: "light",
		});
	};

	return (
		<Highlight
			{...defaultProps}
			code={exampleCode}
			language={exampleLanguage}
			theme={PrismTheme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				(className += " relative p-5 rounded-lg"),
				(
					<pre className={className} style={style}>
						<CopyToClipboard
							text={exampleCode}
							className="absolute top-2 right-2 cursor-pointer"
							onCopy={setCopy}>
							<FileWrite />
						</CopyToClipboard>

						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)
			)}
		</Highlight>
	);
};

export default ShowCodeJSX;
