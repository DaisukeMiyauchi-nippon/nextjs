"use client";
import { SetStateAction, useState, Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Inquiry() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleFirstNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLastName(e.target.value);
  };

  const handleCompanyChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleTelChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTel(e.target.value);
  };

  const handleInquiryChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInquiry(e.target.value);
  };

  const handleConfirmation = () => {
    setShowModal(true);
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
          お問い合わせ
        </h2>
        <p className="mt-2 text-sm leading-8 text-gray-600">
          下記フォーマットにご記入頂き、「入力内容の確認」ボタンを押して内容をご確認の上、送信ください。
          お問い合わせの内容によっては、お時間を頂戴する場合がございます。
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              姓
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                autoComplete="family"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              名
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              会社・所属団体など
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={company}
                onChange={handleCompanyChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                value={email}
                autoComplete="email"
                onChange={handleEmailChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              電話番号
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                value={tel}
                onChange={handleTelChange}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message-type"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              お問い合わせ種類
            </label>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="push-attendance"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  イベントへの参加に関して
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-resisteration"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  イベントの登録に関して
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="push-other"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-nothing"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  その他
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              お問い合わせ内容
            </label>
            <div className="mt-2.5">
              <textarea
                value={inquiry}
                onChange={handleInquiryChange}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
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
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            入力内容の確認
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              以下の内容でお問い合わせされることをご確認ください。
                            </p>
                          </div>
                          <div className="modal-content mt-12">
                        <p>Email: {email}</p>
                        <p>問い合わせ内容: {inquiry}</p>
                        <button onClick={closeModal}>確認</button>
                      </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        送信
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={closeModal}
                        ref={cancelButtonRef}
                      >
                        キャンセル
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
