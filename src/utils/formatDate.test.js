import { describe, expect, it } from 'vitest';
import formatDate from './formatdate.js';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2022-01-01T00:00:00.000Z');
    expect(formatDate(date.toISOString())).toBe('Sabtu, 01 Januari 2022 07:00');
  });
});
