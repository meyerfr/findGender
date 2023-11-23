const csv = require('csv-parser');
const axios = require('axios');
const fs = require('fs');
const results = [];

fs.createReadStream('./input.csv')
	.pipe(csv())
	.on('data', (row) => {
		results.push(row);
	})
	.on('end', () => {
		console.log('CSV file successfully processed');
		addGenderToCSV();
	});

async function getGender(fullName) {
	try {
		const response = await axios.get(`https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/${fullName}`, {
			headers: {
				"X-API-KEY": genderApiKey
			}
		});
		// console.log(response.data)
		return {
			gender: response.data.likelyGender,
			probability: response.data.probabilityCalibrated
		};
	} catch (error) {
		console.error('Error fetching gender:', error);
		return null;
	}
}

async function addGenderToCSV() {
	const updatedRows = [];

	for (const row of results) {
		const genderInfo = await getGender(row.full_name);
		console.log(genderInfo)
		updatedRows.push({ ...row, ...genderInfo });
	}

	saveUpdatedCSV(updatedRows);
}

function saveUpdatedCSV(data) {
	const output = data.map(row => `${row.first_name},${row.full_name},${row.gender},${row.probability}\n`).join('');
	console.log("output", output)
	fs.writeFileSync('./output.csv', output);
	console.log('Output CSV file with gender saved.');
}

