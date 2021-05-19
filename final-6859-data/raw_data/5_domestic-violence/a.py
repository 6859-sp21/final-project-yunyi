
from selenium import webdriver
import time

driver = webdriver.Chrome()

# start the web page
driver.get("https://wenshu.court.gov.cn/")
driver.maximize_window()
login_tag = driver.find_element_by_xpath('//*[@id="loginLi"]/a')


# get to login page
time.sleep(2)
login_tag.click()
bro.switch_to.frame("contentIframe")

# login




