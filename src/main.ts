import { promisify } from './promisify.ts';

// Пример асинхронной функции с колбэком
const asyncFunctionWithCallback = (
  value: number,
  callback: (err: Error | null, data?: number) => void
) => {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback(new Error('Value must be greater than 0'));
    }
  }, 1000);
};

// Используем функцию promisify для создания новой функции, работающей с промисами
const promisifiedFunction = promisify(asyncFunctionWithCallback);

// Проверка и вывод результатов в консоль
promisifiedFunction(5)
  .then((result) => {
    console.log('Result:', result); // Result: 10
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

promisifiedFunction(-1)
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('Error:', error.message); // Error: Value must be greater than 0
  });
