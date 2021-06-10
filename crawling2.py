from bs4 import BeautifulSoup
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask

app = Flask(__name__)

# client = MongoClient('mongodb://test:test@13.124.154.57', 27017)
client = MongoClient('localhost', 27017)

db = client.koransoups

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')

def img(locations):
    url = ('https://search.daum.net/nate?thr=sbma&w=tot&q=' +locations)
    driver.get(url)
    time.sleep(5) # 5초 동안 페이지 로딩 기다리기
    more = driver.find_element_by_xpath('// *[ @ id = "poiColl"] / div[2] / div[3] / div / a / span[2]')
    more.click()
    more_1 = driver.find_element_by_xpath('// *[ @ id = "poiColl"] / div[2] / div[3] / div / a')
    more_1.click()
    driver.implicitly_wait(10)
    time.sleep(5)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    time.sleep(5)
    divs = soup.select('#poiColl > div.coll_cont.poi_cont > div.wrap_place > ul > li')

    driver.implicitly_wait(10)

    for div in divs:
        driver.implicitly_wait(10)

        img_url = div.select_one('div.cont_info > div.wrap_thumb > img')['src'].replace("C58x58.q80", "T800x0.q80", 1)

        # title = div.select_one('div.cont_info > div.wrap_cont > a').text

        # print(title) # 크롤링 체크할시 활성화 하면 좋아서 keep

        db.crawling_stores.update_one({'img_url':""},{'$set':{'img_url':img_url}})

    print(locations, "완료")







