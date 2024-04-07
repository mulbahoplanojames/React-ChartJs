import { Bar } from "react-chartjs-2";
import { barData } from "../../Data/Data";

import {
	Chart as chartjs,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

const BarChart = () => {
	return (
		<>
			<div className='w-[400px] h-[300px] rounded-md shadow-2xl border-2 border-red-600 overflow-hidden'>
				<Bar data={barData} />;
			</div>
		</>
	);
};

export default BarChart;
