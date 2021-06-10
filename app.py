from pymongo import MongoClient
import jwt
import datetime
import hashlib
from flask import Flask, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['UPLOAD_FOLDER'] = "./static/profile_pics"

SECRET_KEY = 'SPARTA'


client = MongoClient('mongodb://test:test@13.124.154.57', 27017)
# client = MongoClient('localhost', 27017)
db = client.koransoups

@app.route('/')
def home():

    # 크롤링한 데이터 값 jinja 로 보내기 위한 코드
    db_stores = list(db.crawling_stores.find({}, {'_id': False}))
    seoul = []
    for stores in db_stores:
        address = stores['address']
        seoul_add = '서울' in address
        if seoul_add == True:
            seoul.append(stores)

    busan = []
    for stores in db_stores:
        address = stores['address']
        busan_add = '부산' in address
        if busan_add == True:
            busan.append(stores)

    daegu = []
    for stores in db_stores:
        address = stores['address']
        daegu_add = '대구' in address
        if daegu_add == True:
            daegu.append(stores)

    incheon = []
    for stores in db_stores:
        address = stores['address']
        incheon_add = '인천' in address
        if incheon_add == True:
            incheon.append(stores)

    gwangju = []
    for stores in db_stores:
        address = stores['address']
        gwangju_add = '광주' in address
        if gwangju_add == True:
            gwangju.append(stores)

    daejeon = []
    for stores in db_stores:
        address = stores['address']
        daejeon_add = '대전' in address
        if daejeon_add == True:
            daejeon.append(stores)

    ulsan = []
    for stores in db_stores:
        address = stores['address']
        ulsan_add = '울산' in address
        if ulsan_add == True:
            ulsan.append(stores)

    sejong = []
    for stores in db_stores:
        address = stores['address']
        sejong_add = '세종' in address
        if sejong_add == True:
            sejong.append(stores)

    gyeonggi = []
    for stores in db_stores:
        address = stores['address']
        gyeonggi_add = '경기' in address
        if gyeonggi_add == True:
            gyeonggi.append(stores)

    gangwon = []
    for stores in db_stores:
        address = stores['address']
        gangwon_add = '강원' in address
        if gangwon_add == True:
            gangwon.append(stores)

    chungbuk = []
    for stores in db_stores:
        address = stores['address']
        chungbuk_add = '충북' in address
        if chungbuk_add == True:
            chungbuk.append(stores)

    chungnam = []
    for stores in db_stores:
        address = stores['address']
        chungnam_add = '충남' in address
        if chungnam_add == True:
            chungnam.append(stores)

    jeonbuk = []
    for stores in db_stores:
        address = stores['address']
        jeonbuk_add = '전북' in address
        if jeonbuk_add == True:
            jeonbuk.append(stores)

    jeonnam = []
    for stores in db_stores:
        address = stores['address']
        jeonnam_add = '전남' in address
        if jeonnam_add == True:
            jeonnam.append(stores)

    gyeongbuk = []
    for stores in db_stores:
        address = stores['address']
        gyeongbuk_add = '경북' in address
        if gyeongbuk_add == True:
            gyeongbuk.append(stores)

    gyeongnam = []
    for stores in db_stores:
        address = stores['address']
        gyeongnam_add = '경남' in address
        if gyeongnam_add == True:
            gyeongnam.append(stores)

    jeju = []
    for stores in db_stores:
        address = stores['address']
        jeju_add = '제주' in address
        if jeju_add == True:
            jeju.append(stores)

    return render_template('index.html',
                           seouls=seoul,
                           busans=busan,
                           daegus=daegu,
                           incheons=incheon,
                           gwangjus=gwangju,
                           daejeons=daejeon,
                           ulsans=ulsan,
                           sejongs=sejong,
                           gyeonggis=gyeonggi,
                           gangwons=gangwon,
                           chungbuks=chungbuk,
                           chungnams=chungnam,
                           jeonbuks=jeonbuk,
                           jeonnams=jeonnam,
                           gyeongbuks=gyeongbuk,
                           gyeongnams=gyeongnam,
                           jejus=jeju
                           )


    # return render_template('index.html)
    # token_receive = request.cookies.get('mytoken')
    # try:
    #     payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
    #     user_info = db.users.find_one({"username": payload["id"]})
    #     return render_template('index.html', user_info=user_info)
    # except jwt.ExpiredSignatureError:
    #     return redirect(url_for("login", msg="로그인 시간이 만료되었습니다."))
    # except jwt.exceptions.DecodeError:
    #     return redirect(url_for("login", msg="로그인 정보가 존재하지 않습니다."))


@app.route('/login')
def login():
    msg = request.args.get("msg")
    return render_template('login.html', msg=msg)

@app.route('/review')
def review():
    msg = request.args.get("msg")
    return render_template('review.html', msg=msg)


@app.route('/user/<username>')
def user(username):
    # 각 사용자의 프로필과 글을 모아볼 수 있는 공간
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        status = (username == payload["id"])  # 내 프로필이면 True, 다른 사람 프로필 페이지면 False

        user_info = db.users.find_one({"username": username}, {"_id": False})
        return render_template('user.html', user_info=user_info, status=status)
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))


@app.route('/sign_in', methods=['POST'])
def sign_in():
    # 로그인
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']

    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    result = db.users.find_one({'username': username_receive, 'password': pw_hash})

    if result is not None:
        payload = {
            'id': username_receive,
            'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256').decode('utf-8')

        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


@app.route('/sign_up/save', methods=['POST'])
def sign_up():
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']
    password_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    doc = {
        "username": username_receive,  # 아이디
        "password": password_hash,  # 비밀번호
        "profile_name": username_receive,  # 프로필 이름 기본값은 아이디
        "profile_pic": "",  # 프로필 사진 파일 이름
        "profile_pic_real": "profile_pics/profile_placeholder.png",  # 프로필 사진 기본 이미지
        "profile_info": ""  # 프로필 한 마디
    }
    db.users.insert_one(doc)
    return jsonify({'result': 'success'})


@app.route('/sign_up/check_dup', methods=['POST'])
def check_dup():
    username_receive = request.form['username_give']
    exists = bool(db.users.find_one({"username": username_receive}))
    return jsonify({'result': 'success', 'exists': exists})


@app.route('/update_profile', methods=['POST'])
def save_img():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        # 프로필 업데이트
        return jsonify({"result": "success", 'msg': '프로필을 업데이트했습니다.'})
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))

'''

@app.route('/test', methods=['GET'])
def test_get():
   title_receive = request.args.get('title_give')
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 GET!'})

@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})
   
'''
if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)
