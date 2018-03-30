var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "src"
  });

  gulp.watch("src/sass/*.scss", ["sass"]);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/*.js").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("src/sass/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
