import { Component, OnDestroy, OnInit } from '@angular/core';
import { sleep } from 'src/app/models/constants';
import { SimonsaysService } from 'src/app/services/simonsays.service';

@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.css']
})
export class SimonsaysComponent implements OnInit, OnDestroy {
  count!: number;
  sub!: any;
  interval!: any;
  colors: any = {
    red: false,
    blue: false,
    green: false,
    yellow: false,
  };

  constructor(public simonsaysService: SimonsaysService) { }

  ngOnInit(): void {
    this.simonsaysService.estado.subscribe(estado => {
      console.log(estado);
      if (this.count != estado.count) this.mostrarColor(estado.simon);
      this.count = estado.count;


    })
    this.simonsaysService.generarSimonsays();
    this.interval = setInterval((ms: number) => ms);
  }

  ngOnDestroy(): void {
    this.simonsaysService.endSimon();
    // sleep.uns
  }
  intentoPlayer(e: string) {
    // console.log(e);
    this.simonsaysService.intentoPlayer(e);
  }

  async mostrarColor(simon: string[]) {

    for (let i = 0; i < simon.length; i++) {
      await sleep(300);
      this.colors[simon[i]] = true;
      await sleep(500);
      this.colors[simon[i]] = false;
      await sleep(200);

    }
  }

}
