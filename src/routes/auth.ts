import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
/** Repository: https://github.com/nikidav9/ai-saas */
const router = Router();

const JWT_SECRET = 'secret';
const REFRESH_SECRET = 'refresh';

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  // dummy user store lookup – replace with DB
  const users = req.app.locals.users as Map<string, any> || new Map();
  const user = Array.from(users.values()).find((u) => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.passwordHash))
    return res.status(401).json({ error: 'Invalid credentials' });
  const accessToken = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ sub: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
  res.json({ accessToken, refreshToken });
});

router.post('/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;
  try {
    const payload = jwt.verify(refreshToken, REFRESH_SECRET) as any;
    const newAccess = jwt.sign({ sub: payload.sub }, JWT_SECRET, { expiresIn: '15m' });
    res.json({ accessToken: newAccess });
  } catch {
    res.sendStatus(401);
  }
});

export default router;
