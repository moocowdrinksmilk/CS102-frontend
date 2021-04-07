export default function ({ store, redirect }) {
//   If the user is not authenticated
  if (process.client && window.localStorage.getItem("vuex") != null) {
      console.log(JSON.parse(window.localStorage.getItem("vuex"))["auth"]);
      let isLoggedIn = JSON.parse(window.localStorage.getItem("vuex")).auth.authenticated
      if(!isLoggedIn){
        return redirect('/')
      }
    }
}