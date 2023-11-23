# Gender Prediction Using NamSor API

## Overview
This Node.js application reads a CSV file containing first names and full names, and uses the NamSor API to predict the gender for each name. The output is a new CSV file with an added column for the predicted gender.

## Prerequisites
- Node.js installed on your machine.
- A valid API key from [NamSor API](https://namsor.app/).

## Installation
1. **Clone/Download the Repository**
    - Clone this repository to your local machine or download it as a ZIP and extract it.

2. **Install Dependencies**
    - Navigate to the project directory in your terminal or command prompt.
    - Run `npm install` to install the required dependencies.
   
3. **Create & update .env file by copying .env.example**
    ```bash
    cp -R .env.example .env
    ```

4. **NamSor API Key**
   - Get your API key from NamSor and replace `'API_KEY'` in the .env with your actual API key.

## Usage
1. **Prepare Your CSV File**
    - Ensure your CSV file has two columns: the first with first names and the second with full names. Place this file in the project directory.
    - By default, the script expects a file named 'input.csv'. Rename your file accordingly or update the script to match your file's name.

2. **Run the Script**
    - Execute the script by running `node genderScript.js` in your terminal or command prompt.
    - The script will process the CSV file and create a new file, 'output.csv', with an additional gender column.

## Output
- The output CSV file ('output.csv') will have four columns: first name, full name, predicted gender, and the probability of the predicted gender.

## Troubleshooting
- Ensure that your CSV file is properly formatted and located in the project directory.
- Check that your NamSor API key is correct and active.
- For large CSV files, the script might take longer to execute due to API response times.
- Do you have node js installed and have run `npm install` 

## Contributing
Feel free to fork this repository and submit pull requests. You can also open issues for any bugs found or feature suggestions.

## License
This project is open source and available under the [MIT License](LICENSE).
