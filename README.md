# djudo
Django + Angular CMS

# Getting Started
1. Make sure you have mysql, python, pip, node, and @angular/cli installed. Homebrew is optional.
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
4. Created a virtual environment within your project root directory
```
cd /path/to/project; virtualenv .
```
5. Start the virtual environment
```
source bin/activate
```
6. Install environment requirements
```
pip install -r requirements.txt
```
7. Start MySQL
```
mysql.server start
```
8. Configure the Database information
```
/<project-path/server/djudo/settings.py
//edit the Databases object, and fill out the appropriate information
```
9. Change to the server directory and run the django server
```
cd /<project-path>/server; python manage.py runserver //http://localhost:8000
```
10. Change to the client directory and run the install.
```
npm install
```
or if you have yarn
```
yarn install
```
11. Run the client server
```
ng serve //http://localhost:4200
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
- category filters and view
- comments
- post images
