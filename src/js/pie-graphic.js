const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Maria Eduarda (34,3%) - 1 ADM B', 'Maria Rita (27,7%) - 1 ADM A', 'Leidiara (11,7%) - Trilha Comunicação Audiovisual', 'Angela Kely (7,7%) - 1 TEC A', 'João Pedro (5,1%) - Trilha Comunicação Audiovisual', 'Ana Ritielly (4%) - 1 TEC B'],
      datasets: [{
        label: 'Número de votos',
        data: [173, 140, 59, 39, 26, 20],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 