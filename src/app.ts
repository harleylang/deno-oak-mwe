import { Application, Router } from 'oak/mod';
import { oakCors } from 'oak/cors';

const port = 8000;

const app = new Application();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080"
];

app.use(
  oakCors({
    origin: whitelist
  }),
);

const router = new Router();

router.get('/', (ctx) => {
    console.log('dfjkd')
    ctx.response.body = 'TESTING'
})

app.use(router.allowedMethods());
app.use(router.routes());
 
app.addEventListener('listen', () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: 8000 });
