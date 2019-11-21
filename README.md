Sample petclinic mobile application for CUBA backend.
Built with: 
* [React Native](https://facebook.github.io/react-native/)
* CUBA TypeScript SDK [generator](https://github.com/cuba-platform/front-generator/blob/master/src/generators/sdk/README.md)

## Step by Step Guide

### Preparing CUBA Application

We'll be using [petclinic sample](https://github.com/cuba-platform/cuba-petclinic).

```
git clone https://github.com/cuba-platform/cuba-petclinic.git
```
#### Add REST API Addon
Open the project in CUBA Studio and [add](https://doc.cuba-platform.com/studio/#add_ons) REST API addon.

In our case you can just switch to `with-rest-api` branch:
```
git checkout with-rest-api
```

#### Setup Security
Once REST API addon is enabled you **must** configure [security](https://doc.cuba-platform.com/restapi-7.1/#security) and keep it up-to-date.

#### Setup Studio
For a convenience of using SDK generator toggle `Old Studio integration enabled` in CUBA plugin settings in IntelliJ.


### Creating React Native Application
#### Setup the Environment
You should have [Node.js](https://nodejs.org/en/download/) 12+ installed on your system. Optionally you may also install [Yarn](https://yarnpkg.com/). This particular sample project uses Yarn instead of npm. 

Install `Expo CLI`:

```
npm install -g expo-cli
```

#### Create a New React Native Project
```
expo init
```
This will prompt you with several options. For a simplicity we'll be using managed workflow ([more info about workflows](https://docs.expo.io/versions/latest/introduction/managed-vs-bare/) and TypeScript to get an advantage of strong typing. So select:
> \> `blank (TypeScript)`

Specify the name and the slug (e.g. `petclinic`) of your mobile app. The app should be available in the `./slug` subdirectory
```
cd petclinic
```

The next step is crucial to make CUBA's cli work: [specify](package.json#L2) `name` in `package.json` of newly created application.

Now you will be able to launch your newly-created app in web:
```
yarn web
```

In order to launch your app in Android/iOS simulators you will need to set up corresponding SDKs on your machine. 
Then it will be possible to launch the app as simple as

```
yarn android
```
or
```
yarn ios
```

Read more about Expo's features and abilities in the [official documentation](https://docs.expo.io/versions/v35.0.0/get-started/create-a-new-app/) 