/*   STEP 1   */
export const leagueID = "784476558143422464"; // your league ID
export const leagueName = "AFL"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome! This is a work in progress. I will have a write up soon!</p>
  <p>And congrats to the 2021 League Champ Zak!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Andy",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bennet",
      "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Boyd",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Chris",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Gollo",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jake",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Joey",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kyle C",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kyle E",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Matt",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Stevie",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Zak",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Andy",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "philosophy": "Your fantasy team's philosophy",
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]

