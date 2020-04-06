import { Component, OnInit, ElementRef } from '@angular/core';
declare let d3: any;
declare let $: any

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  private svg: any;
  private host: any;
  private g: any;
  private screenWidth: number = 650;
  private screenHeight: number = 470;
  private margin = { top: 40, right: 20, bottom: 40, left: 50 };

  public pieChartData = [
    {
    id: 0,
    label: 'Html',
    value: 6,
    color: '#ff5c33',
      level:'Expert',
  },
    {
    id: 1,
    label: 'Css',
    value: 6,
    color: '#0066cc',
      level:'Expert',
  },
    {
    id: 2,
    label: 'Javascript',
    value: 6,
    color: '#009900',
      level:'Expert',
  },
    {
      id: 3,
      label: 'Jquery',
      value: 4,
      color: '#003366',
      level:'Expert',
    },
    {
      id: 4,
      label: 'Angular js',
      value: 4,
      color: '#e60000',
      level:'Expert',
    },
    {
      id: 5,
      label: 'Vue js',
      value: 1,
      color: '#00cc99',
      level:'Advanced',
    },
    {
      id: 6,
      label: 'React js',
      value: 1,
      color: '#33ccff',
      level:'Intermediate',
    },
    {
      id: 7,
      label: 'Node js',
      value: 3,
      color: '#00b300',
      level:'Advanced',
    },
    {
      id: 8,
      label: 'D3 js',
      value: 3,
      color: '#ff9900',
      level:'Advanced',
    },

    

  ];

  constructor(element: ElementRef) {
    this.host = d3.select(element.nativeElement);
  }

  ngOnInit() {
    let chartComponent = this;
    // let imageWidth = this.iconWidth ? this.iconWidth : 40;
    // let imageHeight = this.iconHeight ? this.iconHeight : 40;
    // let width = this.width ? this.width : 700;
    // let height = this.height ? this.height : 400;
    let radius = 200;
    let piedata = this.pieChartData;
    let outerRadius = 150;
    let chartID = 'pieChartId';
    // this.outerRadius > 150 ? this.outerRadius = 150 : this.outerRadius;
    // Define the div for the tooltip
    var divTooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    let pie = d3.layout.pie()
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 2 + Math.PI / 2)
      .value((d) => {
        return d.value;
      }).sort(null);

    let arc = d3.svg.arc()
      .outerRadius(outerRadius)

    let arcNew = d3.svg.arc()
      .outerRadius(outerRadius + 10)

    let svg = d3.select('#' + chartID).append('svg')
      .attr('width', this.screenWidth)
      .attr('height', this.screenHeight)
      .append('g')
      .attr('transform', 'translate(' + (400 - radius + 10) + ',' + (400 - radius + 10) + ')');

    let g = svg.selectAll('.arc')
      .data(pie(piedata))
      .enter().append('g')
      .attr('class', 'arc');

    var pp = g.append('path')
      .attr('d', arc)
      .style('stroke', 'white').style('fill', function (d, i) {
        return [d.data.color];
      })
      .attr('id', function (d) {
        return 'iconId' + d.data.event;
      })
      // .attr('cursor', this.spreadSlice ? 'pointer' : 'default')
      .on('click', function (d) {
        d3.selectAll('path').transition()
          .duration(50)
          .attr('d', function (d) {
            if (this.selectedId === d.data.id) {
              d.data.expanded = true;
              this.selectedId = null;
              return arc(d);
            } else {
              d.data.expanded = false;
              this.selectedId = null;
              return arc(d);
            }
          })
      }).on("mouseover", function (d) {
        divTooltip.style("opacity", .9);

        divTooltip.html(d.data.label + "<br/>"  + d.data.level)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      }).on("mouseout", function () {
        divTooltip.style("opacity", 0);
      });

    var legendLabels = [];
    var legendColors = [];
    for (let i = 0; i < piedata.length; i++) {
      legendLabels.push(piedata[i].label);
      legendColors.push(piedata[i].color);
    }
    var color = d3.scale.ordinal()
      .domain(legendLabels)
      .range(legendColors);
    var legendItemSize = 18
    var legendSpacing = 4

    var legend = svg
      .selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => {
        let multiplicationFactor = 9;
        var height = legendItemSize + legendSpacing;
        var offset = height * color.domain().length / 2;
        var x = legendItemSize * multiplicationFactor;
        var y = ((i * height) - offset);
        return `translate(${x}, ${y})`
      })

    legend
      .append('rect')
      .attr('width', legendItemSize)
      .attr('height', legendItemSize)
      .style('fill', color);

    legend
      .append('text')
      .attr('x', legendItemSize + legendSpacing)
      .attr('y', legendItemSize - legendSpacing)
      .text((d) => d)
  }

}
