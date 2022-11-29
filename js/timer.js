
 const day = document.querySelector('.days');
 const hour = document.querySelector('.hours');
 const minute = document.querySelector('.minutes');
 const second = document.querySelector('.seconds');
 const offerEnd = document.querySelector('.timer-content p');
function Timer() {
    let counter = setInterval(handleTime,1000);
    function handleTime() {
        let targetDate = new Date('2022/12/20');
        let dateNow = new Date();
        let duration = targetDate - dateNow ;
        let days = Math.floor(duration/(1000 * 60 * 60 * 24));
        let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes= Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((duration % (1000 * 60)) / (1000));
        if((duration > 0)) {
             day.innerHTML = days < 10 ? `0${days}` : days;
        hour.innerHTML = hours < 10 ? `0${hours}` : hours;
        minute.innerHTML= minutes < 10 ? `0${minutes}` : minutes;
        second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        offerEnd.innerText = `Offer ends on ${targetDate.toUTCString()}`; 
        }else {
            clearInterval(counter);
        }
    }
}
export default Timer;
