import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

// declare let d3: any;
declare let $: any

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  private svg: any;
  private host: any;
  private g: any;
  private screenWidth: number = 610;
  private screenHeight: number = 400;
  private margin = { top: 40, right: 20, bottom: 40, left: 50 };

  // public colors = ['red', 'blue', 'green']
  public colors = ['#ff5c33','#0066cc','#009900','#003366','#e60000','#00cc99','#00b300','#ff9900','#33ccff'];
  public dataColumns = [1];
  public barChartData = [
    {
      id: 0,
      label: 'Html',
      value: 6,
      type:'Years'
    },
    {
      id: 1,
      label: 'Css',
      value: 6,
      type:'Months'
    },
    {
      id: 2,
      label: 'Javascript',
      value: 6,
      type:'Years'
    },

    {
      id: 3,
      label: 'Jquery',
      value: 4,
      type:'Years'
    },
    {
      id: 4,
      label: 'Angular js',
      value: 4,
      type:'Years'
    },
    {
      id: 5,
      label: 'Vue Js',
      value: 7,
      type:'Months'
    },
    {
      id: 6,
      label: 'React Js',
      value: 6,
      type:'Months'

    },
    {
      id: 7,
      label: 'Node js',
      value: 3,
      type:'Months'
    },
    {
      id: 8,
      label: 'D3 js',
      value: 3,
      type:'Months'
    },
   
  ];

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);
  }

  ngOnInit() {
    var self = this;
    this.svg = this.host.append('svg');
    let scrn_margin = 30;

// Define the div for the tooltip
    var divTooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    this.svg
      .attr("width", this.screenWidth - 70)
      .attr("height", this.screenHeight + scrn_margin);

    var width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    var height = +this.svg.attr("height") - this.margin.top - this.margin.bottom - 40;
    this.g = this.svg.append("g")
      .attr("transform", "translate(" + (this.margin.left + 15) + "," + (this.margin.top * .9) + ")");

    var xScale = d3Scale.scaleBand().range([0, width]).padding(0.4),
      yScale = d3Scale.scaleLinear().range([height, 0]);

    xScale.domain(this.barChartData.map(function (d) { return d.label ;}));
    yScale.domain([0, d3Array.max(this.barChartData, function (d) { return d.value; })]);

    this.g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3Axis.axisBottom(xScale));

    this.g.append("g")
      .call(d3Axis.axisLeft(yScale).tickFormat(function (d) {
        return d;
      }).ticks(10))
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("value");

    var bars = this.g.selectAll(".bar")
      .data(this.barChartData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function (d) { return xScale(d.label); })
      .attr("y", function (d) { return yScale(d.value); })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) { return height - yScale(d.value); })
      .style("fill", function (d, i) {
        // var letters = '0123456789ABCDEF';
        // var color = '#';
        // var i;
        // for (i = 0; i < 6; i++) {
        //   color += letters[Math.floor(Math.random() * 16)];
        // }
        var color = self.colors[i];
        return color;
      }).on("mouseover", function (d) {
        divTooltip.style("opacity", 0.9);
        divTooltip.html(d.label + "<br/>"  + d.value + " " + d.type )
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      }).on("mouseout", function () {
        divTooltip.style("opacity", 0);
      });
  }
}

