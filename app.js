const modules = [
  {
    id: "rational-numbers",
    section: "一、数与运算",
    title: "1.1 有理数 Rational Numbers",
    tags: ["符号", "数轴", "绝对值", "乘方"],
    analysis: [
      "先判断符号，再做运算；负号在括号外和括号内含义不同，例如 -2² = -4，而 (-2)² = 4。",
      "绝对值表示到 0 的距离，结果永远非负；比较分数和小数时可统一成分数或小数。",
      "数轴题本质是有向移动：向右加，向左减。"
    ],
    pitfalls: ["忽略运算顺序", "把 -a² 误认为 (-a)²", "绝对值外的负号没有处理"],
    example: {
      prompt: "计算：(-3)² - |-4| + 2 × (-5)",
      steps: [
        "先算乘方和绝对值：(-3)² = 9，|-4| = 4。",
        "再算乘法：2 × (-5) = -10。",
        "合并：9 - 4 - 10 = -5。"
      ],
      answer: "-5"
    },
    exercises: [
      {
        level: "基础",
        prompt: "计算：-2³ + (-2)⁴ - |5 - 9|。",
        steps: ["注意 -2³ = -(2³) = -8。", "(-2)⁴ = 16，|5 - 9| = 4。", "所以 -8 + 16 - 4 = 4。"],
        answer: "4"
      },
      {
        level: "核心",
        prompt: "比较大小：-(-5/6) 与 |-0.82|。",
        steps: ["-(-5/6) = 5/6 ≈ 0.8333。", "|-0.82| = 0.82。", "0.8333 > 0.82。"],
        answer: "-(-5/6) > |-0.82|"
      },
      {
        level: "CSCA-like",
        prompt: "数轴上点 A 表示 -7/3，先向右移动 2.5 个单位，再向左移动 1/6 个单位，求终点表示的数。",
        steps: ["把 2.5 写成 5/2。", "终点 = -7/3 + 5/2 - 1/6。", "通分到 6：-14/6 + 15/6 - 1/6 = 0。"],
        answer: "0"
      }
    ]
  },
  {
    id: "real-numbers",
    section: "一、数与运算",
    title: "1.2 实数 Real Numbers",
    tags: ["平方根", "立方根", "科学记数法", "估算"],
    analysis: [
      "根式化简的核心是把被开方数拆成“完全平方因子 × 剩余因子”。",
      "比较根式大小常用平方比较，但两边必须都是非负数。",
      "科学记数法写成 a × 10ⁿ，其中 1 ≤ a < 10。"
    ],
    pitfalls: ["√a + √b 不能合并成 √(a+b)", "比较大小时忘记先确认非负", "科学记数法指数方向写反"],
    example: {
      prompt: "化简：√48 + √27 - √12",
      steps: ["√48 = √(16×3) = 4√3。", "√27 = √(9×3) = 3√3，√12 = √(4×3) = 2√3。", "合并同类根式：(4 + 3 - 2)√3 = 5√3。"],
      answer: "5√3"
    },
    exercises: [
      {
        level: "基础",
        prompt: "化简：√75 - √12 + 2√3。",
        steps: ["√75 = √(25×3) = 5√3。", "√12 = 2√3。", "5√3 - 2√3 + 2√3 = 5√3。"],
        answer: "5√3"
      },
      {
        level: "核心",
        prompt: "比较大小：√11 与 10/3。",
        steps: ["两数都为正，可以平方比较。", "(√11)² = 11，(10/3)² = 100/9 ≈ 11.111。", "因为 11 < 100/9，所以 √11 < 10/3。"],
        answer: "√11 < 10/3"
      },
      {
        level: "CSCA-like",
        prompt: "把 0.000000304 写成科学记数法。",
        steps: ["把小数点向右移动 7 位得到 3.04。", "向右移动 7 位说明原数乘以 10⁻⁷。", "所以 0.000000304 = 3.04 × 10⁻⁷。"],
        answer: "3.04 × 10⁻⁷"
      }
    ]
  },
  {
    id: "polynomials-fractions",
    section: "一、数与运算",
    title: "1.3 整式与分式 Polynomials and Fractions",
    tags: ["展开", "因式分解", "分式化简", "定义域"],
    analysis: [
      "整式乘法靠分配律；分式化简必须先因式分解，再约分。",
      "常用公式：(a+b)(a-b)=a²-b²；(a±b)²=a²±2ab+b²。",
      "分式题第一步常常是写限制条件：分母不能为 0。"
    ],
    pitfalls: ["约掉一项而不是约掉因式", "平方差公式符号看错", "忘记保留分母不为 0 的条件"],
    example: {
      prompt: "展开：(2x + 3)(x - 4)。",
      steps: ["用多项式乘多项式：2x·x + 2x·(-4) + 3·x + 3·(-4)。", "得到 2x² - 8x + 3x - 12。", "合并同类项：2x² - 5x - 12。"],
      answer: "2x² - 5x - 12"
    },
    exercises: [
      {
        level: "基础",
        prompt: "因式分解：x² - 9x + 20。",
        steps: ["找两个数，乘积为 20，和为 -9。", "这两个数是 -4 和 -5。", "所以 x² - 9x + 20 = (x - 4)(x - 5)。"],
        answer: "(x - 4)(x - 5)"
      },
      {
        level: "核心",
        prompt: "化简：(x² - 4)/(x + 2)，并写出限制条件。",
        steps: ["先因式分解：x² - 4 = (x - 2)(x + 2)。", "原式 = (x - 2)(x + 2)/(x + 2)。", "约分得 x - 2，但必须有 x + 2 ≠ 0，即 x ≠ -2。"],
        answer: "x - 2，x ≠ -2"
      },
      {
        level: "CSCA-like",
        prompt: "化简：(2a²b)³ ÷ (4ab²)，其中 a ≠ 0，b ≠ 0。",
        steps: ["先算乘方：(2a²b)³ = 8a⁶b³。", "再除以 4ab²：8a⁶b³/(4ab²)。", "系数 8/4=2，a⁶/a=a⁵，b³/b²=b。"],
        answer: "2a⁵b"
      }
    ]
  },
  {
    id: "linear-equations",
    section: "二、方程与不等式",
    title: "2.1 一元一次方程 Linear Equations",
    tags: ["去括号", "移项", "绝对值方程", "参数"],
    analysis: [
      "解一元一次方程的标准流程：去分母、去括号、移项、合并同类项、系数化为 1。",
      "绝对值方程要拆成两个方程；参数方程要讨论特殊值。",
      "应用题先设未知数，再翻译等量关系。"
    ],
    pitfalls: ["移项忘记变号", "绝对值只解一边", "参数方程不讨论系数为 0"],
    example: {
      prompt: "解方程：3(x - 2) - 2(x + 1) = 5。",
      steps: ["去括号：3x - 6 - 2x - 2 = 5。", "合并同类项：x - 8 = 5。", "两边加 8：x = 13。"],
      answer: "x = 13"
    },
    exercises: [
      {
        level: "基础",
        prompt: "解方程：(x - 3)/2 + (x + 1)/3 = 5。",
        steps: ["两边乘以 6：3(x - 3) + 2(x + 1) = 30。", "展开：3x - 9 + 2x + 2 = 30。", "5x - 7 = 30，所以 5x = 37，x = 37/5。"],
        answer: "x = 37/5"
      },
      {
        level: "核心",
        prompt: "解方程：|2x - 1| = 5。",
        steps: ["绝对值等于 5，说明 2x - 1 = 5 或 2x - 1 = -5。", "第一种：2x = 6，x = 3。", "第二种：2x = -4，x = -2。"],
        answer: "x = 3 或 x = -2"
      },
      {
        level: "CSCA-like",
        prompt: "解关于 x 的方程：a(x - 1) = 2x + 3。",
        steps: ["展开：ax - a = 2x + 3。", "移项：(a - 2)x = a + 3。", "若 a ≠ 2，则 x = (a + 3)/(a - 2)。", "若 a = 2，则原方程变为 2x - 2 = 2x + 3，即 -2 = 3，不成立，所以无解。"],
        answer: "a ≠ 2 时 x = (a + 3)/(a - 2)；a = 2 时无解"
      }
    ]
  },
  {
    id: "systems",
    section: "二、方程与不等式",
    title: "2.2 二元一次方程组 Systems of Linear Equations",
    tags: ["代入消元", "加减消元", "应用题", "参数"],
    analysis: [
      "两个未知数通常需要两个独立方程。",
      "加减消元适合系数容易配平的题；代入消元适合某个变量系数为 1 的题。",
      "判断解的个数，本质是判断两条直线相交、平行还是重合。"
    ],
    pitfalls: ["消元时只乘一边", "应用题单位不一致", "把无解和无数解混淆"],
    example: {
      prompt: "解方程组：2x + y = 7，x - y = 2。",
      steps: ["两式相加：(2x + y) + (x - y) = 7 + 2。", "得到 3x = 9，所以 x = 3。", "代入 x - y = 2：3 - y = 2，所以 y = 1。"],
      answer: "x = 3，y = 1"
    },
    exercises: [
      {
        level: "基础",
        prompt: "解方程组：3x + 2y = 8，2x - 3y = 1。",
        steps: ["第一式乘 3：9x + 6y = 24。", "第二式乘 2：4x - 6y = 2。", "相加：13x = 26，所以 x = 2。", "代入 3x + 2y = 8：6 + 2y = 8，所以 y = 1。"],
        answer: "x = 2，y = 1"
      },
      {
        level: "核心",
        prompt: "两数和为 15，差为 3，求这两个数。",
        steps: ["设较大数为 x，较小数为 y。", "列方程组：x + y = 15，x - y = 3。", "相加得 2x = 18，所以 x = 9；y = 6。"],
        answer: "9 和 6"
      },
      {
        level: "CSCA-like",
        prompt: "方程组 ax + 2y = 4，x + y = 3 的解为 x = 2，y = 1，求 a。",
        steps: ["把 x = 2，y = 1 代入第一式。", "得到 2a + 2 = 4。", "2a = 2，所以 a = 1。", "第二式 2 + 1 = 3，验证成立。"],
        answer: "a = 1"
      }
    ]
  },
  {
    id: "linear-inequalities",
    section: "二、方程与不等式",
    title: "2.3 一元一次不等式 Linear Inequalities",
    tags: ["不等号变向", "不等式组", "绝对值", "整数解"],
    analysis: [
      "不等式和方程步骤相似，但乘除负数时不等号必须反向。",
      "不等式组要取交集；绝对值小于型是中间夹，大于型是两边分。",
      "整数解题先求区间，再列出区间里的整数。"
    ],
    pitfalls: ["除以负数忘记变号", "不等式组取并集而不是交集", "端点开闭写错"],
    example: {
      prompt: "解不等式组：2x - 1 > 3，x + 2 ≤ 5。",
      steps: ["由 2x - 1 > 3 得 2x > 4，所以 x > 2。", "由 x + 2 ≤ 5 得 x ≤ 3。", "取交集：2 < x ≤ 3。"],
      answer: "(2, 3]"
    },
    exercises: [
      {
        level: "基础",
        prompt: "解不等式：|x - 3| ≤ 2。",
        steps: ["|x - 3| ≤ 2 等价于 -2 ≤ x - 3 ≤ 2。", "三边同时加 3：1 ≤ x ≤ 5。"],
        answer: "[1, 5]"
      },
      {
        level: "核心",
        prompt: "求不等式 (2x - 1)/3 < x + 1 的解集。",
        steps: ["两边乘以正数 3，不等号方向不变：2x - 1 < 3x + 3。", "移项：-4 < x。", "所以 x > -4。"],
        answer: "x > -4"
      },
      {
        level: "CSCA-like",
        prompt: "求不等式组 x - 1 > 0，2x + 1 ≤ 7 的整数解。",
        steps: ["第一式得 x > 1。", "第二式得 2x ≤ 6，所以 x ≤ 3。", "交集为 1 < x ≤ 3，其中整数为 2，3。"],
        answer: "2，3"
      }
    ]
  },
  {
    id: "quadratics",
    section: "二、方程与不等式",
    title: "2.4 一元二次方程 Quadratic Equations",
    tags: ["因式分解", "配方法", "判别式", "韦达"],
    analysis: [
      "优先尝试因式分解；不易分解时用配方法或公式法。",
      "判别式 Δ = b² - 4ac 决定实根个数。",
      "若已知两根 α, β，可用 α+β = -b/a，αβ = c/a。"
    ],
    pitfalls: ["公式法中 -b 写错", "判别式漏平方", "两个相等实根对应 Δ=0"],
    example: {
      prompt: "解方程：x² - 5x + 6 = 0。",
      steps: ["因式分解：x² - 5x + 6 = (x - 2)(x - 3)。", "令每个因式为 0：x - 2 = 0 或 x - 3 = 0。", "所以 x = 2 或 x = 3。"],
      answer: "x = 2 或 x = 3"
    },
    exercises: [
      {
        level: "基础",
        prompt: "用配方法解：x² - 4x - 5 = 0。",
        steps: ["移项：x² - 4x = 5。", "配方：x² - 4x + 4 = 9。", "(x - 2)² = 9，所以 x - 2 = ±3。", "x = 5 或 x = -1。"],
        answer: "x = 5 或 x = -1"
      },
      {
        level: "核心",
        prompt: "m 为何值时，x² + mx + 9 = 0 有两个相等实根？",
        steps: ["两个相等实根要求 Δ = 0。", "Δ = m² - 4·1·9 = m² - 36。", "令 m² - 36 = 0，得 m = ±6。"],
        answer: "m = 6 或 m = -6"
      },
      {
        level: "CSCA-like",
        prompt: "已知 x² - 3x + 1 = 0 的两根为 α, β，求 α² + β²。",
        steps: ["由韦达定理：α + β = 3，αβ = 1。", "α² + β² = (α + β)² - 2αβ。", "代入得 3² - 2·1 = 7。"],
        answer: "7"
      }
    ]
  },
  {
    id: "fractional-equations",
    section: "二、方程与不等式",
    title: "2.5 分式方程 Fractional Equations",
    tags: ["去分母", "验根", "增根", "无解"],
    analysis: [
      "分式方程第一步写分母不为 0 的限制。",
      "去分母得到整式方程后，最后必须验根。",
      "若解使原分母为 0，它只是增根，不能作为原方程的解。"
    ],
    pitfalls: ["忘记验根", "把增根当真解", "去分母时漏乘某一项"],
    example: {
      prompt: "解方程：2/(x - 1) = 3/(x + 2)。",
      steps: ["限制条件：x ≠ 1，x ≠ -2。", "交叉相乘：2(x + 2) = 3(x - 1)。", "2x + 4 = 3x - 3，所以 x = 7。", "x = 7 不使分母为 0，成立。"],
      answer: "x = 7"
    },
    exercises: [
      {
        level: "基础",
        prompt: "解方程：x/(x - 2) - 1 = 2/(x - 2)。",
        steps: ["限制条件：x ≠ 2。", "左边通分：x/(x - 2) - (x - 2)/(x - 2) = 2/(x - 2)。", "左边化为 2/(x - 2)，所以对所有 x ≠ 2 都成立。"],
        answer: "所有实数 x，且 x ≠ 2"
      },
      {
        level: "核心",
        prompt: "解方程：1/(x - 1) + 1/(x + 1) = 1/(x² - 1)。",
        steps: ["限制条件：x ≠ 1，x ≠ -1。", "左边通分得 (x+1+x-1)/(x²-1)=2x/(x²-1)。", "所以 2x/(x²-1)=1/(x²-1)。", "乘以 x²-1 得 2x=1，所以 x=1/2，符合限制。"],
        answer: "x = 1/2"
      },
      {
        level: "CSCA-like",
        prompt: "若关于 x 的方程 (x + m)/(x - 3) = 2 有增根，求 m。",
        steps: ["分母为 0 的点是 x = 3；增根必须是 x = 3。", "去分母：x + m = 2(x - 3)。", "整理得 x = m + 6。", "令 m + 6 = 3，得 m = -3。"],
        answer: "m = -3"
      }
    ]
  },
  {
    id: "sign-chart-inequalities",
    section: "二、方程与不等式",
    title: "2.6 因式相乘或相除的不等式 Sign Chart Inequalities",
    tags: ["临界点", "符号表", "分式不等式", "区间"],
    analysis: [
      "把不等式化成一边为 0，再因式分解。",
      "用零点和分母零点切分数轴；分母为 0 的点永远不能取。",
      "每个区间取测试点判断正负，再按 ≤、≥、<、> 选择区间。"
    ],
    pitfalls: ["分母为 0 的点误取", "零点开闭由不等号决定", "没有先移到一边"],
    example: {
      prompt: "解不等式：(x - 3)(x + 1) ≤ 0。",
      steps: ["临界点为 x = -1 和 x = 3。", "两根之间乘积为负，两端为正。", "因为要求 ≤ 0，所以取 -1 到 3，并包含端点。"],
      answer: "[-1, 3]"
    },
    exercises: [
      {
        level: "基础",
        prompt: "解不等式：(x - 2)/(x + 4) < 0。",
        steps: ["临界点：x = 2；分母零点：x = -4，不能取。", "区间为 (-∞,-4)，(-4,2)，(2,∞)。", "测试 x=0，原式为 -2/4 < 0，所以 (-4,2) 满足。", "严格小于 0，不含端点。"],
        answer: "(-4, 2)"
      },
      {
        level: "核心",
        prompt: "解不等式：((x + 1)(x - 5))/(x - 2) ≥ 0。",
        steps: ["临界点为 -1，2，5，其中 x=2 不能取。", "测试区间：(-∞,-1) 为负，(-1,2) 为正，(2,5) 为负，(5,∞) 为正。", "要求 ≥0，取正区间并包含分子零点。"],
        answer: "[-1, 2) ∪ [5, ∞)"
      },
      {
        level: "CSCA-like",
        prompt: "解不等式：(x² - 4)/(x - 1) > 0。",
        steps: ["因式分解：x² - 4 = (x - 2)(x + 2)。", "临界点：-2，1，2；其中 x=1 不能取。", "测试符号可得 (-2,1) 和 (2,∞) 为正。", "严格大于 0，不含 -2 和 2。"],
        answer: "(-2, 1) ∪ (2, ∞)"
      }
    ]
  },
  {
    id: "function-concepts",
    section: "三、函数",
    title: "3.1 函数概念 Function Concepts",
    tags: ["定义域", "函数值", "对应关系", "表示方法"],
    analysis: [
      "函数的关键是：每个 x 只能对应唯一一个 y。",
      "定义域由公式有意义决定：根号内非负，分母不为 0。",
      "函数值题就是把自变量代入表达式。"
    ],
    pitfalls: ["一个 x 对两个 y 仍误判为函数", "根号定义域忘记非负", "分母限制漏写"],
    example: {
      prompt: "函数 y = 2x + 1，当 x = 3 时，求 y。",
      steps: ["把 x = 3 代入 y = 2x + 1。", "y = 2·3 + 1 = 7。"],
      answer: "7"
    },
    exercises: [
      {
        level: "基础",
        prompt: "求函数 y = √(x - 2) 的定义域。",
        steps: ["根号内必须非负：x - 2 ≥ 0。", "所以 x ≥ 2。"],
        answer: "[2, ∞)"
      },
      {
        level: "核心",
        prompt: "判断 {(1,2), (2,3), (1,4)} 是否表示 y 是 x 的函数。",
        steps: ["观察 x = 1。", "x = 1 同时对应 y = 2 和 y = 4。", "同一个 x 对应两个 y，不满足函数定义。"],
        answer: "不是函数"
      },
      {
        level: "CSCA-like",
        prompt: "若 f(x)=x²-3x，求满足 f(a)=f(a+2) 的 a。",
        steps: ["f(a)=a²-3a。", "f(a+2)=(a+2)²-3(a+2)=a²+a-2。", "令 a²-3a=a²+a-2，得 -4a=-2。", "所以 a=1/2。"],
        answer: "a = 1/2"
      }
    ]
  },
  {
    id: "linear-functions",
    section: "三、函数",
    title: "3.2 正比例函数和一次函数 Linear Functions",
    tags: ["斜率", "截距", "交点", "象限"],
    analysis: [
      "一次函数 y=kx+b 中，k 控制增减和倾斜，b 是 y 轴截距。",
      "求解析式常用待定系数法：代入两点，解 k 与 b。",
      "两直线交点就是联立两个一次函数。"
    ],
    pitfalls: ["把截距 b 当成 x 轴交点", "x 增加量对应 y 增加 k 倍", "象限判断只看 k 忘记 b"],
    example: {
      prompt: "一次函数过点 (0,2) 和 (1,4)，求表达式。",
      steps: ["设 y = kx + b。", "代入 (0,2)，得 b = 2。", "代入 (1,4)，得 k + 2 = 4，所以 k = 2。", "表达式为 y = 2x + 2。"],
      answer: "y = 2x + 2"
    },
    exercises: [
      {
        level: "基础",
        prompt: "直线 y = 2x - 1 与 y = -x + 5 的交点坐标。",
        steps: ["令 2x - 1 = -x + 5。", "3x = 6，所以 x = 2。", "代入 y = 2x - 1，得 y = 3。"],
        answer: "(2, 3)"
      },
      {
        level: "核心",
        prompt: "一次函数 y = kx + b，当 x 增加 3 时，y 增加多少？",
        steps: ["原函数值为 y₁ = kx + b。", "x 增加 3 后，y₂ = k(x+3)+b = kx+b+3k。", "变化量 y₂-y₁ = 3k。"],
        answer: "3k"
      },
      {
        level: "CSCA-like",
        prompt: "一次函数图像经过第一、二、四象限，判断 k 和 b 的符号。",
        steps: ["经过第二、四象限且不经过第三象限，说明函数随 x 增大而减小，所以 k < 0。", "经过第一、二象限，说明 y 轴截距在正半轴，所以 b > 0。"],
        answer: "k < 0，b > 0"
      }
    ]
  },
  {
    id: "inverse-functions",
    section: "三、函数",
    title: "3.3 反比例函数 Inverse Proportional Functions",
    tags: ["k/x", "双曲线", "增减性", "面积"],
    analysis: [
      "反比例函数 y=k/x 的图像是双曲线，x 不能为 0。",
      "k>0 时在第一、三象限；k<0 时在第二、四象限。",
      "在同一象限内，k>0 时递减，k<0 时递增。"
    ],
    pitfalls: ["跨象限比较增减性", "忘记 x≠0", "把 |k| 的面积意义漏掉"],
    example: {
      prompt: "反比例函数 y = k/x 过点 (2,3)，求 k。",
      steps: ["把 x = 2，y = 3 代入 y = k/x。", "3 = k/2，所以 k = 6。"],
      answer: "k = 6"
    },
    exercises: [
      {
        level: "基础",
        prompt: "函数 y = (m - 1)/x 在 x > 0 时随 x 增大而增大，求 m 的范围。",
        steps: ["反比例函数在 x > 0 内，若 k<0，则 y 随 x 增大而增大。", "这里 k = m - 1。", "所以 m - 1 < 0，m < 1。"],
        answer: "m < 1"
      },
      {
        level: "核心",
        prompt: "当 x > 0 时，比较 y=3/x 与 y=4/x 的函数值大小。",
        steps: ["x > 0，所以可以比较分子。", "4 > 3，因此 4/x > 3/x。"],
        answer: "4/x > 3/x"
      },
      {
        level: "CSCA-like",
        prompt: "点 P 在 y=-12/x 上，过 P 作坐标轴垂线形成矩形，求矩形面积。",
        steps: ["反比例函数 y=k/x 上任一点与坐标轴围成的矩形面积为 |k|。", "这里 k=-12。", "面积 = |-12| = 12。"],
        answer: "12"
      }
    ]
  },
  {
    id: "basic-geometry",
    section: "四、图形与几何",
    title: "4.1 初步几何与平行线 Basic Geometry and Parallel Lines",
    tags: ["余角", "补角", "对顶角", "平行线角"],
    analysis: [
      "互余和为 90°，互补和为 180°。",
      "平行线被截：同位角相等、内错角相等、同旁内角互补。",
      "角度单位换算：1° = 60′。"
    ],
    pitfalls: ["余角和补角混淆", "分和度借位错误", "平行线角关系选错"],
    example: {
      prompt: "∠A 与 ∠B 互余，∠A = 35°20′，求 ∠B。",
      steps: ["互余表示两角和为 90°。", "计算 90°00′ - 35°20′。", "借 1° 为 60′：89°60′ - 35°20′ = 54°40′。"],
      answer: "54°40′"
    },
    exercises: [
      {
        level: "基础",
        prompt: "一个角为 124°30′，求它的补角。",
        steps: ["补角和为 180°。", "180°00′ - 124°30′ = 179°60′ - 124°30′。", "结果为 55°30′。"],
        answer: "55°30′"
      },
      {
        level: "核心",
        prompt: "两条平行线被一条直线所截，一个内错角为 68°，求另一个内错角。",
        steps: ["平行线的内错角相等。", "所以另一个内错角也为 68°。"],
        answer: "68°"
      },
      {
        level: "CSCA-like",
        prompt: "两条平行线被截，某个同旁内角为 112°，求另一个同旁内角。",
        steps: ["平行线的同旁内角互补。", "另一个角 = 180° - 112° = 68°。"],
        answer: "68°"
      }
    ]
  },
  {
    id: "triangles-congruence",
    section: "四、图形与几何",
    title: "4.2 三角形与全等 Triangles and Congruence",
    tags: ["内角和", "外角", "三边关系", "全等"],
    analysis: [
      "三角形内角和为 180°；一个外角等于不相邻两个内角之和。",
      "三边关系：任意两边之和大于第三边。",
      "全等三角形按对应顺序读，顺序决定对应边和对应角。"
    ],
    pitfalls: ["外角取错位置", "全等对应顺序读错", "只检查一组边和而不是任意两边"],
    example: {
      prompt: "△ABC 中，∠A=50°，∠B=60°，求 ∠C 及外角 ∠ACD。",
      steps: ["内角和：∠C = 180° - 50° - 60° = 70°。", "外角 ∠ACD 与 ∠C 互补，所以 ∠ACD = 180° - 70° = 110°。", "也可用外角定理：∠ACD = ∠A + ∠B = 110°。"],
      answer: "∠C=70°，∠ACD=110°"
    },
    exercises: [
      {
        level: "基础",
        prompt: "边长 4，7，12 能否组成三角形？",
        steps: ["检查较小两边之和是否大于最大边。", "4 + 7 = 11 < 12。", "不满足三边关系。"],
        answer: "不能"
      },
      {
        level: "核心",
        prompt: "△ABC≌△ADC，写出三组一定相等的边。",
        steps: ["按顺序对应：A 对 A，B 对 D，C 对 C。", "对应边为 AB 与 AD，BC 与 DC，AC 与 AC。"],
        answer: "AB=AD，BC=DC，AC=AC"
      },
      {
        level: "CSCA-like",
        prompt: "三角形一个外角为 128°，与它不相邻的一个内角为 47°，求另一个不相邻内角。",
        steps: ["外角等于两个不相邻内角之和。", "另一个内角 = 128° - 47° = 81°。"],
        answer: "81°"
      }
    ]
  },
  {
    id: "special-triangles",
    section: "四、图形与几何",
    title: "4.3 特殊三角形与勾股定理 Special Triangles and Pythagorean Theorem",
    tags: ["等腰三角形", "直角三角形", "勾股定理", "斜边高"],
    analysis: [
      "等腰三角形等边对等角；顶角确定时两个底角相等。",
      "直角三角形满足 a²+b²=c²；30° 所对直角边等于斜边一半。",
      "斜边上的高可用面积相等：ab/2 = ch/2。"
    ],
    pitfalls: ["把斜边和直角边混淆", "判断直角三角形时最大边必须作斜边", "等腰三角形底角没有平均分"],
    example: {
      prompt: "等腰 △ABC 中，AB=AC，∠A=40°，求 ∠B。",
      steps: ["AB=AC，所以 ∠B=∠C。", "∠B+∠C=180°-40°=140°。", "两个底角相等，所以 ∠B=70°。"],
      answer: "70°"
    },
    exercises: [
      {
        level: "基础",
        prompt: "Rt△ABC 中，∠C=90°，两直角边为 6 和 8，求斜边。",
        steps: ["由勾股定理 c²=6²+8²=36+64=100。", "所以 c=10。"],
        answer: "10"
      },
      {
        level: "核心",
        prompt: "同上题，求斜边上的高。",
        steps: ["面积可写成 6×8/2，也可写成 10×h/2。", "令 24 = 5h。", "h = 24/5 = 4.8。"],
        answer: "24/5"
      },
      {
        level: "CSCA-like",
        prompt: "判断边长 3，4，6 的三角形是否为直角三角形。",
        steps: ["最大边是 6。", "检查 3²+4² 是否等于 6²。", "3²+4²=25，6²=36，不相等。"],
        answer: "不是直角三角形"
      }
    ]
  },
  {
    id: "quadrilaterals",
    section: "四、图形与几何",
    title: "4.4 四边形 Quadrilaterals",
    tags: ["多边形内角和", "平行四边形", "矩形", "菱形"],
    analysis: [
      "n 边形内角和为 (n-2)×180°，外角和恒为 360°。",
      "平行四边形对边相等，对角线互相平分。",
      "矩形对角线相等且互相平分；正方形同时具有矩形和菱形性质。"
    ],
    pitfalls: ["多边形边数公式倒推错误", "对角线一半长度忘记除以 2", "矩形对角线夹角信息不会直接等于内角"],
    example: {
      prompt: "一个多边形的内角和为 1080°，求边数。",
      steps: ["设边数为 n，则 (n-2)×180° = 1080°。", "n-2 = 6。", "所以 n = 8。"],
      answer: "8"
    },
    exercises: [
      {
        level: "基础",
        prompt: "平行四边形 ABCD 中，对角线 AC=12，BD=10，AB=5，BC=8，O 为交点，求 △OCD 周长。",
        steps: ["平行四边形对角线互相平分，所以 OC=6，OD=5。", "CD=AB=5。", "周长 = OC+OD+CD = 6+5+5=16。"],
        answer: "16"
      },
      {
        level: "核心",
        prompt: "矩形 ABCD 中，对角线交于 O，∠AOB=60°，AB=4，求 AC。",
        steps: ["矩形对角线相等且互相平分，所以 OA=OB。", "△AOB 为等腰三角形，顶角 60°，所以它是等边三角形。", "OA=AB=4，因此 AC=2OA=8。"],
        answer: "8"
      },
      {
        level: "CSCA-like",
        prompt: "四边形 ABCD 中，AB∥CD 且 AB=CD，证明 ABCD 是平行四边形。",
        steps: ["连接 AC。", "因为 AB∥CD，所以 ∠BAC = ∠DCA。", "又 AB=CD，AC=CA。", "由 SAS 可得 △BAC≌△DCA，所以 BC∥AD。", "两组对边分别平行，故 ABCD 是平行四边形。"],
        answer: "证明见步骤"
      }
    ]
  },
  {
    id: "similar-triangles",
    section: "四、图形与几何",
    title: "4.5 相似三角形 Similar Triangles",
    tags: ["AA", "比例", "面积比", "周长比"],
    analysis: [
      "相似三角形对应角相等，对应边成比例。",
      "周长比等于相似比；面积比等于相似比的平方。",
      "应用题中要先确认对应关系，再列比例。"
    ],
    pitfalls: ["相似比方向写反", "面积比忘记平方", "对应边找错"],
    example: {
      prompt: "△ABC∽△DEF，相似比为 2:3，△ABC 面积为 12，求 △DEF 面积。",
      steps: ["面积比等于相似比平方。", "SABC:SDEF = 2²:3² = 4:9。", "SDEF = 12 × 9/4 = 27。"],
      answer: "27"
    },
    exercises: [
      {
        level: "基础",
        prompt: "两个相似三角形边长比为 4:5，小三角形周长为 32，求大三角形周长。",
        steps: ["周长比等于相似比。", "大周长 = 32 × 5/4 = 40。"],
        answer: "40"
      },
      {
        level: "核心",
        prompt: "两个相似三角形面积比为 16:25，求对应边之比。",
        steps: ["面积比是相似比的平方。", "对应边之比 = √16:√25 = 4:5。"],
        answer: "4:5"
      },
      {
        level: "CSCA-like",
        prompt: "旗杆影长 9 m，同一时刻 1.6 m 高学生影长 2.4 m，求旗杆高。",
        steps: ["太阳光线相同，形成相似三角形。", "旗杆高/9 = 1.6/2.4。", "旗杆高 = 9×1.6/2.4 = 6。"],
        answer: "6 m"
      }
    ]
  },
  {
    id: "trig",
    section: "四、图形与几何",
    title: "4.6 锐角三角函数 Acute Trigonometric Ratios",
    tags: ["sin", "cos", "tan", "特殊角"],
    analysis: [
      "在直角三角形中，sin=对边/斜边，cos=邻边/斜边，tan=对边/邻边。",
      "特殊角 30°、45°、60° 的值要熟练。",
      "解直角三角形时，先确定相对于目标角的对边、邻边、斜边。"
    ],
    pitfalls: ["对边邻边以所选锐角为准", "tan30° 与 sin30° 混淆", "特殊角值记反"],
    example: {
      prompt: "Rt△ABC 中，∠C=90°，AB=10，∠A=30°，求 BC 和 AC。",
      steps: ["AB 是斜边。", "BC 是 ∠A 的对边，所以 BC = AB·sin30° = 10×1/2 = 5。", "AC 是 ∠A 的邻边，所以 AC = AB·cos30° = 10×√3/2 = 5√3。"],
      answer: "BC=5，AC=5√3"
    },
    exercises: [
      {
        level: "基础",
        prompt: "计算：sin²45° + cos²45° - tan30° × sin60°。",
        steps: ["sin²45° + cos²45° = 1。", "tan30° = 1/√3，sin60°=√3/2。", "tan30°×sin60° = 1/2。", "结果为 1 - 1/2 = 1/2。"],
        answer: "1/2"
      },
      {
        level: "核心",
        prompt: "锐角 A 满足 tanA=3/4，求 sinA 和 cosA。",
        steps: ["tanA=对边/邻边=3/4。", "设对边为 3，邻边为 4，则斜边为 5。", "sinA=3/5，cosA=4/5。"],
        answer: "sinA=3/5，cosA=4/5"
      },
      {
        level: "CSCA-like",
        prompt: "一架梯子长 10 m，靠墙时与地面夹角为 60°，梯子顶端离地多高？",
        steps: ["高度是 60° 的对边，梯子是斜边。", "高度 = 10·sin60° = 10·√3/2 = 5√3。"],
        answer: "5√3 m"
      }
    ]
  },
  {
    id: "circle",
    section: "四、图形与几何",
    title: "4.7 圆 The Circle",
    tags: ["垂径定理", "圆周角", "切线", "扇形"],
    analysis: [
      "垂径定理常把弦的一半、圆心到弦距离、半径组成直角三角形。",
      "圆周角等于同弧圆心角的一半；同弧或等弧所对圆周角相等。",
      "切线判定：经过半径外端且垂直于半径的直线是切线。"
    ],
    pitfalls: ["弦长要先取一半", "圆周角分类讨论优弧和劣弧", "扇形公式中圆心角用度数"],
    example: {
      prompt: "⊙O 中，弦 AB=8，圆心 O 到 AB 的距离为 3，求半径。",
      steps: ["垂径定理：垂线平分弦，所以半弦长为 4。", "半径、距离 3、半弦 4 构成直角三角形。", "r² = 3² + 4² = 25，所以 r=5。"],
      answer: "5"
    },
    exercises: [
      {
        level: "基础",
        prompt: "扇形圆心角 60°，半径 6，求弧长和面积。",
        steps: ["弧长 l = nπr/180 = 60×π×6/180 = 2π。", "面积 S = nπr²/360 = 60×π×36/360 = 6π。"],
        answer: "弧长 2π，面积 6π"
      },
      {
        level: "核心",
        prompt: "A、B、C 在圆 O 上，∠AOB=100°，求 ∠ACB 的可能值。",
        steps: ["如果 C 在优弧 AB 上，则 ∠ACB 对应劣弧 AB，角为 100°/2 = 50°。", "如果 C 在劣弧 AB 上，则 ∠ACB 对应优弧 AB，优弧度数为 360°-100°=260°，角为 130°。"],
        answer: "50° 或 130°"
      },
      {
        level: "CSCA-like",
        prompt: "直线 l 经过圆 O 上一点 A，且 OA⊥l，证明 l 是圆 O 的切线。",
        steps: ["OA 是半径，A 是半径外端点。", "已知 l 经过 A 且 OA⊥l。", "根据切线判定定理：过半径外端且垂直于半径的直线是圆的切线。"],
        answer: "l 是圆 O 的切线"
      }
    ]
  }
];

