"use client";
import { SetStateAction, useState, Fragment, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Inquiry() {
  return (
    <div className="isolate bg-white px-2 py-12 sm:py-16 lg:px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          お問い合わせ
        </h2>
        <p className="mt-2 text-sm leading-8 text-gray-600">
          下記フォーマットにご記入頂き、「入力内容の確認」ボタンを押して内容をご確認の上、送信ください。
          お問い合わせの内容によっては、お時間を頂戴する場合がございます。
        </p>
      </div>
      {/* <script async src="https://www.google.com/recaptcha/api.js" /> */}
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" action="https://ssgform.com/s/aattlHIUliQX" method="post">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="Family-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              姓
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="FamilyName"
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
                name="LastName"
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
                name="organization"
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
                name="email"
                autoComplete="email"
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
                name="phone-number"
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
                  htmlFor="event-join"
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
                  htmlFor="event-resister"
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
                  htmlFor="other"
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
                name="inquiry-contents"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
          data-sitekey="{reCAPTCHA(v3)用サイトキーがここに}"
          data-callback="onSubmit"
          data-action="submit"
            type="submit"
            className=" block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}
