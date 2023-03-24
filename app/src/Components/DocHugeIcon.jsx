import ShowCodeJSX from "./ShowCodeJSX";

const Description = () => {
	return (
		<div className="flex flex-col gap-5 py-2 px-5">
			<h1 className="text-secondary text-base md:text-xl lg:text-2xl xl:text-3xl">
				Huge Icon
			</h1>

			<div className="flex flex-wrap gap-5">
				<img
					src="https://img.shields.io/github/stars/zero-icons/huge-icons?color=gold&style=flat"
					alt=""
				/>
				<img
					src="https://img.shields.io/github/forks/zero-icons/huge-icons?color=purple&style=flat"
					alt=""
				/>
				<img
					src="https://img.shields.io/npm/l/react-huge-icons?color=green&style=flat"
					alt=""
				/>
				<img
					src="https://img.shields.io/npm/v/react-huge-icons?color=blue&style=flat"
					alt=""
				/>
			</div>

			<div>
				<p>
					We are here to convert the Huge Icons package into a ReactJs package.
				</p>
				<p>Completing soon ...</p>
				<p> developing ...</p>
			</div>
		</div>
	);
};

const Installation = () => {
	return (
		<>
			<h2 className="py-2 px-5 text-primary font-bold text-base lg:text-lg xl:text-xl">
				Installation For npm
			</h2>
			<ShowCodeJSX code={`npm i react-huge-icons`} language="bash" />

			<h2 className="py-2 px-5 text-primary font-bold text-base lg:text-lg xl:text-xl">
				Installation For Yarn
			</h2>
			<ShowCodeJSX code={`yarn add react-huge-icons`} language="bash" />
		</>
	);
};

const Usage = () => {
	return (
		<>
			<div className="py-2 px-5">
				<h2 className="text-primary font-bold text-base lg:text-lg xl:text-xl">
					Usage
				</h2>
				<p>Outline Icons</p>
			</div>
			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/outline";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>

			<div className="py-2 px-5">
				<h2 className="text-primary font-bold text-base lg:text-lg xl:text-xl">
					Usage
				</h2>

				<p>Solid Icons</p>
			</div>
			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/solid";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>
		</>
	);
};

const DocHugeIcon = () => {
	return (
		<>
			<Description />
			<Installation />
			<Usage />
		</>
	);
};

export default DocHugeIcon;
