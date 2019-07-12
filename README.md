# react-hooks-easy

> 封装了每种变量类型统一的增删改查API，为hooks 增加订阅模式，方便组件通信

### 概述
一个管理 hooks 的工具，String、Array、Boolean、Number、Object hooks变量的增删改查封装

### 安装
```
npm i react-hooks-easy
```

此工具共暴露5个API，对应5种数据类型

1. useBoolean
2. useNumber
3. useArray  (alias: useList)
4. useObject (alias: useMap)
5. useString

### Example

```
import {useBoolean} from 'react-hooks-easy'

export default function Initial(props) {
    // 声明一个命名空间为 test 的初始值为 false
    // testBoolean 为自定义变量，可随意命名
    const testBoolean = useBoolean('test', false);
    
    return (
        <div>
            <div>{testBoolean.value ? 'true' : 'false'}</div>
            <button onClick={() => testBoolean.toggle()}>Toggle</button>
        </div>
    )
}

// 只要命名空间相同，变量就是共享的，这也是我做这个工具的初衷
// 组件之间不需要有什么关系，这是变量共享
// 所以可以在另一个组件里获取其他组件的 hooks 改动
export default (props) => {
    // 声明命名空间为 test，第二个参数无，即不用初始化(其他组件初始过了)
    const testBoolean = useBoolean('test');
    return (
            <div>
                <div>{testBoolean.value ? 'true' : 'false'}</div>
                <button onClick={() => testBoolean.toggle()}>这里也可以改变值</button>
            </div>
        )
}
```

### 增删改查使用 async/await 或 promise 示例

> 反正你只要能返回就对了，内部已经把 promise 转为 await，保证异步promise也能接收返回值

```
const testNumber = useNumber('test');
<button onClick={() => testNumber.set(async () => {
    let res = await fetch('https://randomuser.me/api/');
    let user = await res.json();
    return user.info.version;
})}>用async/await改变值</button>

// 示例2 axios
<button onClick={() => testNumber.set(async () => await axios('https://randomuser.me/api/'))}>用async/await改变值</button>

// 示例3 使用 promise
<button onClick={() => testNumber.set(() => 
    fetch('https://randomuser.me/api/').then(response => response.json()).then((data) => {
        return data.info.page;
    })
)}>Promise</button>
```

### 默认变量更新是异步的，如果想及时获取到实时数据，可使用返回值的方式
```
// 返回值是 promise 可以使用 await
async function sync(){
    let res = await testNumber.inc(10);
    // 打印出来有很多私有属性，不用管，res 已经是最新的值了，直接照常用就行了
    console.log(res);
}

// 或者使用 then 的方式
testNumber.inc(10).then(val => console.log(res))
```


### 可用API
#### 1、useBoolean
| 属性   |      说明      |  类型  | 属性参数 | 默认值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  设置值 | func(val) |  |  |
| reset |  还原开始的初始值 | func() | 无参数 |  |
| reInitial |  重新赋值(通用API，所有接口都实现了此方法，用于Array/Object批量赋值) | func(val) | val:boolean |  |
| toggle |  切换 true/false | func() | 无参数 |  |

#### 2、useNumber
| 属性   |      说明      |  类型  | 属性参数 | 默认值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  设置值 | func(val) |  |  |
| reset |  还原开始的初始值 | func() | 无参数 |  |
| reInitial |  重新赋值(通用API，所有接口都实现了此方法，用于Array/Object批量赋值) | func(val) | val:boolean |  |
| increment |  自增 | func(count) | count: 自增数 | 1 |
| inc |  increment 别名 | func(count) | count: 自增数 | 1 |
| decrement |  自减 | func(count) | count: 自减数 | 1 |
| dec |  decrement 别名 | func(count) | count: 自减数 | 1 |

#### 3、useArray
| 属性   |      说明      |  类型  | 属性参数 | 默认值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| add |  在数组指定位置添加一个值 | func(index, val) |  |  |
| set |  add 别名 | func(index, val) |  |  |
| reset |  还原开始的初始值 | func() | 无参数 |  |
| reInitial |  重新赋值(通用API，所有接口都实现了此方法，用于Array/Object批量赋值) | func(val) | val:boolean |  |
| push |  追加 | func(val) |  |  |
| append |  追加 | func(val) |  |  |
| unshift |  在数组头追加 | func(val) |  |  |
| prepend |  unshift 别名 | func(val) |  |  |
| del |  删除指定位置元素 | func(index) |  index: 索引位置 |  |
| splice |  同js数组方法 | func(index, length, ...values) |  index: 开始位置，length:删除长度，...values: 追加的元素(一/多个) |  |

#### 4、useObject
| 属性   |      说明      |  类型  | 属性参数 | 默认值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| add |  在数组指定位置添加一个值 | func(index, val) |  |  |
| set |  add 别名 | func(index, val) |  |  |
| reset |  还原开始的初始值 | func() | 无参数 |  |
| reInitial |  重新赋值(通用API，所有接口都实现了此方法，用于Array/Object批量赋值) | func(val) | val:boolean |  |
| del |  删除指定位置元素 | func(index) |  index: 索引位置 |  |
| splice |  扩展自js数组方法，可在对象任意位置添加元素 | func(index, length, values) |  index: 开始位置，length:删除长度，values: 对象 |   |
```
// 对象的 splice 不同于数组的 splice，这里固定三个参数 
// splice 示例
splice(0,1, {test: 'test'});
// 多个对象元素，在第三个参数中放在一起
splice(0,1, {test: 'test', test2: 'test2'});
```

#### 5、useString
| 属性   |      说明      |  类型  | 属性参数 | 默认值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  设置值 | func(val) |  |  |
| reset |  还原开始的初始值 | func() | 无参数 |  |
| reInitial |  重新赋值(通用API，所有接口都实现了此方法，用于Array/Object批量赋值) | func(val) | val:boolean |  |
| append |  追加字符串 | func(val) |  |  |
| prepend |  在开头追加字符串 | func(val) |  |  |
| replace |  搜索并替换字符串 | func(search, ?replace) | replace默认空字符串 |  |
| substring |  字符串截取，同 js 方法 | func(start, ?end) |  |  |
| substr |  字符串截取，同 js 方法(类PHP) | func(start, ?length) |  |  |

