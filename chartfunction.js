


 var chartUpdate = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "result"
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