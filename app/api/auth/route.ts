import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  const { phone, otp } = await request.json();

  // Mock OTP verification
  if (otp === '123456') {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'GENESIS_DEFAULT_SECRET');
    const token = await new SignJWT({ phone, role: 'GOD_MODE' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: 'INVALID_OTP' }, { status: 401 });
}
