import { Component, OnInit } from '@angular/core';
import * as ol from 'openlayers';
import * as echarts from 'echarts';
@Component({
  selector: 'targetCollisionAnalysis',
  templateUrl: './targetCollisionAnalysis.html',
  styleUrls: ['./targetCollisionAnalysis.css']
})
export class TargetCollisionAnalysisComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    var dom = document.getElementById("container");
    var myChart = echarts.init(<any>dom);
    var app = {};
    var option = null;
    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    ;
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
    var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      })
    });


    }
}

