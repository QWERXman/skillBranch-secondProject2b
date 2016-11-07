import express from 'express';
import cors from 'cors';

import canonize from './canonize'

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2b', (req, res) => {
  const userCanonized = canonize(req.query.fullname)
  res.send(userCanonized)
})

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
