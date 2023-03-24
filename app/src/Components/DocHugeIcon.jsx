import ShowCodeJSX from "./ShowCodeJSX";

const Installation = () => {
	return (
		<>
			<ShowCodeJSX code={``} />
		</>
	);
};
const Usage = () => {
	return (
		<>
			<h2>Installation For npm</h2>
			<ShowCodeJSX code={`npm i react-huge-icons`} language="bash"/>
		</>
	);
};
const DocHugeIcon = () => {
	return (
		<>
			<Installation />
			<Usage />
		</>
	);
};

export default DocHugeIcon;
