
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('balance').textContent = "$2,500,000.00";
  let roi = 0;
  const roiElem = document.getElementById('roi');
  const interval = setInterval(() => {
    if (roi >= 14350.76) return clearInterval(interval);
    roi += 300;
    roiElem.textContent = `$${roi.toFixed(2)}`;
  }, 50);

  document.getElementById('referralCode').textContent = "LS-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  const txs = ['+ $5,000 staking reward', '- $1,200 withdrawal', '+ $250 referral'];
  const txList = document.getElementById('transactionsList');
  txs.forEach(tx => {
    const li = document.createElement('li');
    li.textContent = tx;
    txList.appendChild(li);
  });

  const ctx = document.getElementById('portfolioChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['BTC', 'ETH', 'ALGO', 'CosmicX'],
      datasets: [{
        data: [45, 25, 15, 15],
        backgroundColor: ['#f7931a', '#627eea', '#00bcd4', '#d63384']
      }]
    }
  });
});

function estimateReward() {
  const amount = parseFloat(document.getElementById('stakeAmount').value);
  const reward = amount ? (amount * 0.12).toFixed(2) : 0;
  document.getElementById('rewardEstimate').textContent = `Estimated Reward: $${reward}`;
}

function copyReferral() {
  const text = document.getElementById('referralCode').textContent;
  navigator.clipboard.writeText(text);
  alert("Referral ID copied!");
}
