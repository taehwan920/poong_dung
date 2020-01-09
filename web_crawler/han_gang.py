from bs4 import BeautifulSoup
import requests

URL = "http://koreawqi.go.kr/index_web.jsp"

def get_page():
    req_url = requests.get(URL)
    soup_url = BeautifulSoup(req_url.text, "html.parser")
    return soup_url

def get_temperature(html):
    parent = html.find("tr",{"class":"site_S01001"})
    temper = parent.find("td",{"class":"avg1"})
    tem_text = temper.strip()
    return tem_text

def get_temper_data():
    tem_data = get_temperature(get_page)
    return tem_data
    