const { Readable } = require("stream");

class MyStream extends Readable {
  _read() {}
}

const readable = new MyStream();
readable.push(process.argv[2]);
readable.pipe(process.stdout);
