import { getCsrfToken, signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Auth({ csrfToken }: { csrfToken: string }) {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('email', { email, callbackUrl: '/' });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form method="post" onSubmit={handleSubmit} className="bg-white p-8 rounded shadow">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-2 border mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Sign in
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
