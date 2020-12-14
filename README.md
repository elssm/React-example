### Ajax+React+Express+axios案例

- ##### 数据来源

  ```
  https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839
  ```

  ```
  https://i.snssdk.com/api/feed/forum_flow/v1/?activeWidget=1&query_id=1656810113086509&tab_id=1656810113086525&category=forum_flow_subject&is_preview=0&stream_api_version=82&aid=13&offset=0&count=20
  ```

- ##### server端部署

  创建package.json文件，内容如下

  ```json
  {
    "name": "server",
    "description": "server app",
    "version": "0.0.1",
    "private": true,
    "dependencies": {
      "express": "4.x"
    }
  
  ```

  ```javascript
  cd server
  npm install
  ```

  

- ##### 服务端依赖安装

  ```javascript
  npm install express --save
  npm install axios --save
  ```

  

- ##### 前端安装

  ```javascript
  create-react-app reactapp
  cd reactapp
  npm install axios
  ```


- ##### server端启动

  ```javascript
  node index.js
  ```

- ##### 前端启动

  ```
  npm start
  ```

  

