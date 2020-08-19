const fs = require('fs')
const child_process = require('child_process')

var workerProcess = child_process.exec(
  'ganache-cli -p=8545',
  (error, stdout, stderr) => {
    if (error) {
      console.log(error.stack)
      console.log('Error code: ' + error.code)
      console.log('Signal received: ' + error.signal)
    }
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
  }
)

workerProcess.on('close', msg => console.log(msg))
workerProcess.on('exit', function (code) {
  console.log('Ganache Cli process exited with exit code ' + code)
})
