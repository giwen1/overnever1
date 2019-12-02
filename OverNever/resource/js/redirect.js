const agent = navigator.userAgent.toLowerCase();
console.log(agent);

if ( (navigator.appName == 'Netscape' && navigator.userAgent.indexOf('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	alert("인터넷 익스플로러는 지원하지 않습니다. 크롬을 다운해 주세요.");
	location.assign("https://www.google.com/intl/ko/chrome/");
}
