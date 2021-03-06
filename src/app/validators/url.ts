import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Url {
    static validate(control: AbstractControl): ValidationErrors | null {
        const url: string = String(control.value);
        if (url.startsWith('http://') || url.startsWith('https://')) return null;

        return {'url': 'เฮ้ยยยยยย url ผิด'}
    }
}
