import { SignJWT, jwtVerify } from 'jose';

export enum SovereignRole {
  GOD_MODE = 'GOD_MODE',
  ADMIN = 'ADMIN',
  CRM_MANAGER = 'CRM_MANAGER',
  CLIENT = 'CLIENT',
  WORKER = 'WORKER'
}

export class Sovereign_Auth {
  private static SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'GENESIS_INFINITY_SECRET_2026');

  static async generateToken(payload: { id: string; role: SovereignRole; phone?: string }) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(this.SECRET);
  }

  static async verifyToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, this.SECRET);
      return payload as { id: string; role: SovereignRole; phone?: string };
    } catch (e) {
      return null;
    }
  }
}
