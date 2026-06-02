import React from 'react';
import { getGreeting } from '../utils/greeting';

const Hello: React.FC = () => (
  <div className="p-4 text-center text-xl font-bold">{getGreeting()}</div>
);

export default Hello;
