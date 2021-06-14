const timer = setInterval(() => {
  const now = new Date();
  if(now.getSeconds >= 60) {
    clearInterval(timer);
  }
  document.getElementById('clock').innerHTML = `현재 시간: ${now.getHours()} : ${("0"+now.getMinutes()).substr(-2)} : ${now.getSeconds()}`;
}, 1000);