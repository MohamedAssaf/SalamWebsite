export let validateName = (name) => {
  if (name && name.length > 0) {
    return {
      status: 1,
    };
  }
  return {
    status: 0,
    error: "emptyName",
  };
};

export let validateEmail = (email) => {
  if (email && email.length > 0) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      return {
        status: 1,
      };
    }
    return {
      status: 0,
      error: "invalidEmail",
    };
  }
  return {
    status: 0,
    error: "emptyEmail",
  };
};

export let validatePhoneNumber = (number) => {
  if (number && number.length > 0) {
    if (number.length != 11) {
      const re = "^[0-9]+$";
      if (re.test(String(number))) {
        return {
          status: 1,
        };
      }
      return {
        status: 0,
        error: "phoneNumberHasCharacters",
      };
    }
    return {
      status: 0,
      error: "invalidPhoneNumber",
    };
  }
  return {
    status: 0,
    error: "emptyPhoneNumber",
  };
};

export let validatePassword = (password) => {
  if (password && password.length > 0) {
    if (password.length > 8) {
      const re = '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*d)(?=.*[!#$%&? "]).*$';
      if (re.test(String(password))) {
        return {
          status: 1,
        };
      }
      return {
        status: 0,
        error: "invalidPassword",
      };
    }
    return {
      status: 0,
      error: "passwordShort",
    };
  }
  return {
    status: 0,
    error: "emptyPassword",
  };
};

export let validateReferralCode = (code) => {
  if (code && code.length > 0) {
    return {
      status: 1,
    };
  }
  return {
    status: 0,
    error: "emptyCode",
  };
};
