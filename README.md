## 啟動 server
1. 開啟終端機，cd 到存放專案位置並執行:
```
git clone https://github.com/Rubyrubylai/patient.git
```
2. 下載 docker，使用 docker CLI
```
docker-compose up
```
3. 在本機端 http://localhost:3000 開啟網址

## 功能列表
|功能|URL|描述|
|---|---|---|
|瀏覽|GET /patients|病人列表|
|瀏覽|GET /orders/:patientId|醫囑列表|
|新增|POST /orders/:patientId|新增多個醫囑|
|更新|PUT /orders|編輯醫囑|
|刪除|DELETE /orders|刪除醫囑|
