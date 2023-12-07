"use client";
import { SetStateAction, useState, Fragment, useRef,useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [groupId, setGroupId] = useState("");
  const [eventFee, setEventFee] = useState("");
  const [place, setPlace] = useState("");
  const [level, setLevel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleEventNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEventDate(e.target.value);
  };

  const handleGroupIdChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setGroupId(e.target.value);
  };

  const handleEventFeeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEventFee(e.target.value);
  };

  const handlePlaceChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPlace(e.target.value);
  };

  const handleLevelChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLevel(e.target.value);
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
          新規イベント登録
        </h2>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="event-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              イベント名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={eventName}
                onChange={handleEventNameChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="group-id"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              グループID/グループ名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={groupId}
                onChange={handleGroupIdChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="place"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              開催場所
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={place}
                onChange={handlePlaceChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="event-fee"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              料金
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={eventFee}
                onChange={handleEventFeeChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              開催日
            </label>
            <div className="relative mt-2.5">
              <input
                type="date"
                value={eventDate}
                onChange={handleEventDateChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              参加者レベル
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                value={level}
                onChange={handleLevelChange}
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
