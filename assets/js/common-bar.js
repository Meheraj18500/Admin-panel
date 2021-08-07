
Morris.Bar({
    barGap:10,
    barSizeRatio:0.60,
    element: 'commonBar',
    data: [
    { y: 'Person A', a: .006 },
    { y: 'Person B', a: .004 },
    { y: 'Person C', a: .008 },
    { y: 'Person D', a: .03 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Calls'],
    hideHover: 'auto',
    resize: true,
    grid: false,
    axes: false,
    barColors: function (row, series, type) {
        console.log("--> "+row.label, series, type);
        if(row.label == "Person A") return "#FCAB10";
        else if(row.label == "Person B") return "#39B54A";
        else if(row.label == "Person C") return "#2B9EB3";
        else if(row.label == "Person D") return "#F8333C";
    }
    });