# Gen Life Shuffle App

The main features of the app:
1. The 3 images' order is shuffled randomly (using the Fisher-Yates algorithm) each time the button "Shuffle" is pressed.
2. The link "Go to other page" takes you to the /other route and retains the order of the images.

This app uses React and Redux and was built with Meteor.

## Setup

0. **Install Meteor**

    On Linux & MacOS, load a terminal and type:

    ```sh
    $ curl https://install.meteor.com/ | sh
    ```

    This will setup [Meteor](http://github.com/meteor/meteor) (including [Node](https://github.com/nodejs/node) and [Mongo](https://github.com/mongodb/mongo) if necessary).

    > _Note:_ Windows users must [download installer](https://www.meteor.com/install).

1. **Clone Repository**

    ```sh
    $ git clone https://github.com/medied/gen-life-shuffle-app.git
    $ cd gen-life-shuffle-app
    ```

2. **Install Dependencies**

    if you have npm installed, type:

    ```sh
    $ npm install
    ```

    if you only have meteor, type:

    ```sh
    $ meteor npm install
    ```

3. **Run App**

    While in repository directory type:

    ```sh
    $ meteor
    ```

    Load browser and go to [http://localhost:3000/](http://localhost:3000/) 🌑🌖🌕
    
## Notes 

- I tried to keep the app as simple as possible. For example, I pass the store state object down from root component as a prop instead of using `<Provider>`.
- App respects Redux' [three fundamental principles](http://redux.js.org/docs/introduction/ThreePrinciples.html). Store object holds the images order and it is the only source of truth. Image order is retained after routing because of this fact. 
- First time using Redux directly! Fun to learn and hack 🙂 .
