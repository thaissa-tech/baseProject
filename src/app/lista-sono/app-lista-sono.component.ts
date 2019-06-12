import { Component } from '@angular/core';

@Component({
    selector: 'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['./app-lista-sono.component.css']
})
export class AppListaSonoComponent {
    people: any[] = [
        {
            name: 'José',
            age: '17',
            level: 'G',
        },
        {
            name: 'Fernanda',
            age: '21',
            level: 'M',
        },
        {
            name: 'Bruno',
            age: '24',
            level: 'P',
        },
        {
            name: 'Thais',
            age: '22',
            level: 'M',
        },
        {
            name: 'Katia',
            age: '42',
            level: 'P',
        },
        {
            name: 'Douglas',
            age: '40',
            level: 'G',
        },
        {
            name: 'Hadassa',
            age: '4',
            level: 'D',
        },

    ];
}
