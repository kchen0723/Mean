# Mean
Sample for mean stack

Steps to setup:(follow up https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/)
10) install git and tortoise git tool
20) download nodejs and install it. nodejs also include npm. Run "node -v" to verify it.
30) "npm install -g @angular/cli". run "ng --version" to verify it. 
40) "npm istall -g typescript". run "tsc --version" to verify it

50) ng new VisualizeClient to create client project
51) go to VisualizeClient
52) run "npm install" to install dependencies.
53) run "ng build" to build
54) run "ng serve" to start serve
55) open browser and go to "http://localhost:4200" to see the client

60) make a VisualizeServer folder
70) go to VisualizeServer folder
80) "npm init -y" to create package.json
85） "npm install --save-dev typescript" to install typescript locallly
90) "npx tsc --init" to create tsconfig.json
120) for tsconfig.json:
	set target = ES2015, 
	module = es2015, 
	declaration = true, 
	sourcemap = true
	outdir = "./dist"
	include = "./src"
130) for packag.json
	set type=module
	main = "./dist/index.js"
140) for launch.json	
	set program = "${workspaceFolder}\\dist\\index.js"
	
100) npm install express
110) implement mainJs.js to server angular JS