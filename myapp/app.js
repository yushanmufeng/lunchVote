var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// 已点列表
var selectedFoodList = [];
app.get('/selectedFoodList', function (req, res) {
    res.send(selectedFoodList);
});

// 菜单菜品列表
var foodTempList = [];
app.get('/foodTempList', function (req, res) {
    res.send(foodTempList);
});

// 提交菜品
app.get('/submitSelectFood', function (req, res) {
	var submitUserName = req.query.userName;
	var submitFoodName = req.query.food;
	var submitRemark = req.query.remark;
	var hasUser = false;
	for(var i = 0; i < selectedFoodList.length; i++){
		if(selectedFoodList[i].userName == submitUserName){
			selectedFoodList[i].foodName = submitFoodName;
			selectedFoodList[i].remark = submitRemark;
			hasUser = true;
			break;
		}
	}
	if(!hasUser){
		selectedFoodList.push({ userName: submitUserName, foodName: submitFoodName, remark: submitRemark });
	}
	res.send(selectedFoodList);
});

// 删除菜品
app.get('/deleteSelectFood', function (req, res) {
	var deleteUserName = req.query.userName;
	var removeIndex = -1;
	for(var i = 0; i < selectedFoodList.length; i++){
		if(selectedFoodList[i].userName == deleteUserName){
			removeIndex = i;
			break;
		}
	}
	if(removeIndex != -1){
		selectedFoodList.splice(removeIndex, 1);
	}
	res.send(selectedFoodList);
});

// 清空所有已选菜品
app.get('/deleteAllSelectFood', function (req, res) {
	selectedFoodList = [];
});

// 菜单新增菜品



app.use(express.static('public'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

foodTempList = [{ name:"麻辣豆腐",price:10 },
{ name:"家常豆腐炒肉",price:10 },
{ name:"油豆腐炒肉",price:10 },
{ name:"香干炒肉",price:10 },
{ name:"榨菜炒肉",price:10 },
{ name:"洋葱炒肉",price:10 },
{ name:"外婆菜炒肉",price:10 },
{ name:"酸豆角肉沬",price:10 },
{ name:"白萝卜肉丝",price:10 },
{ name:"青椒炒蛋",price:10 },
{ name:"青瓜炒肉",price:10 },
{ name:"青瓜炒蛋",price:10 },
{ name:"西红柿炒蛋",price:10 },
{ name:"香干回锅肉",price:11 },
{ name:"酸豆角回锅肉",price:11 },
{ name:"酸菜回锅肉",price:11 },
{ name:"土豆回锅肉",price:11 },
{ name:"外婆菜炒蛋",price:12 },
{ name:"洋葱炒蛋",price:12 },
{ name:"苦瓜炒蛋",price:12 },
{ name:"苦瓜炒肉",price:12 },
{ name:"手撕包菜",price:10 },
{ name:"红烧鱼块",price:10 },
{ name:"酸萝卜炒肉",price:10 },
{ name:"酸豆角鸡杂",price:10 },
{ name:"酸菜小笋肉沬",price:10 },
{ name:"红烧猪血",price:10 },
{ name:"大白菜炒肉",price:10 },
{ name:"青菜炒肉",price:10 },
{ name:"酸辣土豆丝",price:10 },
{ name:"腐竹炒肉",price:11 },
{ name:"木耳炒肉",price:12 },
{ name:"洋葱猪肝",price:12 },
{ name:"老干妈猪肝",price:12 },
{ name:"紅萝卜炒肉",price:12 },
{ name:"豆芽炒肉",price:10 },
{ name:"小炒肉",price:12 },
{ name:"莴笋炒肉",price:12 },
{ name:"鱼香茄子",price:12 },
{ name:"红烧茄子",price:12 },
{ name:"咸鱼茄子",price:12 },
{ name:"茄子豆角",price:12 },
{ name:"四季豆炒肉",price:12 },
{ name:"虎皮青椒",price:12 },
{ name:"干煸四季豆",price:12 },
{ name:"火腿炒蛋",price:12 },
{ name:"青椒回锅肉",price:12 },
{ name:"泡脚鸡杂",price:12 },
{ name:"湘味腊肉",price:12 },
{ name:"花菜炒肉",price:12 },
{ name:"酸菜鸡杂",price:12 },
{ name:"小笋腊肉",price:13 },
{ name:"蒜苔腊肉",price:13 },
{ name:"烟笋腊肉",price:13 },
{ name:"莴笋腊肉",price:13 },
{ name:"一碗香",price:13 },
{ name:"辣炒猪耳",price:14 },
{ name:"土豆焖鸡",price:15 },
{ name:"香菇焖鸡",price:15 },
{ name:"香辣鸡丁",price:15 },
{ name:"酸辣肥肠",price:15 },
{ name:"酸菜肥肠",price:15 },
{ name:"裔椒猪肚",price:15 },
{ name:"酸菜猪肚",price:15 },
{ name:"酸辣猪肚",price:15 },
{ name:"红烧田鸡",price:15 },
{ name:"湘芹牛肉",price:15 },
{ name:"土豆牛肉",price:15 },
{ name:"腐竹牛肉",price:15 },
{ name:"红烧猪脚",price:15 },
{ name:"红烧排骨",price:15 },
{ name:"香菇排骨",price:15 },
{ name:"土豆排骨",price:15 },
{ name:"时令毛豆",price:15 },
{ name:"开胃螺丝",price:15 }];

