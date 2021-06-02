var qr_barcode_scanner_app = {
  init: function(){
    let scanner = new Instascan.Scanner({
      video: document.getElementById('barcode-capture'),
      scanPeriod: 2
    });
    scanner.addListener('scan', function (content) {
      var aliasValue = JSON.parse(content).alias.trim();
      var amountValue = JSON.parse(content).earn;
      var currencyCodeValue = "HKD";
      var parseThree = parseFloat(amountValue);
      if (isNaN(parseThree)) parseThree = 0;
      let earning = {
        amount: parseThree,
        currencyCode:  currencyCodeValue
      };
      $("#barcode-result").text(`Adding ${parseThree} to ${aliasValue} ...`);
      $.post(`https://ancient-eyrie-93473.herokuapp.com/earnings/${aliasValue}`, earning, function(data, status) {
        var alertHtml = `Successfully added ${amountValue} HKD / ${parseThree} BTC to ${aliasValue}`;
        $('#barcode-result').html(alertHtml);
      })
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      console.log("Looking for cameras")
      console.log(cameras)
      if (cameras.length > 0) {
        scanner.start(cameras[cameras.length - 1]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  }
}
