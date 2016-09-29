import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../service/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: '../template/hero-detail.component.html',
    styleUrls:['../css/hero-detail.component.css'],
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    @Input()
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

}
