import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { paths } from '../../config/paths';

const AdminLoginPage: NextPage = () => {
  const [session, _] = useSession();

  const router = useRouter();
  const routerIsReady = router.isReady;

  if (routerIsReady) {
    if (session) {
      router.push(paths.admin.index);
    }
  }

  // TODO: place loader
  return <button onClick={() => signIn()}>Login</button>;
};

export default AdminLoginPage;
