const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = (event) => {
  let days;

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name} has ${days} days to train for the event.`);
};

const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

const name2 = 'Warren';
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

logEvent(name2, event2);
logTime(name2, days2);
