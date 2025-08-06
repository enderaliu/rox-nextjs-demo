import { NextResponse } from 'next/server';

export async function GET() {
  const user = {
    name: 'Yuma',
    role: 'Product Lead',
  };

  return NextResponse.json(user);
}
