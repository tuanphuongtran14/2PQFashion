const axios = require('axios');

exports.get = async (req, res) => {
    //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
    //parameters
    var partnerCode = "MOMOWMMT20211023";
    var accessKey = "CCR0pBpBMkeLu0r9";
    var secretkey = "g7SaifjMyvLD38QI2hX3FRXPaWOucvNQ";
    var requestId = partnerCode + new Date().getTime();
    var orderId = requestId+'c5';
    var orderInfo = "pay with MoMo 2";
    var redirectUrl = "http://localhost:8081/api/products";
    var ipnUrl = "http://localhost:8081/api/momo/response";
    // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
    var amount = "5000";
    var requestType = "captureWallet"
    var extraData = ""; //pass empty value if your merchant does not have stores

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey="+accessKey+"&amount=" + amount+"&extraData=" + extraData+"&ipnUrl=" + ipnUrl+"&orderId=" + orderId+"&orderInfo=" + orderInfo+"&partnerCode=" + partnerCode +"&redirectUrl=" + redirectUrl+"&requestId=" + requestId+"&requestType=" + requestType
    //puts raw signature

    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretkey)
        .update(rawSignature)
        .digest('hex');

    //json object send to MoMo endpoint
    const requestBody = {
        partnerCode : partnerCode,
        accessKey : accessKey,
        requestId : requestId,
        amount : amount,
        orderId : orderId,
        orderInfo : orderInfo,
        redirectUrl : redirectUrl,
        ipnUrl : ipnUrl,
        extraData : extraData,
        requestType : requestType,
        signature : signature,
        lang: 'en'
    };
    try{
        var response= await axios({
            method: 'POST',
            url: 'https://test-payment.momo.vn/v2/gateway/api/create',
            data: requestBody 
          });
          console.log(response.data);
         // res.json(response.data)
          res.redirect(response.data.payUrl);
          
    }
    catch(err){
        console.log(err);
    }

}