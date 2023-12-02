import { supabase } from "@/utils/supabaseClient";

const newEvent = [
    {
      eventName: '山梨１００名山登山会',
      eventGenre: '登山',
      host: 'クロスビー',
      place: '山梨',
      RegisteredDate: '11/22'
    },

    {
      eventName: '甲府フェニックス',
      eventGenre: '野球',
      host: 'クロスビー',
      place: '山梨',
      RegisteredDate: '11/22'
    },
    {
      eventName: '山梨ワイナリー愛好会',
      eventGenre: '食事・お酒',
      host: 'クロスビー',
      place: '山梨',
      RegisteredDate: '11/22'
    },
    {
      eventName: '甲府茶道会',
      eventGenre: '茶道',
      host: 'XXX',
      place: '山梨',
      RegisteredDate: '11/22'
    },
  ]

export default async function newEventInfo() {
    const supa = supabase
    const { data } = await supa.from("GROUP_MAIN").select();
    console.log(data)

    return (
      
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">イベント名</th>
                  <th scope="col" className="px-6 py-4">種類</th>
                  <th scope="col" className="px-6 py-4">ホスト</th>
                  <th scope="col" className="px-6 py-4">地域</th>
                  <th scope="col" className="px-6 py-4">登録日</th>
                </tr>
              </thead>
              {newEvent .map((event) => (
              <tbody key={event.eventName} >
                <tr 
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">{event.eventName}</td>
                  <td className="whitespace-nowrap px-6 py-4">{event.eventGenre}</td>
                  <td className="whitespace-nowrap px-6 py-4">{event.place}</td>
                  <td className="whitespace-nowrap px-6 py-4">{event.RegisteredDate}</td>
                </tr>
              </tbody>
              ))}
            </table>

          </div>
        </div>
      </div>
    </div>
      
    )
  }