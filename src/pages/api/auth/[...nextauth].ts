import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { envVariables } from '../../../config/envVariables';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: envVariables.GITHUB_OAUTH_ID,
      clientSecret: envVariables.GITHUB_OAUTH_SECRET,
    }),
  ],
});
