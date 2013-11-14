/**********

tsx_quotebot v0.1.0

**********/

// Require modules
var request = require('request');
var cheerio = require('cheerio');
var symbol = process.argv[2];

// make a request
var url = 'http://web.tmxmoney.com/quote.php?qm_symbol=' + symbol;

request(url, function(error, response, body) {
	if (!error && response.statusCode == 200) {

		// Parse the html, find the stock price, and return it as a float
		var $ = cheerio.load(body);

		var price = ($('.last span').text());
		
		// If a fourth command line argument '-y' is included, add a newline after printing quote to stdout
		if (process.argv[3]) {

			if (process.argv[3] == '-y') {
				console.log(price);
			} else {
				throw new Error('Error -quotebot: argument 4 unrecognized flag (add "-y" for newline)');
			}

		} else {

			process.stdout.write(price);

		}

	} else {

		throw new Error('Error - quotebot: Request to access data for ' + symbol + ' failed.');

	}
});