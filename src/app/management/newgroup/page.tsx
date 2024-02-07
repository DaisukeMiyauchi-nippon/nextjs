"use client";
import {
  SetStateAction,
  useState,
  Fragment,
  useRef,
  useEffect,
  Component,
} from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { supabase } from "@/utils/supabase/supabaseClient";
import { Button } from "@material-tailwind/react";
import { genres, cycles } from "@/app/compornents/ResisterList";

export default function NewGroup() {
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [genre, setGenre] = useState("");
  const [cycle, setCycle] = useState("");
  const [postCode, setPostCode] = useState("");
  const [addressLevel1, setAddressLevel1] = useState("");
  const [addressLevel2, setAddressLevel2] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerNameKana, setManagerNameKana] = useState("");
  const [simpleIntroduction, setSimpleIntroduction] = useState("");
  const [detailIntroduction, setDetailIntroduction] = useState("");
  const [homepageUrl, setHomepageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const cancelButtonRef = useRef(null);
  const [error, setError] = useState("");

  const handleInputChange = (key: string) => (e: any) => {
    const value = e.target.value;
    switch (key) {
      case "groupId":
        setGroupId(value);
        break;
      case "groupName":
        setGroupName(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "cycle":
        setCycle(value);
        break;
      case "managerName":
        setManagerName(value);
        break;
      case "managerNameKana":
        setManagerNameKana(value);
        break;
      case "postCode":
        setPostCode(value);
        break;
      case "addressLevel1":
        setAddressLevel1(value);
        break;
      case "addressLevel2":
        setAddressLevel2(value);
        break;
      case "streetAddress":
        setStreetAddress(value);
        break;
      case "simpleIntroduction":
        setSimpleIntroduction(value);
        break;
      case "detailIntroduction":
        setDetailIntroduction(value);
        break;
      case "homepageUrl":
        setHomepageUrl(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!event.target.files || event.target.files.length == 0) {
      // 画像が選択されていないのでreturn
      return;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const file = event.target.files[0]; // 選択された画像を取得
    const filePath = `${user?.id}/${file.name}`;
    if (filePath) {
      console.log("filepathがnull");
    }

    const { error } = await supabase.storage
      .from("photos")
      .upload(filePath, file);
  };

  const validateForm = () => {
    if (
      !groupId ||
      !groupName ||
      !genre ||
      !cycle ||
      !postCode ||
      !addressLevel1 ||
      !addressLevel2 ||
      !streetAddress ||
      !managerName ||
      !managerNameKana ||
      !simpleIntroduction ||
      !detailIntroduction
    ) {
      setError("全ての項目を入力してください。");
      return false;
    }
    setError("");
    return true;
  };

  const addGroup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const { error } = await supabase.from("GROUP_MAIN").insert({
        group_id: groupId,
        group_name: groupName,
        group_genre: genre,
        active_cycle:cycle,
        group_postcode: postCode,
        group_address_prefecture:addressLevel1,
        group_address_city:addressLevel2,
        group_address_detail:streetAddress,
        group_host_name: managerName,
        group_manager_name_kana:managerNameKana,
        simple_intro: simpleIntroduction,
        detail_intro: detailIntroduction,
        homepage_url:homepageUrl,
      });
      if (error) {
        throw error;
      }

      setShowModal(true);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error adding group:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          新規グループ登録
        </h2>
      </div>
      <form onSubmit={addGroup} className="mx-auto mt-16 max-w-xl sm:mt-20">
        {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="group-id"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              グループID
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={groupId}
                onChange={handleInputChange("groupId")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="group-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              グループ名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={groupName}
                onChange={handleInputChange("groupName")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="genre"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ジャンル
            </label>
            <div className="mt-2.5">
              <select
                value={genre}
                onChange={handleInputChange("genre")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {" "}
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="cycles"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              活動頻度
            </label>
            <div className="mt-2.5">
              <select
                value={cycle}
                onChange={handleInputChange("cycle")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {cycles.map((cycle) => (
                  <option key={cycle.value} value={cycle.value}>
                    {" "}
                    {cycle.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="host"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              代表者名（漢字）
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={managerName}
                onChange={handleInputChange("managerName")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="host"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              代表者名（かな）
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={managerNameKana}
                onChange={handleInputChange("managerNameKana")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="postCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              郵便番号（ハイフンなし）
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="postal-code"
                maxLength={7}
                value={postCode}
                onChange={handleInputChange("postCode")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="postCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              都道府県
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="staddressLevel1"
                value={addressLevel1}
                onChange={handleInputChange("addressLevel1")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="postCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              市町村
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="staddress-level2"
                value={addressLevel2}
                onChange={handleInputChange("address-level2")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="postCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              市町村以降の住所
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="streetAddress"
                value={streetAddress}
                onChange={handleInputChange("streetAddress")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="group-introduction"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              グループ紹介（一言）
            </label>
            <div className="relative mt-2.5">
              <input
                type="textarea"
                value={simpleIntroduction}
                onChange={handleInputChange("simpleIntroduction")}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="group-introduction"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                グループ紹介（詳細）
              </label>
              <div className="relative mt-2.5">
                <input
                  type="textarea"
                  value={detailIntroduction}
                  onChange={handleInputChange("detailIntroduction")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="url"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                ホームページURL
              </label>
              <div className="relative mt-2.5">
                <input
                  type="textarea"
                  value={homepageUrl}
                  onChange={handleInputChange("homepageUrl")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="outerbox">
              <div className="title">
                <h2>画像アップロード</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageuploadbox">
                <div className="imageLogoAndText">
                  <img src="" alt="imageLogo" />
                  <p>ここにドラッグ＆ドロップする</p>
                </div>

                <input
                  className="imageUploaInput"
                  multiple
                  accept="image/png, image/jpeg"
                  name="imageURL"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            登録
          </button>
        </div>
      </form>
      {showModal && (
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            open={showModal}
            onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 mt-4"
                      >
                        グループが登録されました。
                      </Dialog.Title>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                        onClick={closeModal}
                        ref={cancelButtonRef}
                      >
                        閉じる
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
}
