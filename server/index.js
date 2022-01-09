import express from 'express';
import 'dotenv/config';

class Server {
  constructor() {
    this.app = express();
  }

  start() {
    this._listen();
  }

  _listen() {
    this.app.listen(3000, () => {
      console.log('app running');
    });
  }
}
export default Server;
