from bs4 import BeautifulSoup
from selenium import webdriver
import time
from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

client = MongoClient('localhost', 27017)
db = client.koransoups

soup_stores = list(db.crawling_stores.find({}, {'_id':False}))
for store in soup_stores:
    link_url = store["link_url"]
    print(link_url)

