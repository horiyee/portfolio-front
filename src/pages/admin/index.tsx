import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react';
import AdminTemplate from '../../components/templates/common/AdminTemplate';
import { paths } from '../../config/paths';

const AdminIndexPage: React.VFC = () => {
  const [session, loading] = useSession();

  const router = useRouter();
  const routerIsReady = router.isReady;

  if (routerIsReady) {
    if (loading === false && session === null) {
      signIn();
    }
  }

  return (
    <AdminTemplate>
      <h1>Admin Page</h1>
    </AdminTemplate>
  );
};

export default AdminIndexPage;
