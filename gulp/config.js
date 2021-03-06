var src           = 'app',
    build         = 'build',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    buildAssets   = build + '/assets';

module.exports = {
  autoprefixer: {
    browsers: [
      '> 5%',
      'last 2 versions'
    ],
    cascade: false
  },
  bower: {
    src: dependencies + '/**/*',
    dest: buildAssets + '/_components'
  },
  browsersync: {
    server: {
      baseDir: [build]
    },
    port: 9999,
    files: [
      buildAssets + '/css/*.css',
      buildAssets + '/js/.js',
      buildAssets + '/img/**.{jpg,jpeg,gif,png}'
    ]
  },
  clean: {
    src: build,
    options: {
      force: true
    }
  },
  html: {
    src: [src + '/html/**/*.html', !src + '/html/templates/*.html'],
    dest: build
  },
  images: {
    src: src + '/images/**/*.{jpg,jpeg,gif,png}',
    dest: buildAssets + '/img'
  },
  javascript: {
    src: src + '/js/**/*.js',
    dest: buildAssets + '/js'
  },
  sass: {
    src: src + '/sass/core.scss',
    dest: buildAssets + '/css',
    options: {
      outputStyle: 'compressed'
    }
  },
  scsslint: {
    src: src + '/sass/*.scss',
    options: {
      'config': '/scsslint.yaml'
    }
  },
  watch: {
    images: src + '/images/**/*.{jpg,jpeg,gif,png}',
    html: src + '/html/**/*.html',
    sass: src + '/sass/**/*.{sass,scss}',
    scripts: src + '/scripts/**/*.js'
  }
};
