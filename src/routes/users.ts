import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
// Repository: https://github.com/nikidav9/ai-saas
const router = Router();
let users: any[] = [];

router.get('/', (req, res) => {
  // TODO: auth & pagination
  res.json(users);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Invalid data' });
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: uuidv4(), email, password: hashed, createdAt: new Date().toISOString() };
  users.push(user);
  res.status(201).json({ id: user.id, email: user.email });
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  const { password, ...rest } = user;
  res.json(rest);
});

router.put('/:id', async (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  const { email, password } = req.body;
  if (email) user.email = email;
  if (password) user.password = await bcrypt.hash(password, 10);
  const { password: pw, ...rest } = user;
  res.json(rest);
});

router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.status(204).send();
});

export default router;
