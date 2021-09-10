TEAM QUICKDRAW RUNNING/BUILD INSTRUCTIONS

our game was developed on the Cocos Creator engine
https://cocos2d-x.org/
and we have included the raw files from that project in the "Cocos Creator project files folder"
in the assets folder within project files, you will find most of the art assets and raw code we developed over the course of this project

Cocos Creator let us build this raw project into an Android app and all of the raw build files are in the "build file" folder
If you would like to rebuild the Android Studio app, open the Cocos Creator project, select project in the top bar, then press build
Choose Android as the target platform, select all ABIs, and set orientation to just landscape left.
You may have to configure the file paths for your JDK, NDK, and Android SDK installations within the settings in Cocos.

We have done all of these steps for you, so you will likely not have to rebuild the app, but we have left these instructions here just in case.
To actually run the app/install it on your phone, open up the "Android Studio Project" folder in Android Studio and wait for it to finish all tasks.
Then press the green play button in the top right and select your target device.
As our app relies heavily on the accelerometer of the phone, it is not advised to test the app on a virtual device, as accelerometer emulation is pretty shaky and will not reflect performance on an actual device.

We hope you enjoy what we have come up with in the past couple of weeks!
