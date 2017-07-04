var AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx/xxxx',
  region: 'us-east-1'
});

var snsClient = new AWS.SNS();

var list = [
  {
    name: 'macgyver',
    phone: '556799999999'
  },{
    name: 'joao',
    phone: '09090909090'
  }
]

list.forEach((value, key) => {
  var obj = {
    Message: 'oi '+value.name+ '! clica aqui',
    PhoneNumber: value.phone
  }
    console.log('a mensagem seria', obj.Message)
    snsClient.publish(obj, function (err, data) {})
})


