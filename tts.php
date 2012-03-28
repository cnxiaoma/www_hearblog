<?php
//the text to be read
$text_to_read = $_GET[ÒtextÓ];
 
//Your API key here
$apikey = 'wI1WlCOU6vzV3ueG6wgkM7FBuvmGVSpunNFtdNSK';
 
//API URL of text-to-speech enabler
$tts_url = 'http://tts.labs.ericsson.net/read';
 
//compose API call url
$url = $tts_url."?devkey=$apikey&text=$text_to_read";
 
$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HEADER, true);
	$audio_data = curl_exec($ch);
 
	$status = curl_getinfo($ch,CURLINFO_HTTP_CODE);
	if ($status == 200 && !curl_errno($ch))
	{
		curl_close($ch);
		header('HTTP/1.1 200 OK');
		header('Content-Type: audio/mpeg');
		echo $audio_data;
	}
	else
	{
      		//Cannot translate text to speech because of text-to-speech API error
 
	error_log(__FILE__.': API error while text-to-speech. error code='.$info['http_code'].' error msg='.$output);
 
		curl_close($ch);
        }
?>