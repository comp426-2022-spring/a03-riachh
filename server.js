//Require Express 
const express = require('express')
const app = express()
//Require Mninmist 
const args = require('minimist')(process.argv.slice(2))
args["port"]

//Start Listening 
const HTTP_PORT = args.port || 5000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});


//Default Response 
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});


//Functions from a02
function coinFlip() {
    var results = ['heads', 'tails'];
    return results[Math.floor(Math.random() * results.length)];
  }

function coinFlips(flips) {
  var results = ['heads', 'tails'];
  var answer = []; 

  for(let i = 0; i < flips; i++) {
    answer[i] = results[Math.floor(Math.random() * results.length)];
  }

  return answer; 
}

function countFlips(array) {

    var headss = 0; 
    var tailss = 0; 
  
    for(let i = 0; i < array.length; i++) {
      if(array[i] == "heads"){
        headss++; 
      }
      else{ 
        tailss++; 
      }
    }
  
    const count = { tails: tailss,  heads: headss };
    return count; 
  }

  function flipACoin(call) {
    var results = ['heads', 'tails'];
    var flipp = results[Math.floor(Math.random() * results.length)]; 
  
    var winOrLose; 
  
    if(flipp == call){
      winOrLose = "win";
    }
    else{
      winOrLose = "lose";
    }
  
    const resultss = { call: call, flip: flipp, result: winOrLose };
    return resultss; 
  }
