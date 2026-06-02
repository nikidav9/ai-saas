import { Router } from 'express';

// Repository: https://github.com/nikidav9/ai-saas

const router = Router();

router.post('/greet', (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (name.length > 50) {
    return res.status(400).json({ error: 'Name too long' });
  }
  res.json({ message: `Hello, ${name}!` });
});

export default router;
