import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuModel } from '@teste-angular/components';
import { take } from 'rxjs';

@Component({
  selector: 'teste-angular-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() grupos: MenuModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.marcarMenuRota();

    this.router.events
        .pipe(take(1))
        .subscribe(event => {
            if (event instanceof NavigationEnd)
                this.marcarMenuRota();
        });
}

marcarMenuRota(grupos: MenuModel[] = this.grupos): void {
    if (!grupos)
        return;

    grupos.forEach(grupo => {
        grupo.itens.forEach(item => {
            if (item.rotasRelacionadas)
                item.rotasRelacionadas.forEach(rotaRelacionada => {
                    if (this.router.url.indexOf(rotaRelacionada) > -1)
                        item.ativo = true;
                });
            else if (this.router.url.includes(item.rota))
                item.ativo = true;
            else
                item.ativo = false;
        });
    });
}

  activeMenu(item: any, menu: any): void {

    if (menu.itens) {
        menu.itens.forEach((element: any) => {
            element.ativo = false;
        });
    }
    item.ativo = true;
}
}
