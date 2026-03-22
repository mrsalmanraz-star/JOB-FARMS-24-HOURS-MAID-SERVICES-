import { NextResponse } from 'next/server';
import { Omni_Kernel } from '@/core/Omni_Kernel';
import { LegalLock } from '@/core/LegalLock';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { salary, city, serviceType, contractType = 'FACILITATION' } = body;

    // 1. Fetch Statutory Min Wage (Delhi NCR Focus for MVP)
    const minWage = LegalLock.getDelhiMinWage('SEMI_SKILLED');

    // 2. Enforce Kernel Logic
    const financials = await Omni_Kernel.calculateFinancials(
      salary,
      contractType,
      minWage
    );

    // 3. Mock DB Persistence
    const bookingId = `GEN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      bookingId,
      financials: {
        base: financials.baseSalary.toFixed(2),
        gst: financials.gstAmount.toFixed(2),
        total: financials.totalAmount.toFixed(2),
        currency: 'INR'
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'INTERNAL_KERNEL_ERROR'
    }, { status: 400 });
  }
}
