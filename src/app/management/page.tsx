import React from 'react'
import Link from 'next/link'

const management = () => {
  return (
    <div>
        <h1>マネジメントメニュー</h1>
        <ul>
            <li><Link href = "/management/newgroup">新規グループ登録</Link></li>
            <li><Link href = "/management/editgroup">グループ情報の編集・削除</Link></li>
            <li><Link href = "/management/newevent">新規イベント登録</Link></li>
            <li><Link href = "/management/editevent">イベント情報の編集・削除</Link></li>
        </ul></div>
  )
}

export default management