function hoverMessagePosition(){
	var message=document.getElementsByClassName("hover_message_cont"),
	width=new Array(),
	dis=new Array();
	for(var i=0;i<message.length;i++){
		width[i]=message[i].offsetWidth;
		dis[i]=parseInt(width[i]);
		message[i].style.left=-(dis[i]-180)/2+"px";
	}
}
hoverMessagePosition();