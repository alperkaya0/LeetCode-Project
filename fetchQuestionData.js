const fetch = require("node-fetch");
const fs = require('fs');

function handle(data) {
    let s = data.titleSlug + "," + data.difficulty + "," + data.likes + "," + data.dislikes + "," + "0";
    fs.appendFileSync("data_didnt_solved.csv", s+"\n");
    return s;
}
fs.readFile('the_problems_i_havent_solved.txt', 'utf8', async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  list = data.split("\n");
  for (let x = 912; x < list.length; ++x) {
        let name = list[x].substring(0,list[x].length-1);
        if (x == list.length-1) {
            name = list[x];
        }
        console.log(name);
        try {
            await fetch("https://leetcode.com/graphql/", {
                "headers": {
                    <-- TRUNCATED FOR SECURITY ISSUES -->
                },
                "body": "{\"query\":\"\\n    query questionTitle($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    questionFrontendId\\n    title\\n    titleSlug\\n    isPaidOnly\\n    difficulty\\n    likes\\n    dislikes\\n  }\\n}\\n    \",\"variables\":{\"titleSlug\":\""+name+"\"}}",
                "method": "POST"
            }).then(res => res.json()).then(data => console.log(handle(data.data.question)));
        } catch {
            --x;
        }
        
    }
});


