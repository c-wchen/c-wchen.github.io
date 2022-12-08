(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{379:function(n,t,e){"use strict";e.r(t);var r=e(13),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("类似于回溯法，也是一种在问题的解空间树T上搜索问题解的算法。但在一般情况下，分支限界法与回溯法的求解目标不同。回溯法的求解目标是找出T中满足约束条件的所有解，而分支限界法的求解目标则是找出满足约束条件的一个解，或是在满足约束条件的解中找出使某一目标函数值达到极大或极小的解，即在某种意义下的最优解。")]),n._v(" "),e("p",[n._v("所谓“分支”就是采用广度优先的策略，依次搜索E-结点的所有分支，也就是所有相邻结点，抛弃不满足约束条件的结点，其余结点加入活结点表。然后从表中选择一个结点作为下一个E-结点，继续搜索。")]),n._v(" "),e("p",[e("strong",[n._v("[1] 选取节点")])]),n._v(" "),e("blockquote",[e("ol",[e("li",[n._v("FIFO搜索")]),n._v(" "),e("li",[n._v("LIFO搜索")]),n._v(" "),e("li",[n._v("优先队列式搜索")])])]),n._v(" "),e("p",[e("strong",[n._v("[2] 布线问题")])]),n._v(" "),e("p",[n._v("印刷电路板将布线区域划分成n×n个方格阵列，布线问题要求确定连接方格a到方格b的最短布线方案；布线时，电路只能沿着直线或直角（方格）布线；已经布线的方格被锁定，即不允许其它线路穿过")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('#!/usr/local/anaconda3/bin/python\nfrom queue import Queue \n"""\n- 分支界限法\n- 广度优先搜索\n- 布线问题\n"""\n\nfrom operator import eq\n\n\ndef find_path(grid, start, end):\n    if eq(start, end):\n        return [start]\n    # offset 各个方向上的偏移量\n    # 对应  上， 右， 下， 左\n    offset = [[0, 1], [1, 0], [0, -1], [-1, 0]]\n    """\n    cur 当前位置\n    next 下一个位置\n    dir_num 方向数目\n    q 储存展开位置\n    path 起点到终点的路径\n    """\n    cur, q, dir_num, next, path = start, Queue(), 4, [0, 0], []\n    grid[start[0]][start[1]] = 2\n    while True:\n        for i in range(dir_num):\n            next[0] = cur[0] + offset[i][0]\n            next[1] = cur[1] + offset[i][1]\n            if grid[next[0]][next[1]] == 0:\n                grid[next[0]][next[1]] = grid[cur[0]][cur[1]] + 1\n                if eq(next, end): break\n                q.put(next[:])\n        if eq(next, end): break\n        if q.empty(): return path\n        cur = q.get()\n    path_len = grid[end[0]][end[1]] - 2\n    cur = end\n    for j in range(path_len - 1, -1, -1):\n        path.append(cur)\n        for i in range(dir_num):\n            next[0] = cur[0] + offset[i][0]\n            next[1] = cur[1] + offset[i][1]\n            if grid[next[0]][next[1]] == j + 2: break\n        cur = next\n    path.append(start)\n    path.reverse()\n    return path\n   \nif __name__ == \'__main__\':\n    start = [3, 2]\n    end = [4, 6]\n    grid = [\n        [1, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 0, 0, 1, 0, 0, 0, 0, 1],\n        [1, 0, 0, 1, 1, 0, 0, 0, 1],\n        [1, 0, 0, 0, 0, 1, 0, 0, 1],\n        [1, 0, 0, 0, 1, 1, 0, 0, 1],\n        [1, 1, 0, 0, 0, 1, 0, 0, 1],\n        [1, 1, 1, 1, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 0, 0, 0, 0, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 1]\n    ]\n    print(find_path(grid, start, end))\n                \n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);