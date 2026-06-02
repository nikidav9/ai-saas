import { Router } from 'express';

// Repo: https://github.com/nikidav9/ai-saas

const router = Router();
router.post('/greet', (req, res) => {
  const name = (req.body.name || '').trim().substring(0, 50);
  if (!name) return res.status(400).json({ error: 'Name required' });
  res.json({ message: `Hello, ${name}!` });
});
export default router;
