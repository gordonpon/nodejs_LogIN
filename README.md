# 「簡單版」的登入功能(1)
***
簡易登入功能實作，實用剛學到的工具（Express、路由等）去思考「登入功能」是怎麼做的、  
去熟悉如何處理從 client 傳送來的 request 裡的資料、以及練習如何設計使用者介面與訊息。  


## 使用套件
***
[Node.js](https://nodejs.org/zh-tw/)  
[npm](https://www.npmjs.com/)  
[express](https://www.npmjs.com/package/express)  
[express-handlebars](https://www.npmjs.com/search?q=express-handlebars)
[body-parser](https://www.npmjs.com/search?q=body-parser)  

## 終端機  
***
[cmder](https://cmder.net/)

## 安裝步驟
***
`git clone` 將專案下載至本機端  
```console
git clone https://github.com/gordonpon/nodejs_LogIN.git
```
執行`cmder` 進入本機端資料夾內，安裝 `npm`  
```console
npm init -y  
```
下載開發時所需要的套件
```console
npm install 
```
安裝後執行指令，確認`port設定為3000`，開啟瀏覽器，輸入`http://localhost:3000/` 即可執行程式  