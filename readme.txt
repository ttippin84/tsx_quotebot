##########

tsx_quotebot v0.1.0 README

##########


tsx_quotebot is a node.js command-line script that gets the latest price for a specified stock on the Toronto Stock Exchange (Canada).
The prices it returns are non-realtime, usually delayed by roughly 15 minutes.

# COMMAND-LINE EXAMPLE #

node tsx_quotebot.js T -y

// Outputs the stock price for symbol 'T' (Telus Corporation) to stdout then adds a newline. Leave out the '-y' option
// if you don't want a newline added to the output.