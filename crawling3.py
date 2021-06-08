from bs4 import BeautifulSoup
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.koransoups
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')

def img(locations):
    url = ('https://search.daum.net/nate?thr=sbma&w=tot&q=' +locations)
    driver.get(url)
    time.sleep(5) # 5초 동안 페이지 로딩 기다리기(이미지가 자꾸 바뀌는 페이지는 필요)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    more = driver.find_element_by_xpath('// *[ @ id = "poiColl"] / div[2] / div[3] / div / a / span[2]')
    more.click()
    more_1 = driver.find_element_by_xpath('// *[ @ id = "poiColl"] / div[2] / div[3] / div / a')
    more_1.click()
    driver.implicitly_wait(10)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    divs = soup.select('#poiColl > div.coll_cont.poi_cont > div.wrap_place > ul > li')

    driver.implicitly_wait(10)

    for div in divs:
        driver.implicitly_wait(10)

        img_url = div.select_one('div.cont_info > div.wrap_thumb > img')['src']
        title = div.select_one('div.cont_info > div.wrap_cont > a').text
        # phone = div.select_one('div.cont_info > div.wrap_cont > div:nth-child(4) > span').text
        # address = div.select_one('div.cont_info > div.wrap_cont > div:nth-child(4) > div > a').text
        # run_time = div.select_one('div.cont_info > div.wrap_cont > div.info_place.f_nb').text

        print(img_url)
        print(title)
        # print(phone)
        # print(address)
        # print(run_time)

        db.crawling_stores.update_one({'title':title},{'$set':{'img_url':img_url}})








