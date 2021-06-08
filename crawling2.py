import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.koransoups

start = time.time()
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')
soup_stores = list(db.crawling_stores.find({}, {'_id':False}))

for store in soup_stores:
    link_url = store["link_url"]
    driver.implicitly_wait(5)
    driver.get(link_url)
    # req = driver.page_source
    # soup = BeautifulSoup(req, 'html.parser')
    data = requests.get(link_url, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')

    time.sleep(3)
    # print(soup)
    img = driver.find_elements_by_css_selector("#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span.bg_present > span")
    menu = soup.select_one('#mArticle > div.cont_menu > ul')


    print(img)
    # print(menu)
    time.sleep(15)
    driver.quit()  # 끝나면 닫아주기
print("time :", time.time() - start)
