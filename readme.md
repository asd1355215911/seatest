这是对seajs 1.3.0的测试

问题如下：


1. index.html中配置了alias，已经将dust配置过了，但是dashboard.js中仍然没有找到dust。同样配置的base，在seajs.use中能够正常使用
这是在开发环境下。

2. 在deploy环境下，该如何配置package.json中的dependencies的路径呢？和app.js中require的路径不一样吗？


