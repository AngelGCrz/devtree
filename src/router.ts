import { Router } from 'express';

const router = Router()

/** Autentucacion y Registro */
router.post('/auth/register', (req, res) => {
    console.log(req.body)
})

export default router