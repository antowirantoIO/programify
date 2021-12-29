import Input from '@/Components/Input';
import SectionTitle from '@/Components/SectionTitle';
import React from 'react';

function _Example() {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:order-none">
            <div className="bg-white rounded-xl border shadow-sm">
              <SectionTitle
                title="Update Profile Information"
                description="The information you enter will appear on the profile page,
                    so make sure to make it nice so the others can get to know
                    you better."
              />
              <div className="rounded-b-xl undefined">
                <div className="p-4">
                  <form>
                    <div className="grid gap-x-4 md:grid-cols-2">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Name
                        </label>
                        <div className="flex flex-col items-start">
                          <input
                            type="text"
                            className="form-text h-11 py-0.5 w-full focus:outline-none focus:ring focus:ring-primary-100/60 shadow-sm focus:border-primary-400 border-gray-200 caret-primary-300 selection:bg-primary-100 selection:text-primary-700 rounded-xl transition duration-200 ease-in undefined"
                            placeholder="Jane Doe"
                            name="name"
                            id="name"
                          />
                        </div>
                        <div className="mt-2 text-sm text-rose-500" />
                      </div>
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Username
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            parsinta.com/
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="janedoe"
                            name="username"
                            id="username"
                            defaultValue="antowiranto"
                          />
                        </div>
                        <div className="mt-2 text-sm text-rose-500" />
                      </div>
                    </div>
                    <div className="grid gap-x-4">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Email
                        </label>
                        <div className="flex flex-col items-start">
                          <input
                            type="email"
                            className="form-text h-11 py-0.5 w-full focus:outline-none focus:ring focus:ring-primary-100/60 shadow-sm focus:border-primary-400 border-gray-200 caret-primary-300 selection:bg-primary-100 selection:text-primary-700 rounded-xl transition duration-200 ease-in undefined"
                            placeholder="Jane Doe"
                            name="email"
                            id="email"
                            defaultValue="antow0808@gmail.com"
                          />
                        </div>
                        <div className="mt-2 text-sm text-rose-500" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                        A bit about you
                      </label>
                      <textarea
                        className="w-full rounded-xl border-gray-200 shadow-sm transition duration-200 resize-none undefined selection:bg-primary-100 selection:text-primary-700 form-text focus:shadow-none focus:outline-none focus:ring focus:ring-primary-100/60 focus:border-primary-400"
                        placeholder="Tell us about your self . . ."
                        name="about"
                        id="about"
                        defaultValue={''}
                      />
                    </div>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Job Title
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-4 icon-work"
                            >
                              <path
                                className="primary"
                                d="M10 14.92V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.08c2.83-.24 5.53-.96 8-2.1V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.18a23.85 23.85 0 0 0 8 2.1z"
                              />
                              <path
                                className="secondary"
                                d="M14 12.92V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.92a23.85 23.85 0 0 1-8-2.1V8c0-1.1.9-2 2-2h3V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h3a2 2 0 0 1 2 2v2.82a23.85 23.85 0 0 1-8 2.1zM15 6V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6z"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="Software Engineer"
                            name="job_title"
                            id="job_title"
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          At
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-5 icon-location-pin"
                            >
                              <path
                                className="primary"
                                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                              />
                              <path
                                className="secondary"
                                d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="Somewhere"
                            name="city"
                            id="city"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          website
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            http://
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="parsinta.com"
                            name="website"
                            id="website"
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          github
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-github"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="janedoe"
                            name="github"
                            id="github"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Twitter
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="janedoe"
                            name="twitter"
                            id="twitter"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-x-6 md:grid-cols-2">
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          instagram
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="janedoe"
                            name="instagram"
                            id="instagram"
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block mb-1 text-sm text-gray-600 capitalize undefined">
                          Facebook
                        </label>
                        <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
                          <span className="flex items-center px-4 h-12 bg-gray-50 border-r border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="w-full border-0 form-text focus:outline-none focus:ring-0"
                            placeholder="janedoe"
                            name="facebook"
                            id="facebook"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-3 mb-6">
                      <input
                        type="checkbox"
                        className="mt-1 text-primary-500 shadow-sm focus:outline-none border-gray-200 rounded w-[18px] h-[18px] ring-offset-0 focus:ring-offset-0 focus:ring-0 focus:shadow-none"
                        id="public"
                      />
                      <label htmlFor="public" className="select-none">
                        <span className="font-medium text-gray-600">
                          Pribadi
                        </span>
                        <div className="text-sm text-gray-600">
                          Akun tidak akan bisa dilihat oleh siapapun kecuali
                          diri Anda sendiri.
                        </div>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-[11px] focus:ring focus:ring-gray-500 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition duration-150 focus:outline-none undefined"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _Example;
