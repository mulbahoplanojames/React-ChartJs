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
			label: "My First Dataset",
			data: [65, 59, 80, 81, 56, 55, 40, 34],
			borderColor: "rgb(75, 192, 192)",
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
