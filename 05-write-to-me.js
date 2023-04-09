const { Writable } = require("stream");

class MyCustomWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log("writing:", chunk.toString());
    callback();
  }
}

const myWritable = new MyCustomWritable();
process.stdin.pipe(myWritable);
