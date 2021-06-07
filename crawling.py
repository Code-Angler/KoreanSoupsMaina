from bs4 import BeautifulSoup
from selenium import webdriver
import time

start = time.time()
driver = webdriver.Chrome('C:/Users/molin/AppData/Local/Programs/Python/Python38/chromedriver.exe')
def sel(locations):
    driver.get("https://map.kakao.com/?q=" +locations)
    time.sleep(5) # 5초 동안 페이지 로딩 기다리기(이미지가 자꾸 바뀌는 페이지는 필요)
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')
    more = driver.find_element_by_xpath('//*[@id="info.main.options"]/li[2]/a')
    more.send_keys('\n')

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
            doc = {
                "title" : title,
                "address" : address,
                "runTime" : run_time,
                "phone" : phone,
                "link_url" : link_url
            }

            # db.crawling_stores.insert_one{doc}

            print(title, address)
            print(run_time)
            print(phone)
            print(link_url)


sel('서울특별시 국밥')


# driver.quit() # 끝나면 닫아주기
print("time :", time.time() - start)