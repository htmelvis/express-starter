import '../style/index.styl';

function execute() {
  console.log('I am running.');
  throw new Error('Error!'); // source map check - devtools should provide link to index.js:5
}

execute();
