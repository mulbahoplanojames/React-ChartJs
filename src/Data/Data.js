export const barData = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"august",
	],
	datasets: [
		{
			label: "My Cash Spend Per Month",
			data: [165, 259, 80, 121, 96, 85, 240, 134],
			borderColor: "rgb(75, 12, 19)",
			backgroundColor: "rgb(75, 192, 19)",
			tension: 0.1,
		},
		{
			label: "My Girlfriend Cash Spend Per Month",
			data: [345, 359, 230, 181, 256, 55, 410, 344],
			borderColor: "rgb(75, 12, 19)",
			backgroundColor: "rgb(75, 192, 192)",
			tension: 0.1,
		},
		{
			label: "Our Son Cash Spend Per Month",
			data: [445, 412, 325, 481, 356, 255, 510, 544],
			borderColor: "rgb(75, 12, 19)",
			backgroundColor: "rgb(75, 19, 192)",
			tension: 0.1,
		},
	],
};

const lineData = {
	labels: [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	],
	datasets: [
		{
			label: "Exercise Duration (minutes)",
			data: [30, 45, 55, 40, 50, 55, 35],
			borderColor: "rgba(75, 192, 192, 1)",
			backgroundColor: "rgba(75, 192, 192, 0.2)",
		},
	],
};

export default lineData;
