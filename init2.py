import crawling3
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.koransoups

start = time.time()
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')

crawling3.img('서울특별시 국밥')
crawling3.img('부산광역시 국밥')
crawling3.img('대구광역시 국밥')
crawling3.img('인천광역시 국밥')
crawling3.img('광주광역시 국밥')
crawling3.img('대전광역시 국밥')
crawling3.img('울산광역시 국밥')
crawling3.img('세종특별자치시 국밥')
crawling3.img('경기도 국밥')
crawling3.img('강원도 국밥')
crawling3.img('충청북도 국밥')
crawling3.img('충청남도 국밥')
crawling3.img('전라북도 국밥')
crawling3.img('전라남도 국밥')
crawling3.img('경상북도 국밥')
crawling3.img('경상남도 국밥')
crawling3.img('제주특별자치도 국밥')