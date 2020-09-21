import { Pipe, PipeTransform } from '@angular/core';
/*
 * Format phone for humans
 * Usage:
 *   value | phone
 * Example:
 *   {{ 8018018011 | phone }}
 *   formats to: 801 801 8011
*/
@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    const temp = value.toString() // in case it's a number
    return ` (${temp.substring(0, 3)}) ${temp.substring(3, 6)} - ${temp.substr(6)}`
  }
}
