### Github Insight

  本仓库是 2022 秋冬软件需求工程 G2 五菱宏光小组开源项目分析平台的前端仓库，前端使用 React + SemiDesign 进行设计。本项目已经部署到了腾讯云服务器，访问地址为 http://121.4.99.100:5708/。

### 本地构建方法

  首先使用如下命令安装依赖：

```shell
$ npm install
```
  然后：

```shell
$ npm start
```
  
  待加载完毕后，可以在本地 3000 端口访问前端页面。


### 前端部署

#### 部署工具链

| 工具名称 | 版本    |
| -------- | ------- |
| node     | 18.12.1 |
| npm      | 8.19.2  |
| serve    | 14.1.2  |
| nohup    | 8.32    |

#### 部署方法

  首先我们使用如下命令生成生产环境的前端文件：

```shell
$ npm run build 
```

​	生成在 `build` 目录的前端资源文件，包括了 `js` 和 `css` 文件。结构如下：

```
frontend/build
├── 46549ad7222debf6600d4784f9c3c00.png
├── asset-manifest.json
├── favicon.ico
├── index.html
├── insight.png
├── logo192.png
├── logo512.png
├── manifest.json
├── oldinsight.png
├── robots.txt
└── static
    ├── css
    │   ├── main.84b4eded.css
    │   └── main.84b4eded.css.map
    ├── js
    │   ├── main.08bec984.js
    │   ├── main.08bec984.js.LICENSE.txt
    │   └── main.08bec984.js.map
    └── media
        └── github.ae6be72cf13fe9aae905.jfif

4 directories, 16 files
```

​	接下来安装前端服务器：

```shell
$ npm install -g serve
```

​	紧接着启动前端服务：

```shell
 $ nohup serve -s build -l 3000 &! 
```

### 
