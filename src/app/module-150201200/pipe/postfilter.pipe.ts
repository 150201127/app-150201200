import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

    transform(value: any[], text: string): any[] {

        if (text == null || text.length === 0) {
            return value;
        }

        text = text.toLocaleUpperCase();

        return value.filter(elem => {
            if (
                elem.post.city.name.toLocaleUpperCase().includes(text) ||
                elem.post.ownerUsername.toLocaleUpperCase().includes(text) ||
                elem.post.body.toLocaleUpperCase().includes(text)
            ) {
                return true;
            }

            return false;
        });
    }

}
