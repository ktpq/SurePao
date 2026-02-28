import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // ตั้งเวลาให้คอยอัปเดตค่าเมื่อครบกำหนด (เช่น 500ms)
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // ถ้ามีการพิมพ์ใหม่ก่อนครบเวลา ให้ยกเลิก timeout เดิม (Clear timer)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}