// Vue三个核心模块
// Reactivity Module => 创建JavaScript对象，观察其变化
// Compiler Module => 获取HTML模版，编译成渲染函数
/* 
Renderer Module ：
  Render Phase 调用Render函数，返回虚拟DOM节点
  Mount Phase 使用虚拟DOM节点，调用DOM API来创建网页
  Patch Phase 渲染器将旧的DOM节点和新的DOM节点进行比较只更新变更的节点
*/