
require('../lib/swiper.js')
var Vue = require('../lib/vue.js')
new Vue({
	el:'#home',
	data:{
		footerindex:0,
		list:[],
		banner:['/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png','/images/images/IMG_4730_02.png']			
	},
	methods:{
		footerTab:function(index){
			this.swiper.slideTo(index);
			this.footerindex = index;
		}
	},
	mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				console.log(res)
				this.list = res;
				this.swiper = new Swiper("#index-swiper",{
					loop:true,
					pagination : '.swiper-pagination',
					autoplay:2000,
					autoplayStopOnLast : true,
				})
			})
		}
})