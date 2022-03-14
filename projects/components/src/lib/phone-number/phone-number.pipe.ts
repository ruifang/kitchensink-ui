import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mzPhoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
  transform(number: string, ...args: unknown[]): unknown {
        if (!number) {
            return null;
        }

        const phoneNumber = number.replace(/\D/g, '');
        if (phoneNumber.length === 10) {
            return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
        return number;
    }
}
