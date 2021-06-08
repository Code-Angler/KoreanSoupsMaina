from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.koransoups

@app.route('/')
def home():
   db_stores = list(db.crawling_stores.find({}, {'_id': False}))
   return render_template('index.html', stores=db_stores)




if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)