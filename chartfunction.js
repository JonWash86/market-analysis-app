


 var chartUpdate = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Your Results:"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: images
            }
        ]
    });
    chart.render();
}
