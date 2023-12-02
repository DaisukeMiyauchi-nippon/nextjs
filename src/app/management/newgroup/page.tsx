"use client";
import { SetStateAction, useState, Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const [genre, setGenre] = useState("");
  const [hostId, setHostId] = useState("");
  const [managerId, setManagerId] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

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

  const handleIntroductionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setIntroduction(e.target.value);
  };

  const handleConfirmation = () => {
    setShowModal(true);
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
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
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
              グループ紹介
            </label>
            <div className="relative mt-2.5">
              <input
                type="textarea"
                value={introduction}
                onChange={handleIntroductionChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="button"
            onClick={handleConfirmation}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            入力内容の確認
          </button>
        </div>

      </form>
    </div>
  );
}