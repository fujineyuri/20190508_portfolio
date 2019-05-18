
Chart.defaults.global.defaultFontSize = 12;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["コーディング", "設計", "ドキュメント作成", "ユーザーサポート", "顧客折衝", "チーム開発", "プロジェクト進行管理", "プロジェクト人的管理"],
    datasets: [{
      label :  "skill @本業",
      data: [3, 3, 5, 4, 3, 3, 4, 2],
      backgroundColor: 'rgba(250, 211, 207, 0.4)',
      borderColor: '#ffc1bc'
    },{
      label :  "skill @プライベート（Web系）",
      data: [1, 1, 0, 0, 0, 0, 1, 0],
      backgroundColor: 'rgba(255, 229, 201, 0.3)',
      borderColor: '#ff9f38'
    }]
  },
  options: {
    tooltips:{
      callbacks: {
        label: function(tooltipItems, data) {
          if(tooltipItems.yLabel == "0"){
            return "";
          }
          return data.datasets[tooltipItems.datasetIndex].label + "：Level " + tooltipItems.yLabel;
        }
      }
    },
    scale: {
      ticks:{
        suggestedMin: 0,
        suggestedMax: 7,
        stepSize: 1
      }
    },
    layout: {
      padding: {
        bottom: 40
      }
    }
  }
});




// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
