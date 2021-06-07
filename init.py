import crawling
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.koransoups

start = time.time()
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')

crawling.sel('서울특별시 국밥')
crawling.sel('부산광역시 국밥')
crawling.sel('대구광역시 국밥')
crawling.sel('인천광역시 국밥')
crawling.sel('광주광역시 국밥')
crawling.sel('대전광역시 국밥')
crawling.sel('울산광역시 국밥')
crawling.sel('세종특별자치시 국밥')
crawling.sel('경기도 국밥')
crawling.sel('강원도 국밥')
crawling.sel('충청북도 국밥')
crawling.sel('충청남도 국밥')
crawling.sel('전라북도 국밥')
crawling.sel('전라남도 국밥')
crawling.sel('경상북도 국밥')
crawling.sel('경상남도 국밥')
crawling.sel('제주특별자치도 국밥')

print("")
print("드디어 끝")

print("time :", time.time() - start)