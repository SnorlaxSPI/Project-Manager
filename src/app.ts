import express from 'express';
import './database/connect';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'JSON' });
});

app.listen(3333, () => {
  console.log('🚀🚀 Server Started');
});
