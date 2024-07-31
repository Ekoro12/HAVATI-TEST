document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-wrap');
  const closeBtn = document.querySelector('.closeBtn');
  const notTodayBtn = document.querySelector('.notTodayBtn');

  const expiryKey = localStorage.getItem('key');
  const now = new Date().getTime();

  // expiryKey가 null인 경우 팝업 표시, 현재시간과 만료시간을 비교
  if (!expiryKey || parseInt(expiryKey) < now) {
    // 팝업 표시
    popup.classList.add('show');
  } else {
    // 팝업 감추기
    popup.classList.remove('show');
  }

  // 팝업창 닫기
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });

  // 오늘 하루 열지 않기
  notTodayBtn.addEventListener('click', () => {
    const expiryTime = 24 * 60 * 60 * 1000; // 24시간
    localStorage.setItem('key', now + expiryTime);
    popup.classList.remove('show');
  });
});
