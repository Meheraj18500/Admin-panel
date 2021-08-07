/*
 * Play with this code and it'll update in the panel opposite.
 *
 * Why not try some of the options above?
 */
Morris.Area({
  element: 'areaChart',
  data: [
    { y: '2015', a: 12, b: 10 },
    { y: '2016', a: 60,  b: 48 },
    { y: '2017', a: 35,  b: 20 },
    { y: '2018', a: 42,  b: 35 },
    { y: '2019', a: 92,  b: 75 },
    { y: '2020', a: 86,  b: 60 },
    { y: '2021', a: 42, b: 30 },
    { y: '2022', a: 49, b: 33 },
    { y: '2023', a: 45, b: 30 },
    { y: '2024', a: 89, b: 59 },
    { y: '2025', a: 76, b: 45 },
    { y: '2026', a: 46, b: 35 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Submitted', 'Close'],
  xLabels: 'year',
  fillOpacity: 1,
  hideHover: 'auto',
  behaveLikeLine: true,
  resize: true,
  pointFillColors: ['#F28015'],
  pointStrokeColors: ['#ffffff'],
  lineColors: ['#F8333C', '#39B54A'],
  xLabelAngle: 45,
});







