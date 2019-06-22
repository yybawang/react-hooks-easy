## react-hooks-easy


### 概述
一個管理 hooks 的工具，String、Array、Boolean、Number、Object hooks變量的增刪改查封裝

### 安裝
```
npm i react-hooks-easy
```

此工具共暴露5個API，對應5鍾數據類型
1. useBoolean
2. useNumber
3. useArray  alias: useList
4. useObject alias: useMap
5. useString

### Example

```
import {useBoolean} from 'react-hooks-easy'

export default function Initial(props) {
    // 聲明一個命名空間為 test 的初始值為 false
    // testBoolean 為自定義變量，可隨意命名
    const testBoolean = useBoolean('test', false);
    
    return (
        <div>
            <div>{testBoolean.value ? 'true' : 'false'}</div>
            <button onClick={() => testBoolean.toggle()}>Toggle</button>
        </div>
    )
}

// 只要命名空間相同，變量就是共享的，這也是我做這個工具的初衷
// 組件之間不需要有什麼關係，這是變量共享
// 所以可以在另一個組件裡獲取其他組件的 hooks 改動
export default (props) => {
    // 聲明命名空間為 test，第二個參數無，即不用初始化(其他組件初始過了)
    const testBoolean = useBoolean('test');
    return (
            <div>
                <div>{testBoolean.value ? 'true' : 'false'}</div>
                <button onClick={() => testBoolean.toggle()}>這裡也可以改變值</button>
            </div>
        )
}
```


### 可用API
#### 1、useBoolean
| 屬性   |      說明      |  類型  | 屬性參數 | 默認值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  設置值 | func(val) |  |  |
| reset |  還原開始的初始值 | func() | 無參數 |  |
| reInitial |  重新賦值(通用API，所有接口都實現了此方法，用於Array/Object批量賦值) | func(val) | val:boolean |  |
| toggle |  切換 true/false | func() | 無參數 |  |

#### 2、useNumber
| 屬性   |      說明      |  類型  | 屬性參數 | 默認值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  設置值 | func(val) |  |  |
| reset |  還原開始的初始值 | func() | 無參數 |  |
| reInitial |  重新賦值(通用API，所有接口都實現了此方法，用於Array/Object批量賦值) | func(val) | val:boolean |  |
| increment |  自增 | func(count) | count: 自增數 | 1 |
| inc |  increment 別名 | func(count) | count: 自增數 | 1 |
| decrement |  自減 | func(count) | count: 自減數 | 1 |
| dec |  decrement 別名 | func(count) | count: 自減數 | 1 |

#### 3、useArray
| 屬性   |      說明      |  類型  | 屬性參數 | 默認值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| add |  在數組指定位置添加一個值 | func(index, val) |  |  |
| set |  add 別名 | func(index, val) |  |  |
| reset |  還原開始的初始值 | func() | 無參數 |  |
| reInitial |  重新賦值(通用API，所有接口都實現了此方法，用於Array/Object批量賦值) | func(val) | val:boolean |  |
| push |  追加 | func(val) |  |  |
| append |  追加 | func(val) |  |  |
| unshift |  在數組頭追加 | func(val) |  |  |
| prepend |  unshift 別名 | func(val) |  |  |
| del |  刪除指定位置元素 | func(index) |  index: 索引位置 |  |
| splice |  同js數組方法 | func(index, length, ...values) |  index: 開始位置，length:刪除長度，...values: 追加的元素(一/多個) |  |

#### 4、useObject
| 屬性   |      說明      |  類型  | 屬性參數 | 默認值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| add |  在數組指定位置添加一個值 | func(index, val) |  |  |
| set |  add 別名 | func(index, val) |  |  |
| reset |  還原開始的初始值 | func() | 無參數 |  |
| reInitial |  重新賦值(通用API，所有接口都實現了此方法，用於Array/Object批量賦值) | func(val) | val:boolean |  |
| del |  刪除指定位置元素 | func(index) |  index: 索引位置 |  |
| splice |  擴展自js數組方法，可在對象任意位置添加元素 | func(index, length, values) |  index: 開始位置，length:刪除長度，values: 對象 |   |
```
// 對象的 splice 不同於數組的 splice，這裡固定三個參數 
// splice 示例
splice(0,1, {test: 'test'});
// 多個對象元素，在第三個參數中放在一起
splice(0,1, {test: 'test', test2: 'test2'});
```

#### 5、useString
| 屬性   |      說明      |  類型  | 屬性參數 | 默認值
|----------|:-------------| :------| :--- | :---|
| value |  值 | boolean |  | [自填初始值] |
| set |  設置值 | func(val) |  |  |
| reset |  還原開始的初始值 | func() | 無參數 |  |
| reInitial |  重新賦值(通用API，所有接口都實現了此方法，用於Array/Object批量賦值) | func(val) | val:boolean |  |
| append |  追加字符串 | func(val) |  |  |
| prepend |  在開頭追加字符串 | func(val) |  |  |