const extraExerciseBank = {
  "rational-numbers": [
    {
      level: "高考同难度改编",
      prompt: "已知 a = -2，b = 3/4，c = -1/3，求 |a| - b ÷ c + ab。",
      steps: ["先算绝对值：|a| = 2。", "b ÷ c = (3/4) ÷ (-1/3) = -9/4。", "ab = -2 × 3/4 = -3/2，所以原式 = 2 - (-9/4) - 3/2 = 11/4。"],
      answer: "11/4"
    },
    {
      level: "综合提升",
      prompt: "数轴上 A 表示 -5/4，B 表示 7/6，求线段 AB 的中点表示的数。",
      steps: ["中点数值等于两个端点数值的平均数。", "中点 = [(-5/4) + 7/6] ÷ 2。", "通分：-5/4 + 7/6 = -15/12 + 14/12 = -1/12，所以中点为 -1/24。"],
      answer: "-1/24"
    },
    {
      level: "CSCA-like 加强",
      prompt: "整数 n 同时满足 |n - 2| ≤ 3 且 n/2 > -1，求所有 n 的和。",
      steps: ["由 |n - 2| ≤ 3 得 -3 ≤ n - 2 ≤ 3，所以 -1 ≤ n ≤ 5。", "由 n/2 > -1 得 n > -2。", "整数 n 为 -1、0、1、2、3、4、5，和为 14。"],
      answer: "14"
    }
  ],
  "real-numbers": [
    {
      level: "高考同难度改编",
      prompt: "计算：(√18 - √8)²。",
      steps: ["先化简根式：√18 = 3√2，√8 = 2√2。", "所以括号内为 √2。", "(√2)² = 2。"],
      answer: "2"
    },
    {
      level: "综合提升",
      prompt: "求 √50 + √8 的整数部分。",
      steps: ["√50 = 5√2，√8 = 2√2。", "所以 √50 + √8 = 7√2。", "因为 1.414 < √2 < 1.415，所以 9.898 < 7√2 < 9.905，整数部分是 9。"],
      answer: "9"
    },
    {
      level: "CSCA-like 加强",
      prompt: "设 a = √3 + √2，b = √3 - √2，求 a² + b²。",
      steps: ["先求 a + b = 2√3，ab = (√3 + √2)(√3 - √2) = 1。", "利用 a² + b² = (a + b)² - 2ab。", "代入得 (2√3)² - 2×1 = 12 - 2 = 10。"],
      answer: "10"
    }
  ],
  "polynomials-fractions": [
    {
      level: "高考同难度改编",
      prompt: "因式分解：2x² - 7x + 3。",
      steps: ["尝试分解为 (2x - 1)(x - 3)。", "展开验证：2x² - 6x - x + 3 = 2x² - 7x + 3。", "所以原式 = (2x - 1)(x - 3)。"],
      answer: "(2x - 1)(x - 3)"
    },
    {
      level: "综合提升",
      prompt: "化简：(x² - 1)/(x² + 2x + 1) ÷ ((x - 1)/(x + 1))，并写限制条件。",
      steps: ["因式分解：x² - 1 = (x - 1)(x + 1)，x² + 2x + 1 = (x + 1)²。", "原式 = [(x - 1)/(x + 1)] ÷ [(x - 1)/(x + 1)] = 1。", "限制条件：x + 1 ≠ 0 且除式不为 0，所以 x ≠ -1，x ≠ 1。"],
      answer: "1，x ≠ ±1"
    },
    {
      level: "CSCA-like 加强",
      prompt: "若 x + 1/x = 3，求 x² + 1/x²。",
      steps: ["两边平方：(x + 1/x)² = x² + 2 + 1/x²。", "代入 3² = x² + 2 + 1/x²。", "所以 x² + 1/x² = 9 - 2 = 7。"],
      answer: "7"
    }
  ],
  "linear-equations": [
    {
      level: "高考同难度改编",
      prompt: "若方程 mx + 2 = x + m 的解为 x = 2，求 m。",
      steps: ["把 x = 2 代入方程：2m + 2 = 2 + m。", "移项得 2m - m = 2 - 2。", "所以 m = 0。"],
      answer: "m = 0"
    },
    {
      level: "综合提升",
      prompt: "解方程：|2x - 3| = 5。",
      steps: ["绝对值方程分两种：2x - 3 = 5 或 2x - 3 = -5。", "第一种得 2x = 8，x = 4。", "第二种得 2x = -2，x = -1。"],
      answer: "x = 4 或 x = -1"
    },
    {
      level: "CSCA-like 加强",
      prompt: "某活动成人票比学生票贵 20 元，3 张成人票和 2 张学生票共 170 元，求学生票价格。",
      steps: ["设学生票为 x 元，则成人票为 x + 20 元。", "列方程：3(x + 20) + 2x = 170。", "解得 5x + 60 = 170，x = 22。"],
      answer: "学生票 22 元"
    }
  ],
  "systems": [
    {
      level: "高考同难度改编",
      prompt: "已知 x + y = 5，x² - y² = 15，求 x、y。",
      steps: ["利用平方差：x² - y² = (x - y)(x + y)。", "因为 x + y = 5，所以 5(x - y) = 15，x - y = 3。", "联立 x + y = 5 与 x - y = 3，得 x = 4，y = 1。"],
      answer: "x = 4，y = 1"
    },
    {
      level: "综合提升",
      prompt: "若方程组 2x + ay = 5，x - y = 1 的解满足 x = 2，求 a。",
      steps: ["由 x - y = 1 且 x = 2，得 y = 1。", "代入 2x + ay = 5：4 + a = 5。", "所以 a = 1。"],
      answer: "a = 1"
    },
    {
      level: "CSCA-like 加强",
      prompt: "用 8% 与 15% 的盐水配成 70g、浓度 12% 的盐水，分别需要多少克？",
      steps: ["设 8% 盐水 x 克，15% 盐水 y 克，则 x + y = 70。", "盐的质量方程：0.08x + 0.15y = 0.12×70 = 8.4。", "联立解得 x = 30，y = 40。"],
      answer: "8% 盐水 30g，15% 盐水 40g"
    }
  ],
  "linear-inequalities": [
    {
      level: "高考同难度改编",
      prompt: "解不等式：3(x - 1) ≤ 2x + 4。",
      steps: ["展开左边：3x - 3 ≤ 2x + 4。", "移项：x ≤ 7。", "所以解集为 x ≤ 7。"],
      answer: "x ≤ 7"
    },
    {
      level: "综合提升",
      prompt: "解不等式组：x/2 - 1 > 0，且 3 - x ≥ 1。",
      steps: ["由 x/2 - 1 > 0 得 x > 2。", "由 3 - x ≥ 1 得 -x ≥ -2，所以 x ≤ 2。", "两者无法同时满足，所以无解。"],
      answer: "无解"
    },
    {
      level: "CSCA-like 加强",
      prompt: "出租车起步价 10 元含 3km，超过 3km 后每千米 2.5 元。若车费不超过 40 元，行程最多多少千米？",
      steps: ["若超过 3km，设行程为 x km，费用为 10 + 2.5(x - 3)。", "列不等式：10 + 2.5(x - 3) ≤ 40。", "解得 2.5x + 2.5 ≤ 40，x ≤ 15。"],
      answer: "最多 15km"
    }
  ],
  "quadratics": [
    {
      level: "高考同难度改编",
      prompt: "解方程：2x² - 5x - 3 = 0。",
      steps: ["因式分解：2x² - 5x - 3 = (2x + 1)(x - 3)。", "令每个因式为 0：2x + 1 = 0 或 x - 3 = 0。", "所以 x = -1/2 或 x = 3。"],
      answer: "x = 3 或 x = -1/2"
    },
    {
      level: "综合提升",
      prompt: "方程 x² - 4x + 1 = 0 的两根为 α、β，求 α² + β²。",
      steps: ["由韦达定理：α + β = 4，αβ = 1。", "α² + β² = (α + β)² - 2αβ。", "代入得 16 - 2 = 14。"],
      answer: "14"
    },
    {
      level: "CSCA-like 加强",
      prompt: "方程 x² - 2kx + k² - 4 = 0 的两个根都为正，求 k 的取值范围。",
      steps: ["方程可写成 (x - k)² = 4，所以根为 k - 2 与 k + 2。", "两个根都为正，需要 k - 2 > 0 且 k + 2 > 0。", "合并得 k > 2。"],
      answer: "k > 2"
    }
  ],
  "fractional-equations": [
    {
      level: "高考同难度改编",
      prompt: "解方程：2/(x - 1) + 1 = 3/(x - 1)。",
      steps: ["限制条件：x ≠ 1。", "移项：1 = 1/(x - 1)。", "所以 x - 1 = 1，x = 2，满足限制条件。"],
      answer: "x = 2"
    },
    {
      level: "综合提升",
      prompt: "解方程：(x + 1)/(x - 2) = 2。",
      steps: ["限制条件：x ≠ 2。", "两边乘以 x - 2：x + 1 = 2x - 4。", "解得 x = 5，满足限制条件。"],
      answer: "x = 5"
    },
    {
      level: "CSCA-like 加强",
      prompt: "甲单独完成一项工作需 6 小时，甲乙合作需 4 小时，乙单独完成需多少小时？",
      steps: ["设乙单独完成需 x 小时。", "效率方程：1/6 + 1/x = 1/4。", "解得 1/x = 1/12，所以 x = 12。"],
      answer: "12 小时"
    }
  ],
  "sign-chart-inequalities": [
    {
      level: "高考同难度改编",
      prompt: "解不等式：(x - 1)(x + 2) > 0。",
      steps: ["临界点为 x = 1 与 x = -2。", "乘积大于 0 表示两个因式同号。", "所以 x < -2 或 x > 1。"],
      answer: "x < -2 或 x > 1"
    },
    {
      level: "综合提升",
      prompt: "解不等式：(x - 3)/(x + 1) ≤ 0。",
      steps: ["临界点为 x = 3，禁点为 x = -1。", "分区间判断符号：(-∞,-1) 为正，(-1,3] 为负或零，(3,∞) 为正。", "所以解集为 -1 < x ≤ 3。"],
      answer: "-1 < x ≤ 3"
    },
    {
      level: "CSCA-like 加强",
      prompt: "解不等式：x² - 4x + 3 ≥ 0。",
      steps: ["因式分解：x² - 4x + 3 = (x - 1)(x - 3)。", "二次项系数为正，抛物线开口向上。", "大于等于 0 在两根外侧，所以 x ≤ 1 或 x ≥ 3。"],
      answer: "x ≤ 1 或 x ≥ 3"
    }
  ],
  "function-concepts": [
    {
      level: "高考同难度改编",
      prompt: "已知 f(x)=2x²-3x，求 f(-1)。",
      steps: ["把 x = -1 代入函数。", "f(-1)=2×(-1)²-3×(-1)。", "计算得 2 + 3 = 5。"],
      answer: "5"
    },
    {
      level: "综合提升",
      prompt: "求函数 y = √(2x - 6)/(x - 1) 的定义域。",
      steps: ["根号内要求 2x - 6 ≥ 0，所以 x ≥ 3。", "分母要求 x - 1 ≠ 0，所以 x ≠ 1。", "由于 x ≥ 3 已自动排除 x = 1，定义域为 x ≥ 3。"],
      answer: "x ≥ 3"
    },
    {
      level: "CSCA-like 加强",
      prompt: "一次函数 f(x)=ax+b 满足 f(1)=2，f(3)=8，求 f(5)。",
      steps: ["由 f(1)=2 得 a+b=2；由 f(3)=8 得 3a+b=8。", "两式相减得 2a=6，所以 a=3。", "b=-1，因此 f(5)=3×5-1=14。"],
      answer: "14"
    }
  ],
  "linear-functions": [
    {
      level: "高考同难度改编",
      prompt: "求过点 (2,3)，斜率为 -2 的直线解析式。",
      steps: ["设直线为 y = -2x + b。", "代入点 (2,3)：3 = -4 + b。", "所以 b = 7，直线为 y = -2x + 7。"],
      answer: "y = -2x + 7"
    },
    {
      level: "综合提升",
      prompt: "直线 y = -1/2 x + 3 与坐标轴围成的三角形面积是多少？",
      steps: ["与 y 轴交点为 (0,3)。", "令 y = 0，得 -1/2 x + 3 = 0，所以 x = 6，与 x 轴交点为 (6,0)。", "三角形面积 = 1/2 × 6 × 3 = 9。"],
      answer: "9"
    },
    {
      level: "CSCA-like 加强",
      prompt: "直线 y = kx + b 与 y = 3x - 1 平行，并过点 (-2,4)，求 k、b。",
      steps: ["平行直线斜率相同，所以 k = 3。", "代入点 (-2,4)：4 = 3×(-2) + b。", "所以 b = 10。"],
      answer: "k = 3，b = 10"
    }
  ],
  "inverse-functions": [
    {
      level: "高考同难度改编",
      prompt: "反比例函数 y = k/x 经过点 (-2,3)，求 k。",
      steps: ["反比例函数满足 k = xy。", "代入点 (-2,3)：k = -2×3。", "所以 k = -6。"],
      answer: "k = -6"
    },
    {
      level: "综合提升",
      prompt: "函数 y = 12/x 中，若 x1 = 3，x2 = 4，比较 y1 与 y2 的大小。",
      steps: ["计算 y1 = 12/3 = 4。", "计算 y2 = 12/4 = 3。", "所以 y1 > y2。"],
      answer: "y1 > y2"
    },
    {
      level: "CSCA-like 加强",
      prompt: "求 y = 6/x 与 y = x + 1 的交点坐标。",
      steps: ["令 6/x = x + 1，且 x ≠ 0。", "两边乘以 x：6 = x² + x，即 x² + x - 6 = 0。", "因式分解得 (x + 3)(x - 2)=0，所以交点为 (2,3) 与 (-3,-2)。"],
      answer: "(2,3)，(-3,-2)"
    }
  ],
  "basic-geometry": [
    {
      level: "高考同难度改编",
      prompt: "两条平行线被一条截线所截，若一个内错角为 68°，求与它同旁内角的度数。",
      steps: ["内错角相等，所以对应的另一内角也是 68°。", "同旁内角互补。", "因此同旁内角为 180° - 68° = 112°。"],
      answer: "112°"
    },
    {
      level: "综合提升",
      prompt: "一个正多边形每个外角为 24°，求它的边数。",
      steps: ["任意凸多边形外角和为 360°。", "正多边形每个外角相等。", "边数 = 360 ÷ 24 = 15。"],
      answer: "15"
    },
    {
      level: "CSCA-like 加强",
      prompt: "一点周围三个角分别为 3x、2x+20°、x+40°，求 x。",
      steps: ["一点周围角度和为 360°。", "列方程：3x + (2x+20) + (x+40) = 360。", "6x + 60 = 360，所以 x = 50。"],
      answer: "x = 50"
    }
  ],
  "triangles-congruence": [
    {
      level: "高考同难度改编",
      prompt: "三角形两个内角分别为 45° 和 65°，求第三个内角及其外角。",
      steps: ["三角形内角和为 180°。", "第三个内角 = 180° - 45° - 65° = 70°。", "相邻外角 = 180° - 70° = 110°。"],
      answer: "第三个内角 70°，外角 110°"
    },
    {
      level: "综合提升",
      prompt: "在 △ABC 与 △DEF 中，AB=DE，AC=DF，∠A=∠D，说明两个三角形全等的依据。",
      steps: ["已知两组对应边相等：AB=DE，AC=DF。", "夹角也相等：∠A=∠D。", "所以由 SAS 判定，△ABC ≌ △DEF。"],
      answer: "SAS，全等"
    },
    {
      level: "CSCA-like 加强",
      prompt: "等腰三角形 ABC 中 AB=AC，若 ∠B=50°，求 ∠A。",
      steps: ["AB=AC，所以底角 ∠B=∠C。", "因此 ∠C=50°。", "∠A=180°-50°-50°=80°。"],
      answer: "80°"
    }
  ],
  "special-triangles": [
    {
      level: "高考同难度改编",
      prompt: "30°-60°-90° 直角三角形的斜边为 10，求较短直角边和较长直角边。",
      steps: ["30° 所对的较短直角边等于斜边的一半。", "较短直角边 = 5。", "较长直角边 = 5√3。"],
      answer: "5，5√3"
    },
    {
      level: "综合提升",
      prompt: "求点 A(-1,2) 与 B(5,-6) 的距离。",
      steps: ["使用距离公式：AB = √[(5+1)² + (-6-2)²]。", "得到 AB = √(6² + (-8)²)。", "AB = √100 = 10。"],
      answer: "10"
    },
    {
      level: "CSCA-like 加强",
      prompt: "直角三角形两直角边为 6 和 8，求斜边上的高。",
      steps: ["斜边 c = √(6²+8²)=10。", "面积也可表示为 1/2×6×8=24。", "设斜边上的高为 h，则 1/2×10×h=24，所以 h=24/5。"],
      answer: "24/5"
    }
  ],
  "quadrilaterals": [
    {
      level: "高考同难度改编",
      prompt: "平行四边形相邻两边分别为 5 和 8，求周长。",
      steps: ["平行四边形对边相等。", "周长 = 2×(5+8)。", "所以周长为 26。"],
      answer: "26"
    },
    {
      level: "综合提升",
      prompt: "菱形两条对角线长分别为 10 和 24，求面积和边长。",
      steps: ["菱形面积 = 两对角线乘积的一半 = 10×24÷2 = 120。", "菱形对角线互相垂直平分，所以半对角线为 5 和 12。", "边长 = √(5²+12²)=13。"],
      answer: "面积 120，边长 13"
    },
    {
      level: "CSCA-like 加强",
      prompt: "梯形中位线长为 12，一条底边长为 9，求另一条底边长。",
      steps: ["梯形中位线等于两底和的一半。", "设另一条底边为 x，则 (9+x)/2=12。", "解得 9+x=24，x=15。"],
      answer: "15"
    }
  ],
  "similar-triangles": [
    {
      level: "高考同难度改编",
      prompt: "两个相似三角形对应边之比为 2:3，求面积之比。",
      steps: ["相似图形面积比等于相似比的平方。", "边长比为 2:3。", "面积比为 4:9。"],
      answer: "4:9"
    },
    {
      level: "综合提升",
      prompt: "身高 1.6m 的人影长 2m，同一时刻旗杆影长 7.5m，求旗杆高度。",
      steps: ["同一时刻太阳光形成相似三角形。", "设旗杆高为 h，则 h/7.5 = 1.6/2。", "h = 7.5×0.8 = 6。"],
      answer: "6m"
    },
    {
      level: "CSCA-like 加强",
      prompt: "△ABC 中，D 在 AB 上，E 在 AC 上，DE∥BC。已知 AB=12，AD=5，AE=4，求 AC。",
      steps: ["DE∥BC，所以 △ADE ∼ △ABC。", "对应边成比例：AD/AB = AE/AC。", "5/12 = 4/AC，解得 AC = 48/5。"],
      answer: "48/5"
    }
  ],
  "trig": [
    {
      level: "高考同难度改编",
      prompt: "直角三角形中，若 sin A = 3/5，求 cos A 与 tan A。",
      steps: ["sin A = 对边/斜边 = 3/5，可设对边 3，斜边 5。", "由勾股定理，邻边 = 4。", "所以 cos A = 4/5，tan A = 3/4。"],
      answer: "cos A = 4/5，tan A = 3/4"
    },
    {
      level: "综合提升",
      prompt: "一建筑物底部到观测点水平距离 20m，仰角为 30°，求建筑物高度。",
      steps: ["设高度为 h。", "tan30° = h/20。", "h = 20×√3/3 = 20√3/3。"],
      answer: "20√3/3 m"
    },
    {
      level: "CSCA-like 加强",
      prompt: "长 10m 的梯子靠墙，梯子与地面夹角为 60°，求梯子顶端离地高度。",
      steps: ["梯子是直角三角形的斜边。", "高度 = 10 sin60°。", "所以高度 = 10×√3/2 = 5√3。"],
      answer: "5√3 m"
    }
  ],
  "circle": [
    {
      level: "高考同难度改编",
      prompt: "圆上点 A、B、C 满足 ∠ACB = 35°，求劣弧 AB 对应的圆心角。",
      steps: ["圆周角等于所对弧圆心角的一半。", "∠ACB 对应弧 AB。", "所以圆心角 = 2×35° = 70°。"],
      answer: "70°"
    },
    {
      level: "综合提升",
      prompt: "从圆外一点 P 引两条切线 PA、PB，若 PA=7，求 PB。",
      steps: ["从同一圆外一点引出的两条切线长相等。", "所以 PA = PB。", "已知 PA=7，因此 PB=7。"],
      answer: "7"
    },
    {
      level: "CSCA-like 加强",
      prompt: "圆半径为 13，圆心到弦 AB 的距离为 5，求弦 AB 的长。",
      steps: ["圆心到弦的垂线平分弦。", "半径、距离和半弦构成直角三角形。", "半弦 = √(13²-5²)=√144=12，所以弦长 AB=24。"],
      answer: "24"
    }
  ]
};

