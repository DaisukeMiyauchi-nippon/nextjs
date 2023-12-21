"use client";
import { SetStateAction, useState, Fragment, useRef,useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { supabase } from "@/utils/supabase/supabaseClient";

export default function NewGroup() {
  
  const [groupName, setGroupName] = useState("");
  const [genre, setGenre] = useState("");
  const [hostId, setHostId] = useState("");
  const [managerId, setManagerId] = useState("");
  const [simple_introduction, setSimple_Introduction] = useState("");
  const [detail_introduction, setDetail_Introduction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [error, setError] = useState("");



  const handleGroupNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setGroupName(e.target.value);
  };

  const handleGenreChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setGenre(e.target.value);
  };

  const handleHostIdChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setHostId(e.target.value);
  };

  const handleManagerIdChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setManagerId(e.target.value);
  };

  const handleSimple_IntroductionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSimple_Introduction(e.target.value);
  };

  const handleDetail_IntroductionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDetail_Introduction(e.target.value);
  };

  const validateForm = () => {
    if (!groupName || !genre || !hostId || !managerId || !simple_introduction ||!detail_introduction) {
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
    const {error } = await supabase
    .from("GROUP_MAIN")
    .insert(
      {group_name:groupName,
        group_genre:genre,
        group_host:hostId,
        simple_intro:simple_introduction,
      });
      if (error) {
        throw error;
      }
      setShowModal(true);
    } catch (error) {
      console.error("Error adding group:", error);
    }
  }

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
      <form onSubmit= {addGroup} className="mx-auto mt-16 max-w-xl sm:mt-20">
      {error && (
          <p className="mt-2 text-red-600 text-sm">{error}</p>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                onChange={handleGroupNameChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ジャンル
            </label>
            <div className="mt-2.5">
              <select
                value={genre}
                onChange={handleGenreChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
              <option>a</option>
              <option>b</option>
              <option>c</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="host"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ホストID/ホスト名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={hostId}
                onChange={handleHostIdChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="manager"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              マネジャーID/マネージャー名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={managerId}
                onChange={handleManagerIdChange}
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
                value={simple_introduction}
                onChange={handleSimple_IntroductionChange}
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
                value={detail_introduction}
                onChange={handleDetail_IntroductionChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        <Transition.Root show={open} as={Fragment}>
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