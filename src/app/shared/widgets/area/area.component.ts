import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }

  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data = [];

  ngOnInit() {
    this.chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Random Data'
        },
        subtitle: {
            text: 'Demo'
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        credits:{
          enable: false
        },
        exporting:{
          enabled: true
        },
        series: this.data
      };

      HC_exporting(Highcharts);

      setTimeout(()=>{
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
}
