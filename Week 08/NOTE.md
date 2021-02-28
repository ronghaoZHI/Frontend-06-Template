学习笔记

1. toy浏览器 总览

URL --HTTP--> HTML --parse--> DOM --css computing--> DOM with css --layout--> DOM with pos --render--> web-page-bitmap
 
2. 有限状态机 (处理字符串)

- 每一个状态都是一个机器  
  在每一个机器，可以 输入 存储 计算 输出  
  所有的机器接受的输入一致的  
  状态机每一个机器本身没有状态，如果是函数应该是 无附作用的纯函数
- 每一个机器知道下一个状态
  Moore型  
  Mealy型（一般都是）

1. http 客户端搭建， 状态机的应用 
   node客户端 Request类的编写，response 字符串 处理

