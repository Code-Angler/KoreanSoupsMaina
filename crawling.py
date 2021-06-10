from bs4 import BeautifulSoup
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask

app = Flask(__name__)

# client = MongoClient('mongodb://test:test@13.124.154.57', 27017)
client = MongoClient('localhost', 27017)

db = client.koransoups


def sel(locations):
    driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')
    driver.implicitly_wait(5)
    driver.get("https://map.kakao.com/link/search/" + locations)
    time.sleep(7) # 3초 동안 페이지 로딩 기다리기(이미지가 자꾸 바뀌는 페이지는 필요)
    more = driver.find_element_by_xpath('//*[@id="info.main.options"]/li[2]/a')
    more.send_keys('\n')
    time.sleep(5)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    lis = soup.select("#info\.search\.place\.list > li")
    for li in lis:

        head = li.select_one("div.head_item.clickArea > strong > a.link_name")
        body = li.select_one("div.info_item > div.addr > p:nth-child(1)")
        date = li.select_one("div.info_item > div.openhour > p > a")
        number = li.select_one("div.info_item > div.contact.clickArea > span.phone")
        detail = li.select_one("div.info_item > div.contact.clickArea > a.moreview")
        if head == None and body == None:
            pass
        else:
            title = head['title']
            address = body['title']
            run_time = date.text
            phone = number.text
            link_url = detail['href']
            print(title)



            doc = {
                "title" : title,
                "address" : address,
                "runTime" : run_time,
                "phone" : phone,
                "link_url" : link_url,
                "img_url" : ""
            }

            db.crawling_stores.insert_one(doc)

    print(locations,"완료")
    print("대략 10분 걸릴거야 , 쉬고있으셩!!")


