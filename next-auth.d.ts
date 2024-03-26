import NextAuth, { DefaultSession } from 'next-auth';

import { JWT as NextAuthJWT } from 'next-auth/jwt';
interface Callbacks {
    jwt(token: NextAuthJWT, user: any, account: any): Promise<NextAuthJWT>;

}
declare module 'next-auth' {
    interface Session {
        user: {
            name?: string;
            image?: string;
        }  & DefaultSession['user'];
    }
}