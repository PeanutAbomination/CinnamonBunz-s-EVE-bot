import os, time, subprocess, glob, datetime

# declare clear
clear = lambda: os.system('cls')

# clear console from previous data renews
clear()

# delete data of its online time
open('./eveCmds/eveDatabase/onDate.xml', 'w').close()

# declares online time file and write it
now = datetime.datetime.now()
onDate = open("./eveCmds/eveDatabase/onDate.xml", "a")
onDate.write(now.strftime("%Y-%m-%d %H:%M:%S"))

# informs user date and time of data renewal
print("\nRenewing data at", end=" ")
print(now)

# renew the most recent data in database
print("\nRenewing recent.xml")
open('./eveCmds/eveDatabase/recent.xml', 'w').close()
list_of_files = glob.glob('./logs/Chatlogs/*') # * means all if need specific format then *.csv
latest_file = max(list_of_files, key=os.path.getctime)
Lfile = open("./eveCmds/eveDatabase/recent.xml", "a")
Lfile.write(latest_file)

# check and renews the online checker database for javascript AI to use: on.xml
print("Checking database: on.xml")
filesize = os.path.getsize("./eveCmds/eveDatabase/on.xml")
if filesize == 0:
    onFile = open("./eveCmds/eveDatabase/on.xml", "a")
    print("\non.xml is empty: " + str(filesize) + "\nAttempting to renew on.xml")
    onFile.write("true")
    print("on.xml has been renewed!")
else:
    print("\non.xml is not empty: " + str(filesize) + "\nIgnoring renew procedure......")

# check and renews the online checker database for javascript AI to use: on2.xml
print("Checking database: on2.xml")
filesize = os.path.getsize("./eveCmds/eveDatabase/on2.xml")
if filesize == 0:
    on2File = open("./eveCmds/eveDatabase/on2.xml", "a")
    print("\non2.xml is empty: " + str(filesize) + "\nAttempting to renew on.xml")
    on2File.write("true")
    print("on2.xml has been renewed!")
else:
    print("\non2.xml is not empty: " + str(filesize) + "\nIgnoring renew procedure......")

# declares offline time file and write it
open('./eveCmds/eveDatabase/offDate.xml', 'w').close()
offDate = open("./eveCmds/eveDatabase/offDate.xml", "a")
offDate.write(now.strftime("%Y-%m-%d %H:%M:%S"))

# initiates a 15 seconds cooldown then start another database renew python script for loop
print("\n\nInitiate cooldown, will check database again in 1sec......")
time.sleep(1)
exec(open("./databaseRun.py").read())