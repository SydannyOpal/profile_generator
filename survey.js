const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)? ",(answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`);
    
    rl.question("What's an activity you like doing? ", (answer2) => {
      console.log(`Your Favorite activity is: ${answer2}`);
    
      rl.question("What do you listen to while doing that? ", (answer3) => {
        console.log(`You listen to:${answer3} while ${answer2} `);
      
        rl.question("Which meal is your favourite meal of the day?", (answer4) => {
          console.log(`Your Favorite meal of the day is: ${answer4} `);

          rl.question("Which meal is your favourite?", (answer5) => {
            console.log(`Your Favorite meal is: ${answer5} `);
          
            rl.question("What's your favourite thing to eat for that meal?", (answer6) => {
            console.log(`Your Favorite thing to eat for ${answer5} is: ${answer6} `);
          
            rl.question("Which sport is your absolute favourite?", (answer7) => {
              console.log(`Your Favorite sport is: ${answer7} `);  

              rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer8) => {
                console.log(`Your Superpower is: ${answer8} `);
                  
              });

            });

          });
        
        });
        
      });

    });
    
  });
  rl.close();
});