modules.forEach(module => {
  const extras = extraExerciseBank[module.id] || [];
  module.exercises.push(...extras);
});

const solutionGuideBank = {
  "rational-numbers": {
    idea: "把题目先拆成“符号判断、运算顺序、数轴或绝对值含义”三件事；有分数时尽量统一通分。",
    check: "最后检查负号、括号和绝对值：负数的偶次方为正，绝对值结果不能为负。"
  },
  "real-numbers": {
    idea: "根式题先找完全平方因子，比较大小时优先平方比较；科学记数法要先确定小数点移动方向。",
    check: "检查是否把不同被开方数的根式错误合并，例如 √2 与 √3 不能直接相加成 √5。"
  },
  "polynomials-fractions": {
    idea: "整式题先看能否套公式；分式题必须先因式分解，再约分，并把分母不为 0 的限制写出来。",
    check: "检查约分是不是约掉了“整个因式”，不能只约掉加减式中的某一项。"
  },
  "linear-equations": {
    idea: "按去分母、去括号、移项、合并同类项、系数化为 1 的顺序推进；应用题先设未知数再翻译等量关系。",
    check: "把求出的值代回原方程，看左右两边是否相等。"
  },
  "systems": {
    idea: "先观察哪个未知数容易消去；遇到 x²-y² 这类结构，要联想到平方差和已知和差关系。",
    check: "解出 x、y 后同时代回两个方程，两个方程都满足才算完成。"
  },
  "linear-inequalities": {
    idea: "不等式和方程类似，但乘除负数时必须改变不等号方向；不等式组最后取交集。",
    check: "用一个边界附近的数代入检验，特别注意开区间和闭区间。"
  },
  "quadratics": {
    idea: "先尝试因式分解；分解困难再用判别式或公式法。含参数时要同时关注根的和、积和正负条件。",
    check: "检查根是否满足原方程；若题目要求正根、整数根或两个根，要额外验证条件。"
  },
  "fractional-equations": {
    idea: "第一步写限制条件；第二步乘公分母化为整式方程；第三步检验是否产生增根。",
    check: "凡是让原分母为 0 的解必须舍去，即使它满足去分母后的方程。"
  },
  "sign-chart-inequalities": {
    idea: "先找零点和禁点，把数轴分区间；每个区间只需取一个测试点判断符号。",
    check: "零点是否包含取决于 ≥ 或 ≤；分母为 0 的点永远不能取。"
  },
  "function-concepts": {
    idea: "函数题先分清输入 x、输出 y 和定义域；代值题就是把指定 x 代入表达式。",
    check: "检查输入值是否在定义域内，特别是根号、分母和实际问题限制。"
  },
  "linear-functions": {
    idea: "一次函数核心是斜率和截距；过点就代入，平行就斜率相同，交轴就令另一个坐标为 0。",
    check: "把点坐标代回直线方程，确认斜率、截距和交点没有算反。"
  },
  "inverse-functions": {
    idea: "反比例函数 y=k/x 的关键量是 k=xy；交点题通常转化为方程求 x。",
    check: "x 不能为 0；k 的正负决定图像在第一三象限或第二四象限。"
  },
  "basic-geometry": {
    idea: "几何角度题先找平行线、邻补角、对顶角、内错角和外角和这些固定关系。",
    check: "角度和是否合理：一点周围 360°，三角形 180°，多边形外角和 360°。"
  },
  "triangles-congruence": {
    idea: "三角形题先标出已知边角；全等题要判断 SSS、SAS、ASA、AAS 或 HL。",
    check: "SAS 必须是夹角，SSA 一般不能作为全等判定。"
  },
  "special-triangles": {
    idea: "直角三角形优先用勾股定理；30-60-90 和 45-45-90 三角形有固定边长比例。",
    check: "斜边一定最长；面积法求高时注意底边选的是哪一条。"
  },
  "quadrilaterals": {
    idea: "四边形题先判断类型：平行四边形、矩形、菱形、正方形、梯形各有不同性质。",
    check: "不要把菱形和矩形性质混用：菱形对角线垂直，矩形对角线相等。"
  },
  "similar-triangles": {
    idea: "相似题先找对应角相等或平行线，再写对应边比例；面积比等于相似比平方。",
    check: "比例式必须按对应边写，不能把不同位置的边随意相除。"
  },
  "trig": {
    idea: "锐角三角函数题先确定目标角，再区分对边、邻边和斜边；实际问题画直角三角形。",
    check: "sin、cos、tan 的边比不要混：sin=对/斜，cos=邻/斜，tan=对/邻。"
  },
  "circle": {
    idea: "圆题优先找半径、切线、圆心角、圆周角和垂径定理；弦长题常转成直角三角形。",
    check: "圆周角等于同弧圆心角的一半；切线垂直于过切点的半径。"
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function formatMath(value) {
  let text = escapeHtml(value);
  text = text.replace(/√\[([^\]]+)\]/g, '<span class="sqrt"><span class="radicand">[$1]</span></span>');
  text = text.replace(/√\(([^()]+)\)/g, '<span class="sqrt"><span class="radicand">($1)</span></span>');
  text = text.replace(/√([0-9]+(?:\.[0-9]+)?|[a-zA-Zα-ωΑ-Ω]+(?:[²³])?)/g, '<span class="sqrt"><span class="radicand">$1</span></span>');
  return text;
}

function htmlList(items) {
  return `<ul>${items.map(item => `<li>${formatMath(item)}</li>`).join("")}</ul>`;
}

function renderSteps(steps) {
  return `<ol>${steps.map(step => `<li>${formatMath(step)}</li>`).join("")}</ol>`;
}

function renderSolution(module, steps, answer) {
  const guide = solutionGuideBank[module.id] || {
    idea: "先识别题型和已知条件，再选择对应公式或定理，最后按步骤计算。",
    check: "把答案代回题目条件检查，确认没有漏掉限制条件。"
  };
  const pitfall = module.pitfalls && module.pitfalls.length ? module.pitfalls[0] : guide.check;
  return `
    <div class="solutionIntro">
      <p><strong>题型定位：</strong>${formatMath(module.tags.join(" / "))}</p>
      <p><strong>解题思路：</strong>${formatMath(guide.idea)}</p>
    </div>
    <div class="solutionSteps">
      <strong>详细步骤：</strong>
      ${renderSteps(steps)}
    </div>
    <p><strong>答案：</strong>${formatMath(answer)}</p>
    <p class="solutionCheck"><strong>检查：</strong>${formatMath(guide.check)} <span>易错点：${formatMath(pitfall)}</span></p>
  `;
}

function difficultyClass(level) {
  if (level.includes("CSCA") || level.includes("高考")) return "challenge";
  if (level.includes("核心") || level.includes("综合")) return "core";
  return "";
}

function moduleTemplate(module, index) {
  const exercises = module.exercises.map((exercise, i) => `
    <details class="exercise">
      <summary>
        ${i + 1}. ${formatMath(exercise.prompt)}
        <span class="difficulty ${difficultyClass(exercise.level)}">${escapeHtml(exercise.level)}</span>
      </summary>
      <div class="solution">
        ${renderSolution(module, exercise.steps, exercise.answer)}
      </div>
    </details>
  `).join("");
  const searchText = `${module.title} ${module.section} ${module.tags.join(" ")} ${module.exercises.map(e => e.prompt).join(" ")}`;

  return `
    <article id="${module.id}" class="module" data-search="${escapeHtml(searchText)}">
      <header class="moduleHeader">
        <h3>${formatMath(module.title)}</h3>
        <div class="moduleMeta">
          <span class="tag">${escapeHtml(module.section)}</span>
          ${module.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </header>
      <div class="moduleBody">
        <div class="grid2">
          <section class="card">
            <h4>知识点分析</h4>
            ${htmlList(module.analysis)}
            <h4>易错提醒</h4>
            ${htmlList(module.pitfalls)}
          </section>
          <section class="card">
            <h4>例题讲解</h4>
            <p class="exampleProblem">${formatMath(module.example.prompt)}</p>
            <div class="solution">
              ${renderSolution(module, module.example.steps, module.example.answer)}
            </div>
          </section>
        </div>
        <section class="card" style="margin-top:20px;">
          <h4>习题与详细解答</h4>
          <div class="exerciseList">${exercises}</div>
        </section>
      </div>
    </article>
  `;
}

function render() {
  const container = document.querySelector("#moduleContainer");
  const navList = document.querySelector("#navList");
  container.innerHTML = modules.map(moduleTemplate).join("");
  navList.innerHTML = modules.map(module => `<a class="navItem" href="#${module.id}">${module.title}</a>`).join("");
  document.querySelector("#moduleCount").textContent = modules.length;
  document.querySelector("#exerciseCount").textContent = modules.reduce((sum, module) => sum + module.exercises.length, 0);
}

function setupSearch() {
  const input = document.querySelector("#searchInput");
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    document.querySelectorAll(".module").forEach(module => {
      const haystack = module.dataset.search.toLowerCase();
      module.classList.toggle("hidden", keyword && !haystack.includes(keyword));
    });
  });
}

function setupActions() {
  document.querySelector("#expandAll").addEventListener("click", () => {
    document.querySelectorAll("details.exercise").forEach(item => item.open = true);
  });
  document.querySelector("#collapseAll").addEventListener("click", () => {
    document.querySelectorAll("details.exercise").forEach(item => item.open = false);
  });
  document.querySelector("#printPage").addEventListener("click", () => window.print());
}

render();
setupSearch();
setupActions();
