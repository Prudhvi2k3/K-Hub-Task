import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Chart } from 'chart.js/auto'; // Import Chart from Chart.js
import './Plot.css'; 

function Plot() {
  const [statistics, setStatistics] = useState({}); // Your state
  const [chartInstance1, setChartInstance1] = useState(null); // First chart instance
  const [chartInstance2, setChartInstance2] = useState(null);
  const [chartInstance3, setChartInstance3] = useState(null);;
  const [chartInstance4, setChartInstance4] = useState(null);;
  const [chartInstance5, setChartInstance5] = useState(null);;
  const [chartInstance6, setChartInstance6] = useState(null);; // Chart instance state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api'); // Update the URL
      setStatistics(response.data.statistics);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (Object.keys(statistics).length > 0) {
      if (chartInstance1) {
        chartInstance1.destroy(); // Destroy previous chart instance 1
      }
      if (chartInstance2) {
        chartInstance2.destroy(); 
        // Destroy previous chart instance 2
      }
      if (chartInstance3) {
        chartInstance3.destroy(); 
        // Destroy previous chart instance 2
      }
      if (chartInstance4) {
        chartInstance4.destroy(); // Destroy previous chart instance 1
      }
      if (chartInstance5) {
        chartInstance5.destroy(); 
        // Destroy previous chart instance 2
      }
      if (chartInstance6) {
        chartInstance6.destroy(); 
        // Destroy previous chart instance 2
      }
      
      const newChartInstance1 = createChart1(statistics); // Create a new chart instance 1
      const newChartInstance2 = createChart2(statistics);
      const newChartInstance3 = createChart3(statistics);
      const newChartInstance4 = createChart4(statistics); // Create a new chart instance 1
      const newChartInstance5 = createChart5(statistics);
      const newChartInstance6 = createChart6(statistics); // Create a new chart instance 2
      setChartInstance1(newChartInstance1);
      setChartInstance2(newChartInstance2);
      setChartInstance3(newChartInstance3);
      setChartInstance4(newChartInstance4);
      setChartInstance5(newChartInstance5);
      setChartInstance6(newChartInstance6);

    }
  }, [statistics]);
        

  const createChart1 = (statisticsData) => {
    const ctx = document.getElementById('myChart1');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cases', 'Deaths'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.mean_a, statisticsData.mean_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };

  const createChart2 = (statisticsData) => {
    const ctx= document.getElementById('myChart2');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Active', 'Serious'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.median_a, statisticsData.median_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };


  const createChart3 = (statisticsData) => {
    const ctx= document.getElementById('myChart3');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cases', 'Recovered'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.mode_a, statisticsData.mode_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };
  const createChart4 = (statisticsData) => {
    const ctx= document.getElementById('myChart4');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cases', 'Deaths'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.mode_a, statisticsData.mode_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };
  const createChart5 = (statisticsData) => {
    const ctx= document.getElementById('myChart5');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cases', 'Recovered'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.mode_a, statisticsData.mode_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };
  const createChart6 = (statisticsData) => {
    const ctx= document.getElementById('myChart6');
    if (ctx) {

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cases', 'Recovered'],
        datasets: [
          {
            label:" ",
            backgroundColor: 'chart-color-a',
            borderColor: 'border-color',
            data: [statisticsData.mode_a, statisticsData.mode_b],
          },
          // Add more datasets as needed for other statistical data
        ],
      },
      options: {
        maintainAspectRatio: false, // Allow the chart to adjust size
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              color: 'chart-label-color', // Change x label color
            },
          },
          y: {
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              color: 'chart-label-color',
               // Change x label color
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },// Hide the legend
      },
    });
  }
  };
  return (
    <div className="App">
      <div className="content">
        <div className="boxes-container boxes">
          {/* <div className="boxes"> */}
            <div className="box">
              MEAN 
              <div>
              <canvas id="myChart1"></canvas>
              </div> {/* Add the canvas for the chart */}
            </div>
            <div className="box">Median
            <canvas id="myChart2"></canvas>
            </div>
            <div className="box">Mode
            <canvas id="myChart3"></canvas></div>
          {/* </div> */}
        {/* </div> */}
       
        {/* <div className="boxes2"> */}
            <div className="box">
              MEAN 
              <div>
              <canvas id="myChart4"></canvas>
              </div> {/* Add the canvas for the chart */}
            </div>
            <div className="box">Median
            <canvas id="myChart5"></canvas>
            </div>
            <div className="box">Mode
            <canvas id="myChart6"></canvas></div>
        </div>
        
        
        <div className="info-box">
          <div className='database-icon'>
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <h2>About the Data</h2>
            <p>
              {/* Write 150 to 200 words introduction to your chosen dataset */}
              Your dataset introduction goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plot;
