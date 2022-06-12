import { signIn, signOut, useSession } from 'next-auth/react';
import Layout from './layout';

const Login = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <Layout headerOption={{ title: 'login' }}>
      <div>
        {!session && (
          <div>
            <button className="bg-emerald-400 p-4 text-white rounded hover:bg-emerald-500 hover:shadow-xl">
              <a
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault();
                  signIn('google');
                }}
              >
                Google Sign in
              </a>
            </button>
          </div>
        )}
      </div>
      <div>
        {session?.user && (
          <button className="bg-emerald-400 p-4 text-white rounded hover:bg-emerald-500 hover:shadow-xl">
            <a
              href={'/api/auth/signout'}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Login;
