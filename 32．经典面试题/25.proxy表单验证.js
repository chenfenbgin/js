// proxy set get 的应用： proxy实现表单验证
// 验证规则
const validators = {
  name: {
    validate(value) {
      return value.length > 6;
    },
    message: "用户名长度不能小于6",
  },
  password: {
    validate(value) {
      return value.length > 10;
    },
    message: "密码长度不能小于10位",
  },
  mobile: {
    validate(value) {
      return /^1(3|5|7|8|9)[0-9]{9}$/.test(value);
    },
    message: "手机号码格式错误",
  },
};

// 验证方法
function validator(obj, validators) {
  return new Proxy(obj, {
    set(target, key, value) {
      const validator = validators[key];
      if (!validator) {
        target[key] = value;
      } else if (validator.validate(value)) {
        target[key] = value;
      } else {
        console.log(validator.message || "");
      }
    },
  });
}

let form = {};
form = validator(form, validators);
form.name = "1111111";
form.password = "password";
