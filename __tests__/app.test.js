
import  Validator  from '../src/app';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('Valid usernames', () => {
        expect(validator.validateUsername('User-123u')).toBe(true); // Ожидаем true
        expect(validator.validateUsername('valid_user')).toBe(true); // Ожидаем true
        expect(validator.validateUsername('test123user')).toBe(true); // Ожидаем true
    });

    test('Invalid characters', () => {
        expect(validator.validateUsername('Invalid!Name')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('Name@#$')).toBe(false); // Ожидаем false
    });

    test('Consecutive digits', () => {
        expect(validator.validateUsername('User1234')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('Name56789')).toBe(false); // Ожидаем false
    });

    test('Start or end with invalid characters', () => {
        expect(validator.validateUsername('-username')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('username-')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('_user_')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('123user')).toBe(false); // Ожидаем false
        expect(validator.validateUsername('user123')).toBe(false); // Ожидаем false
    });

    test('Empty username', () => {
        expect(validator.validateUsername('')).toBe(false); // Ожидаем false
    });
});
