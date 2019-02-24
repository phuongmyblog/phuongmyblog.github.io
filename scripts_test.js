function passWord() {
var testV = 1;
var pass1 = prompt('Vui lòng nhập mật khẩu',' ');
while (testV < 3) {
if (!pass1) 
location.reload(true);
if (pass1.toLowerCase() == "123456@n") {
window.open('https://phuongmy.blog/protect?pms=https://123vaynhanh.vn/');
break;
} 
testV+=1;
var pass1 = 
prompt('Truy cập bị từ chối - Mật khẩu không chính xác. Vui lòng nhập lại.','Nhập mật khẩu tại đây');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
location.reload(true);
return " ";
} 
