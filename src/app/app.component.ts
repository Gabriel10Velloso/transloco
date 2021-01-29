import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  apples = 10;
  teste: any;
  teste2: any;
  teste3: any;
  constructor(private translocoService: TranslocoService){}

  ngOnInit(){
    this.teste = this.translocoService.translate('oi teste')

   const a =  this.translocoService.load('en').subscribe(res=>{
     console.log('TEste1', res)
     this.teste2 = res.hello;
   });

    this.translocoService.events$.pipe(filter(event => event.type === 'translationLoadSuccess'))
      .subscribe(
        res=> {
          console.log('TEste2' ,res)
      //  this.translocoService.translate(key, params, language)
        this.teste3 = this.translocoService.translate('hello');
      })
  }

  ngOnDestroy() {
    // this.a.unsubcrive();
    // this.teste.unsubcrive();
  }
}
