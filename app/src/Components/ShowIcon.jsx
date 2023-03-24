import * as ListIcon from "react-huge-icons/outline";

const ShowIcon = () => {
	// const Icons = Object.entries(ListIcon);
	const keys = Object.keys(ListIcon);

	const colors = [
		"text-gray-500",
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
		// grid grid-cols-2 sm:grid-cols-4
		<div className="container">
			<ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] text-">
				{keys &&
					keys.map((iconName, index) => {
						const IconComponent = ListIcon[iconName];
						return (
							<li className=" p-5 flex flex-col items-center gap-3">
								<span className="border rounded-lg p-5">
									<IconComponent key={index} size="5rem" className={colors[Math.floor(Math.random() * 18)]} />
								</span>
								<span className="font-bold">{iconName}</span>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ShowIcon;
