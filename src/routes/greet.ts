import { Router } from 'express';

// Repository: https://github.com/nikidav9/ai-saas

const router = Router();

router.post('/greet', (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim().slice(0, 50) : '';
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}!` });
});

export default router;
