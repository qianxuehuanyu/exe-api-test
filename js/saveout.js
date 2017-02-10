
var xlsx = require('node-xlsx').default;                                                                                                                          
var fs = require('fs');

var obj = {"worksheets":[{"data":[["姓名","性别","年龄"],["李晓龙","男","24"]]}]};
var file = xlsx.build(obj);

function saveout() {
	/* body... */
	fs.writeFileSync('user.xlsx', buffer);
}
