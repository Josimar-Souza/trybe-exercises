window.onload = () => {
    const clickBtn = document.querySelector('#btn');
    const countIndicator = document.getElementById('count-indicator');
    let clickCount = 0;
    countIndicator.innerHTML = 0;
    clickBtn.addEventListener('click', () => {
        clickCount += 1;        
        countIndicator.innerHTML = clickCount;
    })
}