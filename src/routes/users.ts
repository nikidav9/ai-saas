import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { body, param, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
/** Repository: https://github.com/nikidav9/ai-saas */
const router = Router();

const users = new Map<string, { email: string; passwordHash: string; createdAt: string }>();

router.get('/users', (req, res) => {
  const list = Array.from(users.entries()).map(([id, u]) => ({
    id,
    email: u.email,
    createdAt: u.createdAt,
  }));
  res.json(list);
});

router.post(
  '/users',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { email, password } = req.body;
    const id = uuidv4();
    const passwordHash = bcrypt.hashSync(password, 10);
    users.set(id, { email, passwordHash, createdAt: new Date().toISOString() });
    res.status(201).json({ id, email });
  },
);

router.get(
  '/users/:id',
  param('id').isUUID(),
  (req, res) => {
    const { id } = req.params;
    const user = users.get(id);
    if (!user) return res.sendStatus(404);
    res.json({ id, email: user.email, createdAt: user.createdAt });
  },
);

router.put(
  '/users/:id',
  param('id').isUUID(),
  body('email').optional().isEmail(),
  body('password').optional().isLength({ min: 8 }),
  (req, res) => {
    const { id } = req.params;
    const user = users.get(id);
    if (!user) return res.sendStatus(404);
    const { email, password } = req.body;
    if (email) user.email = email;
    if (password) user.passwordHash = bcrypt.hashSync(password, 10);
    users.set(id, user);
    res.json({ id, email: user.email });
  },
);

router.delete('/users/:id', param('id').isUUID(), (req, res) => {
  const { id } = req.params;
  if (!users.delete(id)) return res.sendStatus(404);
  res.sendStatus(204);
});

export default router;
