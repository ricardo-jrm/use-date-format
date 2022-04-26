import { useMemo } from 'react';
import { dateFormat, dateRelative } from '@ricardojrmcom/date-format';

/**
 * Format dates with dayjs
 */
export const useDateFormat = (date: Date, format?: string) =>
  useMemo(() => dateFormat(date, format), [date, format]);

/**
 * Relative time helpers
 */
export const useDateRelative = (date: Date) =>
  useMemo(() => dateRelative(date), [date]);
