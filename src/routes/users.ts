import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

// Repository: https://github.com/nikidav9/ai-saas

const router = Router();

// In‑memory store placeholder
const users: Record<string, { id: string; email: string; passwordHash: string; createdAt: string }> = {};

router.get('/users', (req, res) => {
  // TODO: auth & pagination
  const list = Object.values(users).map(u => ({ id: u.id, email: u.email, createdAt: u.createdAt }));
  res.json(list);
});

router.post('/users', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 8) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const id = uuidv4();
  const passwordHash = await bcrypt.hash(password, 10);
  users[id] = { id, email, passwordHash, createdAt: new Date().toISOString() };
  res.status(201).json({ id, email });
});

export default router;
