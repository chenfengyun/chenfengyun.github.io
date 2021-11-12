<?php
$t_url=$_GET['url'];
if(!empty($t_url)) {
    preg_match('/(http|https):\/\//',$t_url,$matches);
    if($matches){
        $url=$t_url;
        $title='页面跳转中,请稍候...';
    } else {
        preg_match('/\./i',$t_url,$matche);
        if($matche){
            $url='http://'.$t_url;
            $title='页面跳转中,请稍候...';
        } else {
            $url='https://huahai.club/';
            $title='参数错误，正在返回首页...';
        }
    }
} else {
    $title='参数缺失，正在返回首页...';
    $url='https://chenfengyun.github.io/';
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="1;url='<?php echo $url;?>';">
<title><?php echo $title;?></title>
</head>
</html>