import BarChart from "./Components/Bar Chart/BarChart";
import LineChart from "./Components/Line Chart/LineChart";

const App = () => {
	return (
		<>
			<div className='flex justify-center items-center gap-10  h-[100vh]'>
				<LineChart />
				<BarChart />
			</div>
		</>
	);
};

export default App;
