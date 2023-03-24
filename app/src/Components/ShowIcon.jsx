import * as ListIconOutline from "react-huge-icons/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowIcon = () => {
	const keys = Object.keys(ListIconOutline);

	const [copied, setCopied] = useState("");

	const setCopy = iconName => {
		setCopied(iconName);
		toast.success(`${copied} Copied to clipboard`, {
			position: "bottom-center",
			autoClose: 1000,
			closeOnClick: true,
			theme: "light",
		});
	};

	const colors = [
		"text-red-500",
		"text-sky-500",
		"text-blue-500",
		"text-orange-500",
		"text-amber-500",
		"text-yellow-500",
		"text-lime-500",
		"text-emerald-500",
		"text-green-500",
		"text-teal-500",
		"text-cyan-500",
		"text-indigo-500",
		"text-violet-500",
		"text-purple-500",
		"text-fuchsia-500",
		"text-pink-500",
		"text-rose-500",
	];

	return (
		<ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] text-">
			{keys &&
				keys.map((iconName, index) => {
					const IconComponent = ListIconOutline[iconName];
					return (
						<CopyToClipboard
							text={`<` + `${iconName} />`}
							onCopy={() => setCopy(iconName)}
							key={index}>
							<li className="p-5 flex flex-col items-center gap-3">
								<span
									className={`border-2 ${
										copied === iconName ? "border-red-700" : ""
									} rounded-lg p-5 cursor-pointer`}>
									<IconComponent
										size="7rem"
										className={colors[Math.floor(Math.random() * 17)]}
									/>
								</span>
								<span className="font-bold">{iconName}</span>
							</li>
						</CopyToClipboard>
					);
				})}
		</ul>
	);
};

export default ShowIcon;
