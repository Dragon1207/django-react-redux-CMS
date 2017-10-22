# djudo
Django + React + Redux CMS

# Getting Started
1. Make sure you have mysql, python, pip, node, and @angular/cli installed.
2. Install virtualenv
```
pip install virtualenv
```
3. Clone this repo
```
git clone git@github.com:rafay826/djudo.git
```
```
Directory Structure:
project-root/
  -client
  -server
  -virtualenv
```
4. Create a virtual environment within your project root directory
```
cd /path/to/project; virtualenv .
```
5. Start the virtual environment
```
cd virtualenv;
source bin/activate
```
6. Install environment requirements
```
pip install -r requirements.txt
//if there's a 'django.core cannot be found' manually pip install django before the requirements.txt
```
7. Start MySQL and create a database
```
mysql.server start;
mysql -u root -p (enter mysql username and password)
mysql create database <database-name>
```
8. Configure the Database information
```
/<project-path>/server/djudo/settings.py
//edit the Databases object, and fill out the appropriate information
```
9. Migrate database
```
python manage.py migrate
```
10. Run makemigrations, and your server will be setup
```
python manage.py makemigrations
```
11. Create a super user (admin)
```
python manage.py createsuperuser
```
12. Change to the server directory and run the django server
```
cd /<project-path>/server; python manage.py runserver //the url is at http://localhost:8000
```
13. Change to the client directory and run the install.
```
npm install
```
or if you have yarn
```
yarn install
```
14. Run the client server
```
ng serve //the url is http://localhost:4200
```
15. Head over to the server admin page to add posts and categories
```
http://localhost:8000/admin/
```

# API
The REST layer is created from serializing the models in django. They're exposed at http://localhost:8000/api/
i.e. http://localhost:8000/api/posts/

# Front-End
1. Your main views and development sandbox will exist at the client server url localhost:4200 to maintain hot-reloading and development efficiency, reading from the rest-layer provided.
2. To run a build and view the project in it's entirety at localhost:8000, run a build from the client.
```
ng build
```

Features coming soon:
- comments
