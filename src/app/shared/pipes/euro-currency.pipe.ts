import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency',
  standalone: true
})
export class EuroCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined, showSymbol: boolean = true): string {
    if (value === null || value === undefined) return showSymbol ? '€ 0,00' : '0,00';

    const formatted = value.toLocaleString('it-IT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return showSymbol ? `€ ${formatted}` : formatted;
  }
}
