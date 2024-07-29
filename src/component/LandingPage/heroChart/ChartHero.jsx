import  { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ChartHero = () => {
  const chartRef2 = useRef(null);

  useEffect(() => {
    const options2 = {
      series: [{
        data: [4, 14, 2, 47, 42, 15, 47, 6, 65, 19, 14]
      }],
      chart: {
        type: 'line',
        width: 300,
        height: 30,
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
            formatter: function () {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart2 = new ApexCharts(chartRef2.current, options2);
    chart2.render();

    // Cleanup on unmount
    return () => {
      chart2.destroy();
    };
  }, []);

  return (
    <div>
      <div id="chart-2" ref={chartRef2}></div>
    </div>
  );
};

export default ChartHero;
