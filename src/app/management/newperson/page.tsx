import React from 'react'

const NewPerson = () => {
  return (
    <div>
        <h2>新規ユーザー登録</h2>
        <form>
            <div className='mb-4'>
                <label>ユーザー名</label>
                <input type="text" name="user_name" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>ユーザー名（ふりがな）</label>
                <input type="text" name ="user_name_kana" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>生年月日</label>
                <input type="date" name="birthday" max="9999-12-31" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>郵便番号※ハイフン無し</label>
                <input type="text" name="post_code" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>都道府県</label>
                <input type="text" name="address_todo" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>市町村区</label>
                <input type="text" name="address_sichouson" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>電話番号</label>
                <input type="text" name="phone_number" className='shadow'></input>
            </div>


            <button type="submit">登録</button>
        </form>
        </div>
  )
}

export default NewPerson