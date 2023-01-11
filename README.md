# firebase-react
Blog Website for firebase and React Applications

<div align="center">

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
</div>


<h4>Hosted on Firebase : <a href="https://reactblog-a06b8.web.app/" target="_blank">App</a> </h4>
<h4>Hosted on netlify : <a href="https://react-firebase-blog-site.netlify.app/" target="_blank">App</a> </h4>
<br>
<br>

* firebase setup  <code> npm install firebase@8.10.0 </code>
  ```
  import firebase as firebase
  import 'firebase/firestore'
  const firebaseConfig=.....
  firebase.initializeApp(firebaseConfig)
  export const firestore=fiebase.firestore
  ```

* Routes and react-router-dom <code> npm install react-router-dom --save </code> <br>
  code link : <a href="https://github.com/DeepakkPatil/firebase-react/blob/master/project/src/index.js" >index.js</a>

* Deployment Firebase :
  ```
  npm run build
  goto build operation firebase and select hosting
  follow all steps
  select existing project
  public directory:  build
  single pages: y
  build/index.html already exists overwrite: n
  firebase deploy
  ```
