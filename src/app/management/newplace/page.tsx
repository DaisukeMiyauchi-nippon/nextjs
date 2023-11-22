import React from 'react'

const NewPlace = () => {
  return (
    <div>
        <h2>新規拠点登録</h2>
        <form>
            <div className='mb-4'>
                <label>拠点名</label>
                <input type="text" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>拠点管理者名（漢字）</label>
                <input type="text" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>拠点管理者名（カナ）</label>
                <input type="text" className='shadow'></input>
            </div>

            <div className='mb-4'>
                <label>拠点住所（郵便番号）※ハイフン無し</label>
                <input type="text" className="postal_code"></input>
            </div>

            <div className='mb-4'>
                <label>都道府県</label>
                <input type="text" className=""></input>
            </div>

            <div className='mb-4'>
                <label>市町村</label>
                <input type="text" className=""></input>
            </div>

            <div className='mb-4'>
                <label>町域・番地</label>
                <input type="text" className=""></input>
            </div>

            <div className='mb-4'>
                <label>電話番号</label>
                <input type="text" className=""></input>
            </div>

            <div className='mb-4'>
                <label>拠点紹介</label>
                <input type="textarea" className=""></input>
            </div>

            <div className='mb-4'>
                <label>拠点URL</label>
                <input type="text" className=""></input>
            </div>

            <button type="submit">登録</button>
        </form>
        </div>
  )
}

export default NewPlace