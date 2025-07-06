import { Router } from 'express';
import { CidadesController } from './../controllers';

const router = Router();

router.post('/', (_, res) => {
  return res.send('Hello World');
});

//Cidades routes
router.post('/cidades', CidadesController.create);

export { router };
