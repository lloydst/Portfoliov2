# created with:
[mean-boilerplate](https://github.com/lloydst/mean-boilerplate)

angular(5)    - front-end <br>
node(express)  - back-end

## about:
 this project is deployment ready (in terms of setup)

## install guide:
 git clone (your own fork of) this project and `npm i` in the root, Create a .env file in the root if you would like to set the MURI (mongo connection string) or the environment

## required:
nodejs v6.12.0 (should work with later versions)
mongoDB (or Mlab if you never have to work offline)
npm (comes with node install)

### usefull commands:
`npm start`: starts the project 

`ng build`: builds the angular components and puts it into the dist folder that's getting static hosted by `express`

`npm run server`: reloads the server once server file's change or the dist folder gets rebuild very usefull for checking if both front and backend work toghether.

ToDo:
 - change the flavicon not to display the angular icon/ add my own
 - additional styling to move the text from the edge (check if it still works on mobile after)
 - add guard to the blog-admin path (any1 can acces it now)
