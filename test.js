const RandomHub = require('./random-hub').RandomHub;

const hub = new RandomHub();
for (let i = 0; i < 10; ++i) {
    console.log(hub.getRandomHub());
}
