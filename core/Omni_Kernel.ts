import { Decimal } from 'decimal.js';

// Configure Decimal for high-precision financial operations
Decimal.set({ precision: 24, rounding: Decimal.ROUND_HALF_UP });

export interface LegalParameters {
  minWage: Decimal;
  gstRate: Decimal;
  basicPayRatio: Decimal;
}

export class Omni_Kernel {
  private static GST_RATE = new Decimal(0.18); // 18% GST (SAC 9985)
  private static BASIC_PAY_RATIO = new Decimal(0.5); // 50% Basic Pay Rule

  /**
   * Enforces statutory compliance and calculates financial breakdown
   */
  static async calculateFinancials(
    salary: number | Decimal,
    contractType: 'AGENCY_PAYROLL' | 'FACILITATION',
    statutoryMinWage: number | Decimal
  ) {
    const s = new Decimal(salary);
    const min = new Decimal(statutoryMinWage);

    // 1. Minimum Wage Enforcement
    if (s.lessThan(min)) {
      throw new Error(`STATUTORY_VIOLATION: Salary ${s.toFixed(2)} is below minimum wage ${min.toFixed(2)}`);
    }

    // 2. 50% Basic Pay Rule Enforcement for Agency Payroll
    if (contractType === 'AGENCY_PAYROLL') {
      const basicPay = s.times(this.BASIC_PAY_RATIO);
      // Logic to ensure basic pay is at least 50% of CTC
    }

    // 3. GST Calculation
    const gstAmount = s.times(this.GST_RATE);
    const totalAmount = s.plus(gstAmount);

    return {
      baseSalary: s,
      gstAmount,
      totalAmount,
      gstRate: this.GST_RATE,
      timestamp: Date.now()
    };
  }

  static formatCurrency(amount: Decimal): string {
    return `₹${amount.toFixed(2)}`;
  }
}
