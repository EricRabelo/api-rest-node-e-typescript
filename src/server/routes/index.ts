import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.post("/teste", (req, res) => {
    res.status(StatusCodes.OK).json(req.body);
});

export { router };