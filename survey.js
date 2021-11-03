const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  profile.push(answer);
  rl.question('What\'s an activity you like doing?', (answer) => {
    profile.push(`loves ${answer}`);
    rl.question('What do you listen to while doing that?', (answer) => {
      profile.push(`while listening to ${answer}.`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        profile.push(`${profile[0]}\'s favourite meal is ${answer},`);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profile.push(`where ${profile[0]} loves to eat ${answer}.`);
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.push(`${profile[0]} loves ${answer}, to burn off those excess calories.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.push(`${profile[0]}'s is the best at ${answer}`);
              console.log(profile.join(" "));
              rl.close();
            });
          });
        });
      });
    });
  });
});