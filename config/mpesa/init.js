var request = require('request'),
    consumer_key = "0W7MfYQDRRNmUDtcykrf8EzPmSobFTDL",
    consumer_secret = "q3ODOfOcqox1Ps7F",
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");

request({
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    function(error, response, body) {
        console.log(body)
    }
)

//   Lipa na M-Pesa Online Payment

oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
auth = "Bearer " + oauth_token;

request({
        method: 'POST',
        url: url,
        headers: {
            "Authorization": auth
        },
        json: {
            "BusinessShortCode": " ",
            "Password": " ",
            "Timestamp": " ",
            "TransactionType": "CustomerPayBillOnline",
            "Amount": " ",
            "PartyA": " ",
            "PartyB": " ",
            "PhoneNumber": " ",
            "CallBackURL": "https://ip_address:port/callback",
            "AccountReference": " ",
            "TransactionDesc": " "
        }
    },
    function(error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)

//   Lipa na M-Pesa Online Query Request

var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query"
auth = "Bearer " + oauth_token;

request({
        method: 'POST',
        url: url,
        headers: {
            "Authorization": auth
        },
        json: {
            "BusinessShortCode": " ",
            "Password": " ",
            "Timestamp": " ",
            "CheckoutRequestID": " "
        }
    },
    function(error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)