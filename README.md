# :iphone: Mobile React Native

A simple project to practice the main concepts of React Native.

It uses a RESTFull API provided by a backend made with Node.js: **[Backend with Node.js](https://github.com/prenato84/backend-node-module)**.

This frontend has a button for adding projects directly into the backend.

Some key React JS and React Native concepts:

- State and Immutability
- UseEffect for loading the list of projects from the backend
- RN components: StatusBar, SafeAreaView, FlayList, TouchableOpacity
- A little bit of Flexbox CSS was used for styling the components

<p align="center">
  <img width="250" src="./src/assets/mobile.png">
</p>

### :keyboard: Installation and Execution

As this project is only the frontend of the application, it is necessary to install and run the backend project first following the instructions at its own repo: **[Backend with Node.js](https://github.com/prenato84/backend-node-module)**.

With the backend started, now the frontend will be able to make the API's calls.

To install and run the frontend:

- Clone this repo

```
> git clone https://github.com/prenato84/modulo-mobile-react-native
```

- Go inside the project's main folder

```
> cd mobile
```

- Install the dependencies

```
yarn
```

- Start the project with Android

```
# If you have the ract-native-cli installed globally

react-native run-android

# With NPX

npx react-native run-android
```

- Start the project with iOS Simulator (Xcode)

```
# If you have the ract-native-cli installed globally

react-native run-ios

# With NPX

npx react-native run-ios

# For auto starting the simulator

react-native run-ios --simulator="DEVICE_NAME"
```

Notes:

1. If you are using an emulator, make sure that the baseURL at 'src/services/api.js' is using 'http://localhost:3333'
1. If it is a physical device, change the baseURL to 'http://LOCAL_MACHINE_IP:3333'

### :bookmark_tabs: API Description

Getting the projects list (GET Method at the URL)

> http://localhost:3333/projects

    It returns the total count of projects (X-Total-Count) inside the Http Header

Adding a project (POST Method at the URL)

> http://localhost:3333/projects

    The JSON Object:
    {
      title: `New Project ${Date.now()}`,
      owner: 'Owner Name',
    }

### :man_technologist: Requirements

- Javascript interpreter **[Node JS](https://nodejs.org/en/download/)**
- Version control system **[Git](https://git-scm.com/)**

OBS: if you don't want to use Git, you can download the project's zip file directly from the Project's GitHub Page as shown below:

<p align="center">
  <img width="40%" src="./src/assets/download.jpg">
</p>

### :memo: License

This project is under the MIT license.

---

Developed with 💜 by <a href="https://www.linkedin.com/in/prenato84">Paulo Castro</a> :wave:
