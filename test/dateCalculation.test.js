import { validateData } from '../src/helper/dateCalculation';

describe('Date, mothh and year Error Message', () => {
  test('Date is empty return value should be true', () => {
    const result = validateData(' ');
    expect(result).toEqual({ errorDate : true, errorMessage :'Invalid data !! please enter date in DD MM YYYY' });
  });
  test('Day should not exceed 31', () => {
    const result = validateData('34 03 1993');
    expect(result).toEqual({ errorDate : true, errorMessage: 'Invalid Day !! please enter date in DD MM YYYY' });
  });
  test('Month should not exceed 12', () => {
    const result = validateData('12 15 1993');
    expect(result).toEqual({ errorDate : true, errorMessage: 'Invalid Month !! please enter date in DD MM YYYY' });
  });
  test('Year should be length equal to 4', () => {
    const result = validateData('12 12 199344');
    expect(result).toEqual({ errorDate : true, errorMessage: 'Invalid Year !! please enter date in DD MM YYYY' });
  });
});

describe('Leap Year Success Test', () => {
  const expectedResult = { errorDate : false, errorMessage : 'ValidDate' };
  test('Leap Year with 29 days', () => {
    const result = validateData('29 02 1940');
    expect(result).toEqual(expectedResult);
  });
  test('Leap Year with month which contain 30 days after Aug', () => {
    const result = validateData('30 11 1940');
    expect(result).toEqual(expectedResult);
  });
  test('Leap Year with month which contain 31 days after Aug', () => {
    const result = validateData('31 12 1940');
    expect(result).toEqual(expectedResult);
  });
  test('Leap Year with month which contain 30 days before Aug', () => {
    const result = validateData('30 04 1940');
    expect(result).toEqual(expectedResult);
  });
  test('Leap Year with month which contain 31 days before Aug', () => {
    const result = validateData('31 03 1940');
    expect(result).toEqual(expectedResult);
  });
});

describe('Non Leap Year Success Test', () => {
  const expectedResult = { errorDate : false, errorMessage : 'ValidDate' };
  test('Non Leap Year with 28 days', () => {
    const result = validateData('28 02 1941');
    expect(result).toEqual(expectedResult);
  });
  test('Non Leap Year with month which contain 30 days after Aug', () => {
    const result = validateData('30 11 1941');
    expect(result).toEqual(expectedResult);
  });
  test('Non Leap Year with month which contain 31 days after Aug', () => {
    const result = validateData('31 12 1941');
    expect(result).toEqual(expectedResult);
  });
  test('Non Leap Year with month which contain 30 days before Aug', () => {
    const result = validateData('30 04 1941');
    expect(result).toEqual(expectedResult);
  });
  test('Non Leap Year with month which contain 31 days before Aug', () => {
    const result = validateData('31 03 1941');
    expect(result).toEqual(expectedResult);
  });
});

describe('Leap and Non Leap Year negative day case', () => {
  test('Leap Year day should be greater than 28 days', () => {
    const result = validateData('31 11 1940');
    expect(result).toEqual({ errorDate : true, errorMessage: 'you have entered leap year, day cant be more that 29' });
  });
  test('Non Leap Year wday should be greater than 30 days', () => {
    const result = validateData('31 11 1941');
    expect(result).toEqual({ errorDate : true, errorMessage: 'You have entered invaild day, which is more than its expected days!!' });
  });
});

describe('Leap and Non Leap Year feb months exceed days', () => {
  test('Leap Year day should be greater than 28 days', () => {
    const result = validateData('31 02 1940');
    expect(result).toEqual({ errorDate : true, errorMessage: 'you have entered leap year, day cant be more that 29' });
  });
  test('Non Leap Year wday should be greater than 30 days', () => {
    const result = validateData('31 02 1941');
    expect(result).toEqual({ errorDate : true, errorMessage: 'you have entered Non leap year, day cant be more that 28' });
  });
});
