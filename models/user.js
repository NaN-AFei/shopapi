var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PDD');

var UserSchema = mongoose.Schema({
    //用户名
    name: { type: String },
    //密码
    pwd: { type: String },
    //手机号
    phone: { type: String },
    //最后操作时间
    l_time: { type: Date, default: Date.now }
});

var User = mongoose.model('user', UserSchema);

module.exports = User;