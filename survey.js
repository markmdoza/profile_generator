const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {}; // An object to store user's answers

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = answer;

    rl.question('What got you into doing that activity? ', (answer) => {
      profile.activityReason = answer;

      rl.question('Are you a breakfast, lunch, or dinner type of person? ', (answer) => {
        profile.mealPreference = answer;

        rl.question('If you could pick one food to eat for the rest of your life, what would it be? ', (answer) => {
          profile.favoriteFood = answer;

          rl.question('What type of sports do you enjoy? ', (answer) => {
            profile.sports = answer;

            rl.question('Last one... If you were a superhero, what would your superpower be? ', (answer) => {
              profile.superpower = answer;

              // Form the paragraph for the online profile
              const profileParagraph = `Name: ${profile.name}\nActivity: ${profile.activity}\nReason for the activity: ${profile.activityReason}\nMeal Preference: ${profile.mealPreference}\nFavorite Food: ${profile.favoriteFood}\nSports: ${profile.sports}\nSuperpower: ${profile.superpower}`;

              console.log('Profile created:');
              console.log(profileParagraph);

              rl.close();
            });
          });
        });
      });
    });
  });
});