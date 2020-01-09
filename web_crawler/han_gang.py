# from bs4 import BeautifulSoup
# import requests

# URL = "http://koreawqi.go.kr/index_web.jsp"

# def get_temperature():
#     req_url = requests.get(URL)
#     soup = BeautifulSoup(req_url.text, 'html.parser')
#     parent = soup.find("tr", {"class" : "site_S01001"})
#     temper = parent.findChild("td", {"class" : "avg1"})
#     tem_text = temper.get_text(strip=True).strip()
#     return {"temperature" : tem_text}

# get_temperature()