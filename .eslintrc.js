module.exports = {
    env: {
        browser: true,
        es6: true
    },
    // based on ESlint v5.1.0
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true
        }
    },
    globals: {
        module: true,
        exports: true,
        require: true
    },
    rules: {
        // Possible Errors
        // 'no-cond-assign': [2, 'always'], // 禁止一切在条件语句中出现赋值操作符
        'no-console': [0], // 可以使用console
        // 'no-extra-parens': [2, 'all', {nestedBinaryExpressions: false}], // 避免不必要的括号
        'no-prototype-builtins': [2], // 禁止直接使用 Object.prototypes 的内置属性
        'no-template-curly-in-string': [2], // 禁止在常规字符串中出现模板字面量占位符语法
        'valid-jsdoc': [1, { requireReturnDescription: false, requireReturn: false }], // 提醒使用有效的 JSDoc 注释
        'valid-typeof': [2, { requireStringLiterals: true }], // 强制 typeof 表达式与有效的字符串进行比较，要求 typeof 表达式只与字符串字面量或其它 typeof 表达式 进行比较，禁止与其它值进行比较

        // Best Practices
        'accessor-pairs': [2], // 有setter则必须要有getter
        'array-callback-return': [2], // 强制数组方法的回调函数中有 return 语句
        // 'class-methods-use-this': [2], // 强制类方法使用 this
        'complexity': [2, 20], // 限制圈复杂度
        // 'consistent-return': [2], // 要求使用一致的 return 语句
        // 'curly': [2, 'multi', 'consistent'], // 要求遵循大括号约定
        'default-case': [2], // 要求 Switch 语句中有 Default 分支
        'dot-notation': [2], // 要求使用点号
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
        'guard-for-in': [2], // 需要约束 for-in,
        'no-alert': [2], // 禁用 Alert
        'no-caller': [2], // 禁用 caller 或 callee
        'no-div-regex': [2], // 禁止使用看起来像除法的正则表达式
        'no-else-return': [2], // 禁止在 else 前有 return
        'no-empty-function': [2], // 禁止出现空函数
        'no-eq-null': [2], // 禁止与 null 进行比较
        'no-eval': [2], // 禁用 eval()
        'no-extend-native': [2], // 禁止扩展原生对象
        'no-extra-bind': [2], // 禁止不必要的函数绑定
        'no-extra-label': [2], // 禁用不必要的标签
        'no-implicit-globals': [2], // 禁止在全局范围使用变量和函数声明
        'no-implied-eval': [2], // 禁用隐式的eval()
        'no-invalid-this': [2], // 禁止 this 关键字在类或类对象之外出现
        'no-iterator': [2], // 禁用__iterator__属性
        'no-labels': [2], // 禁用标签语句
        'no-lone-blocks': [2], // 禁用不必要的嵌套块
        // 'no-loop-func': [2], // 禁止循环中存在函数
        'no-multi-spaces': [2], // 禁止出现多个空格
        'no-multi-str': [2], // 禁止多行字符串
        'no-new': [2], // 禁止使用了new却不赋值
        'no-new-func': [2], // 禁用Function构造函数
        'no-new-wrappers': [2], // 禁止原始包装实例：new String()
        'no-octal-escape': [2], // 禁止在字符串字面量中使用八进制转义序列
        'no-param-reassign': [2], // 禁止对函数参数再赋值
        'no-proto': [2], // 禁用__proto__
        'no-return-assign': [2], // 禁止在返回语句中赋值
        'no-return-await': [2], // 禁用不必要的 return await
        'no-self-compare': [2], // 禁止自身比较
        'no-sequences': [2], // 不允许使用逗号操作符
        'no-throw-literal': [2], // 必须theow new Error
        'no-unmodified-loop-condition': [2], // 禁用一成不变的循环条件
        'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }], // 禁止未使用过的表达式
        'no-useless-call': [2], // 禁用不必要的 .call() 和 .apply()
        'no-useless-concat': [2], // 禁止没有必要的字符拼接
        // 'no-useless-return': [2], // 禁止多余的 return 语句
        'no-void': [2], // 禁止使用void操作符
        'no-with': [2], // 禁用 with 语句
        'prefer-promise-reject-errors': [2], // 要求使用 Error 对象作为 Promise 拒绝的原因
        'radix': [2], // 要求parseInt()必须有基数
        'require-await': [2], // 禁止使用不带 await 表达式的 async 函数
        'vars-on-top': [2], // 要求将var变量声明放在它们作用域的顶部
        'wrap-iife': [2, 'inside'], // 需要把立即执行的函数包裹起来
        'yoda': [2, 'never'], // 要求或者禁止Yoda条件：if ('red' === color)

        // Strict Mode
        'strict': [2], // 不要使用'use strict';

        // Variables
        // 'init-declarations': [2, 'always'], // 强制变量声明语句中初始化
        'no-catch-shadow': [2], // 不允许在 catch 语句中遮盖变量
        'no-label-var': [2], // 禁用与变量同名的标签
        'no-shadow-restricted-names': [2], // 关键字不能被遮蔽
        'no-undef-init': [2], // 不允许显式初始化变量值为 undefined
        'no-undefined': [2], // 不允许使用undefined变量
        'no-use-before-define': [2, { functions: false, variables: false }], // 禁止定义前使用

        // Stylistic Issues
        'array-bracket-newline': [2, 'consistent'], // 数组括号换行风格
        // 'array-bracket-spacing': [2, 'always'], // 强制在括号内使用空格
        'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格
        // 'brace-style': [2, '1tbs'], // 大括号风格要求
        'comma-dangle': [2, 'never'], // 禁止使用拖尾逗号
        'comma-spacing': [2], // 强制在逗号后面使用空格
        'comma-style': [2, 'last'], // 逗号后置
        'computed-property-spacing': [2, 'never'], // 禁止在计算属性中使用空格
        'func-call-spacing': [2, 'never'], // 禁止在函数标识符和其调用之间有空格
        'indent': [2, 4, { SwitchCase: 1 }], // 以4个空格缩进
        'key-spacing': [2, { beforeColon: false, afterColon: true }], // 属性名后不要有空格，值前面一个空格
        'keyword-spacing': [2, { before: true, after: true }], // 强制关键字周围空格的一致性
        'linebreak-style': [2, 'unix'], // 换行符使用LF
        'lines-between-class-members': [2, 'always'], // 要求在类成员之间出现空行
        'max-depth': [2, { max: 5 }], // 强制块语句的最大可嵌套深度为5
        'max-nested-callbacks': [2, { max: 3 }], // 强制回调函数最大嵌套深度为3
        'new-cap': [2, { capIsNew: false }], // 要求构造函数首字母大写
        'new-parens': [2], // 要求调用无参构造函数时带括号
        'no-array-constructor': [2], // 禁止使用 Array 构造函数
        'no-continue': [2], // 禁用 continue
        'no-mixed-spaces-and-tabs': [2], // 禁止连续赋值
        'no-multiple-empty-lines': [2, { max: 2 }], // 不允许连续超过2个空行
        // 'no-negated-condition': [2], // 禁用否定表达式
        'no-new-object': [2], // 禁止使用 Object 构造函数
        'no-tabs': [2], // 禁用 tab
        'no-trailing-spaces': [2], // 禁用行尾空白
        'no-unneeded-ternary': [2], // 禁止可以表达为更简单结构的三元操作符
        'no-whitespace-before-property': [2], // 禁止属性前有空白
        'object-curly-newline': [2, { consistent: true }], // 强制在花括号内使用一致的换行符
        // 'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
        'one-var': [2, 'never'], // 强制函数中的变量分开声明
        'quote-props': [2, 'as-needed'], // 要求对象字面量属性名称不使用引号
        'quotes': [2, 'single'], // 强制使用单引号
        // 'require-jsdoc': [1, {
        //     require: {
        //         FunctionDeclaration: true,
        //         MethodDefinition: true,
        //         ClassDeclaration: true,
        //         ArrowFunctionExpression: false,
        //         FunctionExpression: true
        //     }
        // }],
        'semi': [2, 'always'], // 强制行尾加分号
        'semi-spacing': [2, { before: false, after: true }], // 强制分号后有空格
        'semi-style': [2, 'last'], // 强制分号在句末
        'space-before-blocks': [2, 'always'], // 要求语句块之前的空格
        'space-before-function-paren': [2, { anonymous: 'ignore', named: 'never', 'asyncArrow': 'ignore' }], // 禁止函数圆括号之前有一个空格
        'space-in-parens': [2, 'never'], // 强制圆括号内左右没有空格
        'space-infix-ops': [2], // 要求中缀操作符周围有空格
        'space-unary-ops': [2, { words: true, nonwords: false }], // 要求或禁止在一元操作符之前或之后存在空格
        'spaced-comment': [2, 'always'], // 要求在注释前有空白
        'switch-colon-spacing': [2, { before: false, after: true }], // 强制在 switch 的冒号左右有空格
        'template-tag-spacing': [2, 'never'], // 禁止在模板标记和它们的字面量之间有空格
        'unicode-bom': [2, 'never'], // 文件不能with BOM

        // ECMAScript 6
        'arrow-body-style': [2, 'as-needed'], // 要求箭头函数体按需使用大括号
        'arrow-parens': [2, 'as-needed'], // 要求箭头函数的参数按需使用圆括号
        'arrow-spacing': [2, { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
        'no-duplicate-imports': [2], // 禁止重复导入
        'no-useless-computed-key': [2], // 禁止在对象中使用不必要的计算属性
        'no-useless-rename': [2], // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        'no-var': [2], // 要求使用 let 或 const 而不是 var
        'object-shorthand': [2, 'always'], // 要求对象字面量简写语法
        'prefer-arrow-callback': [2], // 要求使用箭头函数作为回调
        'prefer-const': [2], // 建议使用const
        'prefer-destructuring': [2], // 优先使用数组和对象解构
        'prefer-rest-params': [2], // 建议使用剩余参数代替 arguments
        'prefer-spread': [2], // 建议使用扩展运算符而非.apply()
        'prefer-template': [2], // 建议使用模板而非字符串连接
        'rest-spread-spacing': [2, 'never'], // 强制剩余和扩展运算符及其表达式之间没有空格
        'symbol-description': [2], // 要求 symbol 描述
        'template-curly-spacing': [2, 'never'], // 强制模板字符串中空格的使用
        'yield-star-spacing': [2, { before: false, after: true }] // 强制在 yield* 表达式中 * 周围使用空格
    }
};