/*var a, b ,c ,result;
a = 0.5;
b = '33.8';
c = 5.7;
b = parseFloat(b);
result = a + b + c;
document.write('<p>Результат сложения чисел:' + a + '+' + b + '+' + c + '= <span>'+ result + '</span> </p>');*/

/*
//1.home-1
var test, result, type;

test = null;
type = typeof(test);

if(type == "number") {
	result = "В переменной test содержится число, увеличенное значение числа - " + (++test);
}
else if(type == "string") {
	result = "Переменная test содержит в себе строку - " + test;
}
else {
	result = "В переменной test ничего не записано";
}

document.write("<p>" + result +"</p>");

// 2.home-2
var date = 10;
var end_month, res, last_n;

end_month = 31 - date;
if(end_month < 0) {
	alert("Введена не корректная дата");
}

res = String(end_month);
last_n = res[res.length-1];

if(end_month > 4 && end_month < 21) {
	end_month = end_month + " дней";
}
else if(last_n == 1) {
	end_month = end_month + " день";
}
else if(last_n == 2 || last_n == 3 || last_n == 4) {
	end_month = end_month + " дня";
}
else {
	end_month = end_month + " дней";
}

document.write("<h2>До конца месяца осталось - " + end_month + "</h2>");*/

var x = 2048;

while (x > 0) {
	x = x / 2;
	
	if(x%2 !=0) {
		continue;
	}
	if(x == 0){
		break;
	}
	document.write(x + "<br>");
}


var color_tr,color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
	
	if(i == 1) {
		color_tr = "#c3c3c3";
	}
	else {
		color_tr = "#ffffff";
	}
	
	document.write("<tr style='height:30px;background-color:" + color_tr + "'>");

	for(var j = 1; j < 10; j++) {
		
		if(j == 1 || i == 1) {
			color_td = "#c3c3c3";
		}
		else {
			color_td = "#ffffff";
		}
			
		document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");













