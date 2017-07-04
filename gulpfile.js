 var 	gulp= require ("gulp"),
 		uglify=require ("gulp-uglify"),
 		sass=require ("gulp-sass"),
 		concat=require("gulp-concat"),
 		less=require("gulp-less"),
 		rename=require("gulp-rename"),
 		minifyCss=require('gulp-minify-css'),
 		webserver=require("gulp-webserver"),
 		autoprefixer=require("gulp-autoprefixer");

//用于压缩css文件
gulp.task('minifycss',function(){
	gulp.src('./src/css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist/css'))
})

//压缩文件
gulp .task("uglify",function(){
	gulp.src("./src/!**!/!*.js")
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})
//解析sass
gulp .task("sass",function(){
	gulp.src("./src/css/!*.sass")
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('default',['sass',"webserver",'minifycss','uglify','testAutoFx']);

var url=require("url");
//webserver重启服务
gulp.task("webserver",['start'],function(){
	gulp.src("./")
		.pipe(webserver({
			port:3333,
			root:"./html",
			livereload:true,
			directorylisting:true,//node出服务文件列表
		}))
})

gulp.task("start",function(){
	gulp.watch('./src/css/*.sass',['sass']);
	gulp.watch("./src/js/*.js",['uglify']);
	gulp.watch("./!*.html")
})
//autoprefixer需要时自动添加前缀
gulp.task('testAutoFx',function(){
	gulp.src('./src/css/style.css')
		.pipe(autoprefixer({
			browsers:['last 2 versions', 'Android >= 4.0'],
			cascade:true, //是否美化属性值 默认：true 像这样：
			//-webkit-transform: rotate(45deg);
			//        transform: rotate(45deg);
			// remove:true//是否去掉不必要的前缀 默认：true
		}))
		.pipe(gulp.dest('./dist/css'))
})
