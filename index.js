const fs = require('fs');

const someConfig = `doTheJam
  the-monster-jam
    - the-graveyard-slam?: niner
`

const doIt = () => {
  try {
    fs.writeFileSync('./doobleblop.yml', someConfig);
  } catch (error) {
    console.log("couldn't write", error);
  }
} 

doIt();
