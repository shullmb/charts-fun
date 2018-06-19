const ctx = document.getElementById('myChart').getContext('2d');

var cat = []
var nums = [];

data.forEach( (item) => {
    if (cat.indexOf(item.answer) === -1){
        cat.push(item.answer);
        let index = cat.indexOf(item.answer);
        nums[index] = 1;
    } else {
        let index = cat.indexOf(item.answer);
        nums[index]++;
    }
})

const myChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: cat,
        datasets: [{
            label: "# of Votes",
            data: nums
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})