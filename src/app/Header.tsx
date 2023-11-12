import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <h1><Link href="/">ProjectZ Logo</Link></h1>
        <div>
            <ul>
                <li>会員登録</li>
                <li>ログイン</li>
                <li>マイページ</li>
            </ul>
        </div>
    </header>
  )
}

export default Header