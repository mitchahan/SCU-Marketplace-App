var UserSession = (function() {
    var email, password = undefined;
    var isLoggedIn = false;
  
    var getEmail = function() {
      return email;    // Or pull this from cookie/window.sessionStorage
    };

    var getPass = function() {
        return password;    // Or pull this from cookie/window.sessionStorage
    };

    var getIsLoggedIn = function() {
      return isLoggedIn;    // Or pull this from cookie/window.sessionStorage
    };
  
    var setEmail = function(new_email) {
        email = new_email;     // Also set this in cookie/window.sessionStorage
    };

    var setPass = function(new_pass) {
      password = new_pass;    // Or pull this from cookie/window.sessionStorage
    };

    var setIsLoggedIn = function(state) {
      isLoggedIn = state;    // Or pull this from cookie/window.sessionStorage
    };
  
    return {
      getEmail: getEmail,
      getPass: getPass,
      getIsLoggedIn: getIsLoggedIn,
      setEmail: setEmail,
      setPass: setPass,
      setIsLoggedIn: setIsLoggedIn
    }
  
  })();
  
  export default UserSession;