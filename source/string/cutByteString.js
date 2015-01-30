// 글자를 바이트 단위로 자릅니다
clean.string.cutByteString = function(message, maximum) {
	//REQUIRED: message : 자를 문자열
	//REQUIRED: maximum : 자를 바이트 크기.

	//안녕하세요, 3 이렇게 값을던지면
	//안.... 만 표시해줍니다~ 아시죠 한글은 2바이트씩!
	var nbytes = 0;
	var inc=0;
	var msg='';
	var msgMore = '...';
	var msglen = message.length;
	for (i=0; i<msglen; i++)
	{
		var ch = message.charAt(i);
		if ( escape(ch).length > 4 )
		{
			inc = 2;
		}else
		if ( ch == '\n' )
		{
			if ( message.charAt(i-1) != '\r' )
			{
				inc=1;
			}
		}else
		if ( ch=='<' || ch=='>')
		{
			inc=4;
		}else
		{
			inc =1;
		}
		if ( (nbytes + inc ) > maximum)
		{
			break;
		}
		nbytes += inc;
		msg += ch;
	}
    if (message != msg)
    	msg = msg + msgMore;
	return msg;
}