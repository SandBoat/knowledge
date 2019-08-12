# 常用 css

## 换行
``` css
  /* 换行 */
  .line-wrap {
    /* 自动换行 */
    word-wrap: break-word;
  }

  /* 不换行 */
  .no-line-wrap {
    /* 强制不换行 */
    white-space: nowrap;
    /* 自动换行 */
    /* word-wrap: break-word; */
    /* 超出显示省略号 */
    overflow: hidden;
    text-overflow: ellipsis;
  }
```

## 垂直居中
``` css
 .container-center{
   display: flex;
   align-items: center;
 
 .center {
   width: 50px;
   height: 50px;
   background-color: aliceblue;
   margin: 0 auto;
 }
```