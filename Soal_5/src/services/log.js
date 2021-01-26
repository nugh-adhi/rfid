const fs = require('fs');

function log(req, res) {
  // combining headers data and post body request
  let data = JSON.stringify({...req.headers, ...req.body})
  // get current date
  let date = new Date()
  // get ip address
  let ipaddress = req.connection.remoteAddress
  // combine required string
  let str = `[${date}] Success: POST ${ipaddress} ${data}\n`

  // write into log file
  fs.appendFile('logs/log.txt', str, function (err) {
   if (err) return console.log(err);
     console.log('Appended!');
  });

  // return 201 status
  return res.status(201).send()
}

module.exports = {
  log: log,
};
