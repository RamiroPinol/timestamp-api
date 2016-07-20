var express = require("express")
var app = express();

var tmstp = function (input) {
    if (isNaN(Number(input))) {
        var check = (new Date(input)).getTime();
    } else {
        var check = (new Date(Number(input))).getTime();
    }
    
    if (check > 0) {
      var tostr = new Date(check).toDateString()
      return JSON.stringify({unix : check, natural : tostr})
    } else {
        return JSON.stringify({unix : null, natural : null});
    }
}

app.get('/:ID', function (req, res) {
    res.send(tmstp(req.params.ID));
    
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Timestamp API running...');
});