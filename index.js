const createLoginTracker = (userInfo) => {
  let wrongCount = 0;

  return (passwordAttempt) => {
    if (wrongCount < 3 && passwordAttempt === userInfo.password) {
      return "Login successful";
    }
    if (wrongCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }
    wrongCount++;

    if (wrongCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    return `Login attempt ${wrongCount}: Login failed`;
  };
};
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};



