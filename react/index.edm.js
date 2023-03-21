// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
	{},
	{
		get: (_, property) => {
			if (property === "__esModule") {
				return {};
			}

			throw new Error(
				`Importing from \`huge-icons/react\` directly is not supported. Please import from either \`huge-icons/react/solid/\`, or \`huge-icons/react/outline/\` instead.`,
			);
		},
	},
);
