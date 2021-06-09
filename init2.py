import crawling2

from selenium import webdriver
from pymongo import MongoClient
from flask import Flask

app = Flask(__name__)

client = MongoClient('mongodb://test:test@13.124.154.57', 27017)
# client = MongoClient('localhost', 27017)

db = client.koransoups

driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')

crawling2.img('서울특별시 국밥')
crawling2.img('부산광역시 국밥')
crawling2.img('대구광역시 국밥')
crawling2.img('인천광역시 국밥')
crawling2.img('광주광역시 국밥')
crawling2.img('대전광역시 국밥')
crawling2.img('울산광역시 국밥')
crawling2.img('세종특별자치시 국밥')
crawling2.img('경기도 국밥')
crawling2.img('강원도 국밥')
crawling2.img('충청북도 국밥')
crawling2.img('충청남도 국밥')
crawling2.img('전라북도 국밥')
crawling2.img('전라남도 국밥')
crawling2.img('경상북도 국밥')
crawling2.img('경상남도 국밥')
crawling2.img('제주특별자치도 국밥')


print("______")
print("_____")
print("DB셋팅 완료")