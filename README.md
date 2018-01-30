# selectPlugins
一个单级选择插件
demo看[这里](https://xypecho.github.io/selectPlugins)(浏览器打开后按f12，进去手机模式)  
![项目demo](https://raw.githubusercontent.com/xypecho/xypecho.github.io/master/selectPlugins/sadasd.gif)
## 项目依赖
需要jquery
## 使用说明
```
	<div class="div"></div>

	<script type="text/javascript">
		$('div').click(function(){
			let title_name='自定义'; //title_name为联动插件的标题，即取消和确定中间的‘自定义’处
			let select_data=['20人以下','220-100人','3100-500人','4500-1000人','51000-2000人','62000人以上'];//下拉框里面的数据，需要以数组格式传进去
			let mount=$(this);//选中的值将以 val='xxx'的形式在增加在点击的dom身上
			showMask(title_name,select_data,mount);
		})
	</script>
```

ps:第一次封装插件，用在自家项目里面感觉还挺流畅，如果有bug请issues 