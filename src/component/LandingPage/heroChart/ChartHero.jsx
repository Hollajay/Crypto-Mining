import  { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ChartHero = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartRef5 = useRef(null);
  const chartRef6 = useRef(null);
  const chartRef7 = useRef(null);
  const chartRef8 = useRef(null);

  const randomizeArray = (array) => array.sort(() => Math.random() - 0.5);

// Mock data for sparklineData
const sparklineData = [31, 40, 28, 51, 42, 109, 100, 44, 38, 52, 69];

  useEffect(() => {
    const options = {
      series: [{
        data: randomizeArray(sparklineData)
      }],
      chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      colors: ['#DCE6EC'],
      title: {
        text: '$424,652',
        offsetX: 0,
        style: {
          fontSize: '24px'
        }
      },
      subtitle: {
        text: 'Sales',
        offsetX: 0,
        style: {
          fontSize: '14px'
        }
      }
    };

    const chart1 = new ApexCharts(chartRef1.current, options);
    chart1.render();

    const optionsSpark2 = {
      ...options,
      title: {
        text: '$235,312',
        offsetX: 0,
        style: {
          fontSize: '24px'
        }
      },
      subtitle: {
        text: 'Expenses',
        offsetX: 0,
        style: {
          fontSize: '14px'
        }
      }
    };

    const chart2 = new ApexCharts(chartRef2.current, optionsSpark2);
    chart2.render();

    const optionsSpark3 = {
      ...options,
      title: {
        text: '$135,965',
        offsetX: 0,
        style: {
          fontSize: '24px'
        }
      },
      subtitle: {
        text: 'Profits',
        offsetX: 0,
        style: {
          fontSize: '14px'
        }
      }
    };

    const chart3 = new ApexCharts(chartRef3.current, optionsSpark3);
    chart3.render();

    const options1 = {
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => ''
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart4 = new ApexCharts(chartRef4.current, options1);
    chart4.render();

    const options2 = {
      ...options1,
      series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
      }]
    };

    const chart5 = new ApexCharts(chartRef5.current, options2);
    chart5.render();

    const options3 = {
      series: [43, 32, 12, 9],
      chart: {
        type: 'pie',
        width: 40,
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 1
      },
      tooltip: {
        fixed: {
          enabled: false
        }
      }
    };

    const chart6 = new ApexCharts(chartRef6.current, options3);
    chart6.render();

    const options4 = {
      ...options3,
      chart: {
        type: 'donut',
        width: 40,
        height: 40,
        sparkline: {
          enabled: true
        }
      }
    };

    const chart7 = new ApexCharts(chartRef7.current, options4);
    chart7.render();

    const options5 = {
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
      chart: {
        type: 'bar',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => ''
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart8 = new ApexCharts(chartRef8.current, options5);
    chart8.render();

    const options6 = {
      ...options5,
      series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
      }]
    };

    const chart9 = new ApexCharts(chartRef8.current, options6);
    chart9.render();

    const options7 = {
      series: [45],
      chart: {
        type: 'radialBar',
        width: 50,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%'
          },
          track: {
            margin: 0
          },
          dataLabels: {
            show: false
          }
        }
      }
    };

    const chart10 = new ApexCharts(chartRef8.current, options7);
    chart10.render();

    const options8 = {
      series: [53, 67],
      chart: {
        type: 'radialBar',
        width: 40,
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '50%'
          },
          track: {
            margin: 1
          },
          dataLabels: {
            show: false
          }
        }
      }
    };

    const chart11 = new ApexCharts(chartRef8.current, options8);
    chart11.render();
  }, []);

  return (
    <div>
      <div id="chart-spark1" ref={chartRef1}></div>
      <div id="chart-spark2" ref={chartRef2}></div>
      <div id="chart-spark3" ref={chartRef3}></div>
      <div id="chart-1" ref={chartRef4}></div>
      <div id="chart-2" ref={chartRef5}></div>
      <div id="chart-3" ref={chartRef6}></div>
      <div id="chart-4" ref={chartRef7}></div>
      <div id="chart-5" ref={chartRef8}></div>
      <div id="chart-6" ref={chartRef8}></div>
      <div id="chart-7" ref={chartRef8}></div>
      <div id="chart-8" ref={chartRef8}></div>
    </div>
  );
};

export default ChartHero;
