import ShowIcon from "./Components/ShowIcon";
import { ToastContainer } from "react-toastify";
import DocHugeIcon from "./Components/DocHugeIcon";

function App() {
	return (
		<div className="container">
			<DocHugeIcon />

			<ShowIcon />

			<ToastContainer
				position="bottom-center"
				autoClose={1000}
				limit={2}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

export default App;
