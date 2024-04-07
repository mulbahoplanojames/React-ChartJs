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
	id: "1",
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

export const pieData = {
	labels: ["Rent", "Food", "Cloth", "Water", "Shoes", "Eletricity"],
	id: "2",
	datasets: [
		{
			label: "My Living Expense in RWF",
			data: [170000, 40000, 90000, 15000, 40000, 15000],
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#FFCEf6",
				"#FFAE56",
				"#b48484",
			],
			hoverBackgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#FFCEf6",
				"#FFAE56",
				"#b48484",
			],
		},
		// {
		// 	label: "My Friend Living Expense in RWF",
		// 	data: [170000, 40000, 90000, 15000, 40000, 15000],
		// 	backgroundColor: ["red", "green", "#000", "tomato", "purple", "skyblue"],
		// 	hoverBackgroundColor: [
		// 		"#FF6384",
		// 		"#36A2EB",
		// 		"#FFCE56",
		// 		"#FFCEf6",
		// 		"#FFAE56",
		// 		"#b48484",
		// 	],
		// },
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
	id: "3",
	datasets: [
		{
			label: "Exercise Duration (minutes)",
			data: [30, 40, 55, 40, 50, 55, 35],
			borderColor: "rgba(75, 192, 192, 1)",
			backgroundColor: "rgba(75, 192, 192, 0.2)",
		},
		{
			label: "My Exercise Duration (minutes)",
			data: [40, 65, 35, 30, 64, 25, 55],
			borderColor: "rgba(240, 192, 192, 192)",
			backgroundColor: "rgba(75, 192, 192, 0.2)",
		},
	],
};

export default lineData;
