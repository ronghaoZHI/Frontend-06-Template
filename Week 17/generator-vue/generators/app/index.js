var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  async initPackages() {
    // 
    let answer = await this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.name
    })

    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {},
      "DevDependencies": {}
    }
    // 
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    // 
    this.npmInstall([
      "vue"
    ], {
      "dev-save": false
    });

    this.npmInstall([
      "webpack", "webpack-cli", "vue-loader", "vue-style-loader",
      "vue-template-compiler", "css-loader",
      "copy-webpack-plugin", ""
    ], {
      "dev-save": true
    });

    // 
    const tplFiles = [
      {
        templatePath: 'index.html',
        destinationPath: 'src/index.html',
        title: answer.name
      },
      {
        templatePath: 'HelloWorld.vue',
        destinationPath: 'src/HelloWorld.vue'
      },
      {
        templatePath: 'main.js',
        destinationPath: 'src/main.js'
      },
      {
        templatePath: 'webpack.config.js',
        destinationPath: 'webpack.config.js'
      }
    ];

    for(let item of tplFiles ) {
      if(item.title) {
        this.fs.copyTpl(
          this.templatePath(item.templatePath),
          this.destinationPath(item.destinationPath),
          { title: item.title }
        );
        continue;
      }
      this.fs.copyTpl(
        this.templatePath(item.templatePath),
        this.destinationPath(item.destinationPath),
      );
    }
  }
};