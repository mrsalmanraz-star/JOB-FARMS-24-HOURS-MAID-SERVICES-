import { Decimal } from 'decimal.js';

export class LegalLock {
  /**
   * Validates the 50% Basic Pay rule as per Indian Code on Wages, 2019
   */
  static validateBasicPay(ctc: number | Decimal, basic: number | Decimal): boolean {
    const total = new Decimal(ctc);
    const b = new Decimal(basic);
    const ratio = b.dividedBy(total);
    
    return ratio.greaterThanOrEqualTo(0.5);
  }

  /**
   * Returns statutory minimum wage for Delhi NCR (Mocked for MVP)
   */
  static getDelhiMinWage(skillLevel: 'UNSKILLED' | 'SEMI_SKILLED' | 'SKILLED'): Decimal {
    switch (skillLevel) {
      case 'SEMI_SKILLED':
        return new Decimal(20371);
      case 'SKILLED':
        return new Decimal(22144);
      default:
        return new Decimal(18500);
    }
  }
}
