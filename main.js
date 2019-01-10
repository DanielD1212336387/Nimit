
console.log('$',$);

$(".cardColor").click(function(e){
	$(this).toggleClass('selected');
});

function buildChart(){

	const CHART = document.getElementById("lineChart");
	console.log(CHART);

	let lineChart =new Chart(CHART, {
		type: 'line',
		data: {
			labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
                "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
			datasets: [
				{     
              				label: '(Dash) Hash Rate',
							fill: false,
							lineTension: 0.1,
							backgroundColor: "rgba(75,192,192,1)",
							borderColor: "rgba(75,192,192,1)",
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0.0,
							borderJoinStyle: 'miter',
							pointBorderColor: "rgba(75,192,192,1)",
							pointBackgroundColor: "rgba(75,192,192,1)",
							pointBorderWidth: 1,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "rgba(220,220,220,1)",
							pointHoverBorderColor: "rgba(220,220,220,1)",
							pointHoverBorderWidth: 2,
							pointRadius: 1,
							pointHitRadius: 10,
							data: [3403261.58,3603261.58,3803261.58,4603261.58,3203261.58,3403261.58,2803261.58, 3403261.58,3603261.58,3803261.58,4603261.58,
                     3203261.58,3403261.58,2803261.58, 4603261.58,3203261.58,3403261.58,2803261.58, 3403261.58,3603261.58,3803261.58,4603261.58],
						}
					]
				}
			}); 

	new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["NAV", "PIVX", "TBD"],
      datasets: [
        {
          label: "Coins",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Coins'
      }
    }
});
}
