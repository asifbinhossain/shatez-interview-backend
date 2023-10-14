# Feature 2

### Connecting to Firebase

To establish a connection between our API and Firebase, i followed these steps:

1. **Firebase Secret Key Download**: i began by downloading the Firebase secret key provided by Firebase. This key is essential for authenticating our API with the Firebase services.

2. **Creating a Firebase Service file and Module**: To keep the code organized and maintain separation of concerns, i created a file named `firebase.service.js` and added it to The `firebase.module.js that contains all the necessary functions and configurations related to Firebase integration.

3. **Firebase Initialization**: Within the `firebase.service.js` module, i initialized Firebase by using the downloaded secret key. This is how i ensured that Firebase could be used for authentication, database access, and other services.