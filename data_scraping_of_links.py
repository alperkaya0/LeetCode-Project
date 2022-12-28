from bs4 import BeautifulSoup

problems_i_solved = []
#skip_the_first = True #Because the first question is the daily question

for i in range(1, 22):
    html_doc = open("./problems i didnt solve/page"+str(i)+".txt", "r", encoding="utf-8")
    soup = BeautifulSoup(html_doc, 'html.parser')

    for i in soup.find_all('a'):
        if (i.get('href') != None and i.get('href').startswith("/problems/") and i.get("class") != None and i.get("class")[0] == "h-5" and i.get("class")[1] == "hover:text-blue-s" and i.get("class")[2] == "dark:hover:text-dark-blue-s"):
#            if (skip_the_first):
#                skip_the_first = False
#                continue
            problems_i_solved.append(i.get("href"))
print(len(problems_i_solved))

file = open("the_problems_i_havent_solved.txt", "w")
for e in problems_i_solved:
    file.write(e[10:len(e)-1] + "\n")
file.close()