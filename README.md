# CityPop
CityPop is an app that lets you search for the populations of cities and towns. The population can be given either by directly searchinng a city or by the largest cities of a country.

## Prerequisites
Node.js version 10 or newer. The download for Node can be found [here](https://nodejs.org/en/download/).

### For Android devices
Install the [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent) on your android device. This is not needed if you only want to install the app and not change any of the project files. See [Installation on Android](#installandroid).

## Project Installation

Assuming Node is installed:

npm install can be used in the Node command promt to install expo CLI:
```
    npm install -g expo-cli
```

### Project setup
In the Node cmd navigate to a chosen directory to start the project. Setup a new expo project at the chosen directory using expo init:
```
    expo init project-name
```
Expo then give you options of what project template to use and then which workflow to use. Choose blank project and managed workflow (if you don't know which to choose). Expo will then initialize a blank project for you.

Download the files from the github repo and move the files to your pre-initialized project. There will be conflicts but simply overwrite all files that collide.

### External resources
It is possible that some external resources such as React Navigation need to be installed manually. This can be done using Node cmd: 
```
    npm install --save react-navigation
```
External resources that might need to be installed manually will be in the file package.json under 'dependencies' (This project currently only uses React Navigation)
.
## Running the app

Using Node cmd, navigate to your expo project and then run:
```
    npm start
```
or
```
    expo start
```
A QR-code will then show in the Node cmd and a new tab/window will open in your browser.

On your android device, open the expo app and press 'Scan QR code' and scan the code. The app will then be built, loaded to your device and run. Any changes then made in the project files will then restart the app with the new files upon saving the file.

## <a id="installandroid"></a> Installation on Android
Download the citypop.apk file and transfer it to your android device or directly download it on your device. Locate teh file on your device, open it and press install. The app opening might require special permission to install the app which you can change in app settings. When installed, the app will appear with your other apps under the name 'CityPop'. 


## Project notes

For more detailed explanations on installing expo: [Expo Installation](https://docs.expo.io/versions/latest/introduction/installation/)

### IOS
The project can technically be run on iOS with a process similar to the android process. Building an .ipa file for installation has to be done manually. The app however, is not tested on iOS.

### Android device emulator/iOS device simulator
The app can be run with expo using an[ Android device emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/) or [iOS device simulator](https://docs.expo.io/versions/latest/introduction/installation/#ios-simulator) if no physical devices are available.


### Build .apk and .ipa
On how to build new installation files for Android and iOS read [this](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/).