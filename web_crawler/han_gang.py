from selenium import webdriver
from bs4 import BeautifulSoup
import time

URL = "http://koreawqi.go.kr/index_web.jsp"
path = r"C:\Users\taehw\AppData\Local\Programs\Python\Python37\chromedriver.exe"

def get_temperature():
    driver = webdriver.Chrome(path)
    driver.get(URL)
    driver.implicitly_wait(3)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    temper = soup.select('tr.site_S01001 > td.avg1')
    print(temper)
    return {"temperature" : temper}

get_temperature()
