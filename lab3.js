const connect = require('connect');
const url = require('url');

const app = connect();

function add(req, res, next) {
  // get the full query string ?amount=1000
  const queryString = url.parse(req.url, true).query;

  const { x, y } = queryString;

  // calculate
  const total = parseFloat(x) + parseFloat(y);

  // display the information
  res.end(`
      ${x} + ${y} = ${total}
      `);
}

function subtract(req, res, next) {
  // get the full query string ?amount=1000
  const queryString = url.parse(req.url, true).query;

  const { x, y } = queryString;

  // calculate
  const total = parseFloat(x) - parseFloat(y);

  // display the information
  res.end(`
      ${x} - ${y} = ${total}
      `);
}

function multiply(req, res, next) {
  // get the full query string ?amount=1000
  const queryString = url.parse(req.url, true).query;

  const { x, y } = queryString;

  // calculate
  const total = parseFloat(x) * parseFloat(y);

  // display the information
  res.end(`
        ${x} * ${y} = ${total}
        `);
}

function divide(req, res, next) {
  // get the full query string ?amount=1000
  const queryString = url.parse(req.url, true).query;

  const { x, y } = queryString;

  // calculate
  const total = parseFloat(x) / parseFloat(y);

  // display the information
  res.end(`
        ${x} / ${y} = ${total}
        `);
}

function error(req, res, next) {
  const error = url.parse(req.url, true).pathname;
  res.write(`You have entered an invalid method: ${error}`);
  res.end();
}

app.use('/add', add);
app.use('/subtract', add);
app.use('/multiply', multiply);
app.use('/divide', divide);
app.use(error);
app.listen(3000);
console.log('Connect server running on port 3000');
