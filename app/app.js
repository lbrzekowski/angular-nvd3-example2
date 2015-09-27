var myNvd3 = angular.module('myNvd3', ['nvd3']);

myNvd3.controller('myCtrl', function ($scope) {
  var vm = this;

  vm.charts = {
    bar1: {}, bar2: {}, pie1: {}
  };

  vm.charts.bar1.options = {
    chart: {
      type: 'discreteBarChart',
      height: 350,
      width: 300,
      margin: {
        top: 20,
        right: 20,
        bottom: 60,
        left: 55
      },
      x: function (d) {
        return d.label;
      },
      y: function (d) {
        return d.value;
      },
      showValues: true,
      valueFormat: function (d) {
        return d3.format(',.2f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 80
      }
    }
  };

  vm.charts.bar1.data = [{
    key: "Cumulative Return",
    values: [{"label": "A", "value": 29.765957771107},
      {"label": "B", "value": 0},
      {"label": "C", "value": 32.807804682612},
      {"label": "D", "value": 196.45946739256},
      {"label": "E", "value": 0.19434030906893},
      {"label": "F", "value": 98.079782601442},
      {"label": "G", "value": 13.925743130903},
      {"label": "H", "value": 5.1387322875705}
    ]
  }];

  vm.charts.bar2.options = {
    chart: {
      type: 'discreteBarChart',
      height: 250,
      margin: {
        top: 20,
        right: 20,
        bottom: 100,
        left: 55
      },
      color: ['blue'],
      x: function (d) {
        return d.label;
      },
      y: function (d) {
        return d.value;
      },
      showControls: true,
      showValues: true,
      valueFormat: function (d) {
        return d3.format(',.2f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis',
        axisLabelDistance: 30,
        showMaxMin: false,
        rotateLabels: -45
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 0,
        showMaxMin: false
      },
      discretebar: {
        dispatch: {
          elementClick: function (t, u) {
            console.log(t);
            console.log(u);
          }
        }
      }
    },
    title: {
      enable: true,
      text: "Interest",
      className: "h4",
      css: {
        width: "250",
        textAlign: "center"
      }
    }
  };

  vm.charts.bar2.data = [{
    key: "Cumulative Return",
    values: [
      {"label": "A", "value": 29.765957771107},
      {"label": "sport", "value": 0},
      {"label": "culture", "value": 32.807804682612},
      {"label": "entertainment", "value": 196.45946739256},
      {"label": "twinky winky", "value": 0.19434030906893},
      {"label": "shopping", "value": 98.079782601442},
      {"label": "wow wow", "value": 13.925743130903},
      {"label": "work", "value": 5.1387322875705}
    ]
  }];

  vm.charts.pie1.options = {
    chart: {
      type: 'pieChart',
      height: 250,
      x: function (d) {
        return d.key;
      },
      y: function (d) {
        return d.y;
      },
      showLabels: true,
      transitionDuration: 500,
      labelThreshold: 0.01,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    },
    title: {
      enable: true,
      text: "Gender",
      className: "h4",
      css: {
        width: "100%",
        textAlign: "center"
      }
    }
  };

  vm.charts.pie1.data = [
    {"key": "male", "y": 47},
    {"key": "female", "y": 43},
    {"key": "unknown", "y": 10}
  ];

  //d3.select(".nv-legendWrap").attr("transform", "translate(100,100)");
});