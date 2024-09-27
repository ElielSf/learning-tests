import express from 'express';
import { getUserById } from './db.js';

const app = express();

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuário não existe.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro de conexão com o BD.' })
    }
});

export default app;