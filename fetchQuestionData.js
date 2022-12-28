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
                    "accept": "*/*",
                    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7,ar;q=0.6",
                    "authorization": "",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-csrftoken": "CymxRMxzCXhM3V6F3x16LSp0j7XEK2N8axhLaMiry33Q6W05VH9bt8BMELdb77Bk",
                    "cookie": "gr_user_id=82d9e31e-0746-4d49-88e8-7dcd193bde28; __stripe_mid=fa746ae1-f6c2-4268-8f3b-c819f7edf630c84a93; 87b5a3c3f1a55520_gr_last_sent_cs1=alperkaya0; intercom-id-pq9rak4o=b531c362-a98e-44c7-95bf-ab480abcf599; _ga_DKXQ03QCVK=GS1.1.1660322402.1.1.1660322413.49; NEW_PROBLEMLIST_PAGE=1; csrftoken=CymxRMxzCXhM3V6F3x16LSp0j7XEK2N8axhLaMiry33Q6W05VH9bt8BMELdb77Bk; messages=\"123f8eb7a245f0421868617cc9532417ddfb928c$[[\\\"__json_message\\\"\\0540\\05425\\054\\\"Successfully signed in as alperkaya0.\\\"]\\054[\\\"__json_message\\\"\\0540\\05425\\054\\\"Successfully signed in as alperkaya0.\\\"]]\"; __atuvc=0%7C44%2C0%7C45%2C2%7C46%2C0%7C47%2C2%7C48; c_a_u=\"YWxwZXJrYXlhMA==:1p0NRe:aWeZdkbzugr0kPhEMZffbzuNuF8\"; _gid=GA1.2.1540298206.1670760527; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNjI3OTgwOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjAyOGIwZDFlYzYyZmQwM2VhNWVmN2E1ZWUyMzM3OTg5Mzc3YmRmYWEiLCJpZCI6NjI3OTgwOCwiZW1haWwiOiJhbHBlcmtheWE3ODc4NTZAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhbHBlcmtheWEwIiwidXNlcl9zbHVnIjoiYWxwZXJrYXlhMCIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9hdmF0YXJzL2F2YXRhcl8xNjYzNzg3MjY0LnBuZyIsInJlZnJlc2hlZF9hdCI6MTY3MDk0NzQ3OCwiaXAiOiI0Ni4xNTQuMTguMTgwIiwiaWRlbnRpdHkiOiI3OTJkZTUxZTRkNWJlNTJhMzVmNTVmMzU3MDE5M2ZjMyIsInNlc3Npb25faWQiOjMwNjc5MTM1fQ.QUSSiqCXUyul5KC5TvowfDYQTvaE0qZAovmqxKR-zY4; 87b5a3c3f1a55520_gr_session_id=ec181ad6-87d9-4beb-a07a-1359a7967617; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=ec181ad6-87d9-4beb-a07a-1359a7967617; 87b5a3c3f1a55520_gr_session_id_ec181ad6-87d9-4beb-a07a-1359a7967617=true; _ga=GA1.1.1920669953.1658004216; 87b5a3c3f1a55520_gr_cs1=alperkaya0; _ga_CDRWKZTDEX=GS1.1.1670952434.37.1.1670954461.0.0.0",
                    "Referer": "https://leetcode.com/problems/minimum-falling-path-sum/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": "{\"query\":\"\\n    query questionTitle($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    questionFrontendId\\n    title\\n    titleSlug\\n    isPaidOnly\\n    difficulty\\n    likes\\n    dislikes\\n  }\\n}\\n    \",\"variables\":{\"titleSlug\":\""+name+"\"}}",
                "method": "POST"
            }).then(res => res.json()).then(data => console.log(handle(data.data.question)));
        } catch {
            --x;
        }
        
    }
});


