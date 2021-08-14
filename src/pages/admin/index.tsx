import { signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react';
import AdminTemplate from '../../components/templates/common/AdminTemplate';
import { paths } from '../../config/paths';

const AdminIndexPage: React.VFC = () => {
  const [session, loading] = useSession();

  const router = useRouter();
  const routerIsReady = router.isReady;

  const isNotSignedIn = session === null;

  if (isNotSignedIn && routerIsReady) {
    router.push(paths.admin.login);
  }

  return (
    <AdminTemplate>
      <h1>Admin Page</h1>
      <button onClick={() => signOut()}>Logout</button>
    </AdminTemplate>
  );
};

export default AdminIndexPage;
