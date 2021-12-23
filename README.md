# learn-modules-app-fullstack
<strong>install backend dependencies:</strong> cd ./backend && npm install <br />
<strong>install frontend dependencies:</strong> cd ./frontend && npm install <br />

<strong>start client:</strong> npm run start-client <br />
<strong>start server:</strong> npm run start-server <br />


<h3>backend endpoints</h3>

<strong>Authorization:</strong><br />
<i>api/auth/registration</i><br />
type: POST<br />
body: {email, password, username}<br />
response: {accessToken, refreshToken, user: {email, password, username, id}}<br />
<hr />
<i>api/auth/login</i><br />
type: POST<br />
body: {email, password}<br />
response: {accessToken, refreshToken, user: {email, password, username, id}}<br />
<hr />
<i>api/auth/refresh</i><br />
type: GET<br />
response: {accessToken, refreshToken, user: {email, password, username, id}}<br />
required request.cookies.refreshToken<br />
<hr />
<i>api/auth/delete</i><br />
type: DELETE<br />
response: {message}<br />
required request.cookies.refreshToken<br />
<hr />
<i>api/auth/logout</i><br />
type: GET<br />
response: {message}<br />
required request.cookies.refreshToken<br />
<hr />
<strong>Other:</strong><br />
<i>api/user/accountInfo</i><br />
type: GET<br />
response: {regData, successfulTests, failedTests, email, username, userId, _id}<br />
required request.headers.authorization.accessToken
<hr />
<i>api/user/accountInfo</i><br />
type: PUT<br />
body: {successfulTests || failedTests}<br />
required request.headers.authorization.accessToken<br />
required successfulTests or failedTests in body<br />
<strong>example:</strong><br />
PUT {successfulTests: 4, failedTests: 1}<br />
PUT {successfulTests: 1}<br />
PUT {failedTests: 0}<br />
<hr />
<i>api/user/activeModules</i><br />
type: GET<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
<hr />
<i>api/user/activeModules</i><br />
type: POST<br />
body: (see module.dto in backend/dtos/module.dto)<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
use POST for add new module
<hr />
<i>api/user/activeModules</i><br />
type: PUT<br />
body: (see module.dto in backend/dtos/module.dto)<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
use PUT for change exist module<br />
<hr />
<i>api/user/activeModules</i><br />
type: DELETE<br />
query: id (required)<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
<hr />
<i>api/user/archive</i><br />
type: GET<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
<hr />
<i>api/user/archive</i><br />
type: DELETE<br />
query: id(not required)<br />
if an id does not exist, will be removed all from archive. If id exist just one.<br />
<hr />
<i>api/user/dump</i><br />
type: GET<br />
response: (see modulesDB in backend/interfaces/accountInfo)<br />
required request.headers.authorization.accessToken<br />
<hr />
<i>api/user/dump</i><br />
type: DELETE<br />
query: id(not required)<br />
if an id does not exist, will be removed all from archive. If id exist just one.<br />
