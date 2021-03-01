# Media Search engine

## How to install 
#### 1. Download the file from git hub 
#### 2. Make sure you have node.js installed 
#### 3. npm install the backend
#### 4. npm install the front end 
#### 5. npm start the front and back end 

## How to use ? 
####  navigate to localhost:3000 
####  You should see this page
![shot](./img/hime.png)
#### 1. Then choose a category you would like to search
#### 2. Press the My list button to add it to your list 
#### 3. To see your list press the My list button on the top of the screen
#### 4. All the media on the list should be there you can also remove a item from the list if you wish to do so. 


# API 
#### You can make a get request to the api in test environment it will be on port 3001 of the locale host.
#### To get the object simply use /category and query name, and the name you wish to search.
#### Eg localhost:3001/movies/?name=tron 
#### The category's mach that of the frontend site 
#### Please note that it backend uses apples itunes api 
#### The api uses helmet for basic safety
