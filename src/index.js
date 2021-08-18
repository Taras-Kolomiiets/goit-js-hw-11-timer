class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    }
  }

  startTimer() {

    setInterval(() => {
      let currentDate = Date.now();
      const targetDate = this.targetDate.getTime();
      let deltaTime = targetDate - currentDate;

      const time = this.getTimeComponents(deltaTime);

      this.updateClockface(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateClockface({ days, hours, mins, secs }) {
  this.refs.days.textContent = `${days}`;
  this.refs.hours.textContent = `${hours}`;
  this.refs.mins.textContent = `${mins}`;
  this.refs.secs.textContent = `${secs}`;
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
