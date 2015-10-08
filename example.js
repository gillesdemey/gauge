var Gauge = require('./progress-bar')

var gauge = new Gauge()
gauge.show("foo", 0.20)

setInterval(function() {
  gauge.pulse("bar")
}, 50)
