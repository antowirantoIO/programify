import React from 'react';

export default function _Badge() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mt-8 ">
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once 1000 Laracasts lessons have been completed."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g fill="#FFF" className="achievement-badge-icon">
                <path d="M36.858 37.591c3.066-3.182 6.053-1.576 6.053-1.576-1.96 3.632-6.053 1.576-6.053 1.576zM28.464 40.732a.252.252 0 01-.232-.157.26.26 0 01.132-.339c7.447-3.236 11.786-7.353 12.9-12.238.738-3.242-.131-6.221-.99-8.152-.935-2.097-2.053-3.432-2.065-3.444a.263.263 0 01.027-.364.25.25 0 01.357.028c.048.056 1.176 1.405 2.14 3.567.893 2 1.793 5.098 1.021 8.48-1.15 5.056-5.59 9.292-13.192 12.597a.245.245 0 01-.097.022zM35.585 10c4.266 1.569 2.736 5.976 2.736 5.976C33.479 12.9 35.585 10 35.585 10zM40.32 10.854c3.508 4.177.585 6.829.585 6.829-2.883-3.737-.584-6.83-.584-6.83zM44.255 17.683c1.444 4.58-1.631 5.122-1.631 5.122-1.94-4.063 1.631-5.122 1.631-5.122zM42.985 27.927c3.353-.413 2.393-4.268 2.393-4.268-3.121.763-2.393 4.268-2.393 4.268z" />
                <path d="M40.317 33.902c.538-4.718 4.32-4.255 4.32-4.255.151 3.076-4.32 4.255-4.32 4.255zM37.723 40.635c-3.625 2.56-5.188-.864-5.188-.864 2.115-2.087 5.188.864 5.188.864z" />
                <path d="M35.13 42.383c-2.33 2.496-6.054-.935-6.054-.935 1.004-2.044 6.053.935 6.053.935zM27.362 41.585s2.694 1.022 2.575 3.415c0 0-2.818-1.145-2.575-3.415zM7.459 36.014s2.987-1.604 6.053 1.577c.002 0-4.09 2.056-6.053-1.577zM21.041 40.732a.252.252 0 00.232-.157.26.26 0 00-.132-.339C13.694 37 9.355 32.883 8.242 27.998c-.738-3.242.13-6.221.99-8.152.934-2.097 2.053-3.432 2.064-3.444a.263.263 0 00-.027-.364.25.25 0 00-.357.028c-.048.056-1.175 1.405-2.14 3.567-.892 2-1.792 5.098-1.02 8.48 1.15 5.056 5.59 9.292 13.191 12.597.03.014.065.022.098.022zM12.05 15.976s-1.53-4.41 2.735-5.976c0 0 2.106 2.9-2.736 5.976zM8.6 17.683s-2.922-2.652.585-6.83c0 0 2.298 3.093-.584 6.83zM6.882 22.805s-3.075-.543-1.632-5.122c0 0 3.571 1.06 1.632 5.122zM4.128 23.659s-.962 3.855 2.392 4.268c0 0 .728-3.505-2.392-4.268z" />
                <path d="M4.868 29.646s3.783-.46 4.32 4.256c0 .002-4.47-1.177-4.32-4.256zM16.97 39.77s-1.565 3.426-5.188.865c0 .002 3.073-2.951 5.188-.865z" />
                <path d="M20.43 41.45s-3.725 3.428-6.054.933c0-.002 5.05-2.979 6.053-.934zM19.568 45c-.119-2.393 2.576-3.415 2.576-3.415.242 2.27-2.576 3.415-2.576 3.415z" />
                <g fillRule="nonzero">
                  <path d="M33.17 33.346a3.401 3.401 0 01-.96-2.364v-2.793a2.297 2.297 0 001.126-1.977c0-1.267-1.01-2.297-2.252-2.297-1.242 0-2.252 1.03-2.252 2.297v.574a.569.569 0 01-.563.574h-6.756a.569.569 0 01-.563-.574v-.574c0-1.267-1.01-2.297-2.252-2.297-1.241 0-2.251 1.03-2.251 2.297 0 .846.456 1.579 1.126 1.977v2.793c0 .88-.35 1.741-.961 2.364-.354.36-.104.98.398.98h3.377a.568.568 0 00.563-.574v-.574h7.882v.574c0 .317.252.574.563.574h3.378c.501 0 .75-.62.398-.98zm-4.338-1.317H20.95v-.574c0-.316.253-.574.563-.574h6.756c.31 0 .563.258.563.574v.574z" />
                  <path d="M30.52 17.026c-.732 0-1.351.482-1.584 1.148h-.497l-1.916-1.302c.034-.135.057-.274.057-.42 0-.95-.758-1.722-1.689-1.722s-1.689.772-1.689 1.722c0 .146.023.285.057.42l-1.916 1.302h-.496a1.689 1.689 0 00-1.586-1.148c-.93 0-1.688.773-1.688 1.722 0 .848.603 1.55 1.394 1.693l.392 2.394c1.547.314 2.717 1.708 2.717 3.377h5.63c0-1.67 1.17-3.063 2.717-3.377l.392-2.394a1.713 1.713 0 001.395-1.693c0-.95-.758-1.722-1.69-1.722zm-11.259 2.297a.569.569 0 01-.563-.575c0-.316.253-.574.563-.574.311 0 .563.258.563.574a.569.569 0 01-.563.575zm5.63-3.445c.31 0 .563.257.563.574a.569.569 0 01-.563.574.569.569 0 01-.563-.574c0-.317.252-.574.563-.574zm5.63 3.445a.569.569 0 01-.563-.575c0-.316.252-.574.563-.574.31 0 .563.258.563.574a.569.569 0 01-.563.575z" />
                </g>
              </g>
            </g>
          </svg>
          <div id="achievement-template-9" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Laracasts Master
            </h4>
            <p>Earned once 1000 Laracasts lessons have been completed.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title='Earned once your "Best Reply" award count is 100 or more.'
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g fill="#FFF" className="achievement-badge-icon">
                <g fillRule="nonzero">
                  <path d="M17.442 20.761v-2.705h6.562v-6.801a5.457 5.457 0 00-3.44-1.213c-2.678 0-4.91 1.917-5.354 4.43a4.778 4.778 0 00-.755-.06c-2.593 0-4.704 2.078-4.704 4.632 0 .718.17 1.421.49 2.056A5.545 5.545 0 008 25.565c0 1.865.956 3.605 2.494 4.64-.116.448-.174.909-.174 1.379 0 2.877 2.209 5.255 5.044 5.576.684 2.214 2.788 3.798 5.2 3.798a5.457 5.457 0 003.44-1.213v-6.801h-6.562v-2.705h-1.639v-1.962h1.639V26.48h-1.639v-1.962h1.639v-1.796h-1.639v-1.962h1.639zM42 25.565a5.545 5.545 0 00-2.24-4.465c.319-.635.489-1.338.489-2.056 0-2.554-2.11-4.632-4.704-4.632-.253 0-.506.02-.755.06-.445-2.513-2.676-4.43-5.353-4.43a5.457 5.457 0 00-3.44 1.213v6.801h6.561v2.705h1.639v1.962h-1.639v1.796h1.639v1.962h-1.639v1.796h1.639v1.962h-1.639v2.705h-6.562v6.801a5.457 5.457 0 003.44 1.213c2.412 0 4.516-1.584 5.2-3.798 2.835-.32 5.044-2.699 5.044-5.576 0-.47-.058-.931-.174-1.38C41.044 29.17 42 27.43 42 25.565z" />
                </g>
                <path d="M25 31l-.77-.76c-2.86-2.5-4.73-4.185-4.73-6.251 0-1.685 1.32-2.989 3.025-2.989.935 0 1.87.435 2.475 1.142A3.32 3.32 0 0127.475 21c1.705 0 3.025 1.304 3.025 2.989 0 2.065-1.87 3.75-4.73 6.25L25 31z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-10" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Laracasts Tutor</h4>
            <p>Earned once your "Best Reply" award count is 100 or more.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once your experience points passes 1 million."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g transform="translate(-.978 -.99)" fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx="25.978"
                cy="25.991"
                r={25}
              />
              <path
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
                d="M17.988 19.316h2.456v20.396h-2.456zM32.513 19.316h2.456v20.396h-2.456zM25.25 19.316h2.456v9.302H25.25z"
              />
              <path
                d="M38.612 23.279H14.344a.327.327 0 00-.325.33v1.262c0 .182.145.33.325.33h24.268c.18 0 .325-.148.325-.33V23.61a.328.328 0 00-.325-.33zM26.478 19.19c-3.543 0-7.086-.608-10.629-1.825v3.143c0 .42.335.76.749.76h19.76c.414 0 .749-.34.749-.76v-3.143c-3.543 1.217-7.086 1.826-10.629 1.826z"
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              />
              <path
                d="M38.433 12.539c-1.53.914-4.954 2.239-11.955 2.239s-10.426-1.325-11.955-2.239c-.284-.17-.613.14-.47.442l.904 1.896c.537 1.129 1.935 1.52 2.898 1.846.962.325 4.311 1 8.623 1 4.312 0 8.623-1 8.623-1s2.36-.717 2.898-1.846l.903-1.896c.144-.302-.184-.612-.47-.442z"
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              />
            </g>
          </svg>
          <div id="achievement-template-12" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Laracasts Sensei
            </h4>
            <p>Earned once your experience points passes 1 million.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once your experience points ranks in the top 50 of all Laracasts users."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M20.517 16.519l3.138 1.757-1.757-3.138L23.655 12l-3.138 1.757L17.38 12l1.758 3.138-1.758 3.138zM34.862 28.999l-3.138-1.758 1.757 3.138-1.757 3.138 3.138-1.757L38 33.517l-1.757-3.138L38 27.241zM38 12l-3.138 1.757L31.724 12l1.757 3.138-1.757 3.138 3.138-1.757L38 18.276l-1.757-3.138zM28.519 18.646a1.192 1.192 0 00-1.726 0L12.37 33.069a1.192 1.192 0 000 1.726l2.835 2.835a1.192 1.192 0 001.726 0l14.423-14.423a1.192 1.192 0 000-1.726l-2.835-2.835zm-1.356 6.78l-2.589-2.589 2.959-2.959 2.589 2.59-2.96 2.958z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-14" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Top 50</h4>
            <p>
              Earned once your experience points ranks in the top 50 of all
              Laracasts users.
            </p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once your experience points ranks in the top 10 of all Laracasts users."
        >
          <svg width={30} height={30} viewBox="0 0 90 90">
            <defs>
              <linearGradient
                id="u01yeuduha"
                x1=".733%"
                x2="99.267%"
                y1="50.733%"
                y2="50.733%"
              >
                <stop offset="0%" stopColor="#F19A1A" />
                <stop offset="100%" stopColor="#FFC73C" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g>
                <g transform="translate(-309 -201) translate(309 201)">
                  <circle cx={45} cy={45} r={45} className="tw-fill-current" />
                  <g fill="#FFF" className="achievement-badge-icon">
                    <g>
                      <path
                        fillRule="nonzero"
                        d="M51.165 0c3.787 0 6.857 3.441 6.857 7.687 0 4.245-3.07 7.686-6.857 7.686h-.858c-1.418 0-2.571-1.293-2.571-2.882 0-1.59 1.153-2.883 2.571-2.883.947 0 1.715-.86 1.715-1.921 0-1.062-.768-1.922-1.715-1.922-3.308 0-6 3.017-6 6.726 0 1.031.208 2.008.58 2.882h-10.12V9.845h-12v5.528h-9.632c.33-.777.532-1.635.573-2.54l.008-.342c0-3.709-2.692-6.726-6.001-6.726-.947 0-1.714.86-1.714 1.922 0 1.061.767 1.921 1.714 1.921 1.418 0 2.572 1.293 2.572 2.883s-1.154 2.882-2.572 2.882h-.857C3.07 15.373 0 11.932 0 7.687 0 3.44 3.07 0 6.858 0z"
                        transform="translate(15.918 19.592)"
                      />
                      <g>
                        <path
                          d="M2.393 6H9.716999999999999V32.284H2.393zM13.986 0L21.311 0 21.311 37.75 13.986 37.75zM25.583 6H32.907V32.284H25.583z"
                          transform="translate(15.918 19.592) translate(11.118 12.845)"
                        />
                      </g>
                    </g>
                    <path
                      d="M50.02 47.939c.677 0 1.225.548 1.225 1.224v7.644c0 .676-.548 1.224-1.225 1.224H8.388c-.677 0-1.225-.548-1.225-1.224v-7.644c0-.676.548-1.224 1.225-1.224l14.378-.001.001 5.638h12v-5.638H50.02z"
                      transform="translate(15.918 19.592)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div id="achievement-template-22" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Community Pillar
            </h4>
            <p>
              Earned once your experience points ranks in the top 10 of all
              Laracasts users.
            </p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once you have achieved 500 forum replies."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M20.413 35.936c.037.002.075.003.113.003h3.478v4.712c0 .675-.537 1.222-1.2 1.222-.55 0-1.029-.382-1.162-.926l-1.229-5.011zM18.513 21.256l-1.156 7.073a1.182 1.182 0 01-.927-.327 1.24 1.24 0 01-.226-1.487l2.31-5.26zM32.309 28.3l-1.095-6.695 2.42 4.91a1.24 1.24 0 01-.226 1.487c-.305.292-.72.39-1.1.298zM25.996 35.782h3.31c.097 0 .192-.006.285-.018l-1.233 5.027a1.204 1.204 0 01-1.163.926 1.211 1.211 0 01-1.199-1.223v-4.712zM28.085 22.998a7.355 7.355 0 001.763-.92l1.677 10.264c.229 1.398-.828 2.671-2.218 2.671h-8.781c-1.39 0-2.447-1.273-2.219-2.67l1.769-10.822.015-.021a6.978 6.978 0 001.67 1.156c.513 1.312 1.77 2.238 3.239 2.238 1.338 0 2.5-.768 3.085-1.896zM17.013 13.357a4.606 4.606 0 00-1.137 3.043c0 .777.19 1.508.525 2.149-.1.092-.195.172-.28.237-.905.694-2.046.704-2.549.022-.25-.34-.296-.788-.166-1.237-.33-.142-.586-.38-.713-.7-.127-.32-.104-.674.037-1.01-.399-.231-.671-.585-.722-1.007-.101-.848.728-1.648 1.852-1.788.7-.087 2.143.004 3.153.291zM33.936 18.654c.26-.666.407-1.435.407-2.254 0-1.205-.32-2.301-.843-3.118.98-.227 2.224-.295 2.86-.216 1.124.14 1.952.94 1.85 1.788-.05.422-.322.776-.721 1.007.141.336.164.69.037 1.01-.127.32-.383.558-.713.7.13.45.085.897-.166 1.237-.503.682-1.644.672-2.549-.022a3.723 3.723 0 01-.162-.132z" />
                <path d="M29.99 20.894c-1.243.928-2.878 1.492-4.669 1.492-2.075 0-3.94-.757-5.23-1.962.739-1.045 1.532-2.575 2.099-3.747.977.787 2.118 1.277 3.063.5 0 0 2.436 3.7 4.304 2.675.083.377.231.728.433 1.042zm2.357-4.896c-.05.004-.099.01-.148.016-.798-1.669-2.255-3.14-4.598-3.59-4.966-.954-7.253 1.388-7.575 1.754-.779.71-1.358 1.606-1.743 2.532a5.1 5.1 0 01-.007-.267c0-3.282 3.154-5.943 7.045-5.943 3.714 0 6.756 2.423 7.026 5.498z" />
                <path d="M21.869 14.514c-1.013 2.108-2.746 5.365-3.605 4.943-1.517-.743-1.112-5.118 1.441-7.462.322-.368 2.608-2.728 7.575-1.766 5.622 1.088 6.144 8.104 4.697 9.58-1.447 1.475-2.349-2.395-2.349-2.395-1.897 1.887-4.697-2.395-4.697-2.395-.945.781-2.085.288-3.062-.505z" />
                <path d="M21.98 15.193c-.991 2.091-2.824 5.616-3.716 5.179-1.517-.744-1.112-5.12 1.441-7.462.322-.368 2.608-2.729 7.575-1.767 5.622 1.089 6.144 8.104 4.697 9.58-1.447 1.475-2.349-2.395-2.349-2.395-1.52 1.68-4.07-2.482-4.07-2.482-1.018.842-2.405.224-3.577-.653z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-2" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Chatty Cathy</h4>
            <p>Earned once you have achieved 500 forum replies.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once your experience points passes 100,000."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <path
                d="M14.492 25.528c0-.246.021-.486.038-.727H8.025l.731 1.445 1.071.008h4.703c-.017-.24-.038-.481-.038-.726zM15.133 21.893H5l.73 1.446 1.072.008h7.912c.105-.494.245-.98.42-1.454zM35.816 21.893c.174.474.314.96.42 1.454h8.957l.782-1.462-10.16.008zM36.457 25.528c0 .245-.021.485-.037.726h5.747l.778-1.453H36.42c.016.241.037.481.037.727zM25.475 16.079c5.254.005 9.512 4.232 9.517 9.449 0 5.218-4.26 9.448-9.517 9.448s-9.518-4.23-9.518-9.448c0-5.219 4.261-9.45 9.518-9.45zm-.656 10.046h1.141a.65.65 0 000-1.3H22.4a.65.65 0 000 1.3h1.142v2.933a.654.654 0 00.082.393l.005.009a.637.637 0 00.872.226l6.208-3.647a.657.657 0 00.324-.57.657.657 0 00-.324-.569l-6.16-3.619a.636.636 0 00-.658-.047.654.654 0 00-.349.647v1.634a.639.639 0 001.277 0v-.574l4.304 2.529-4.304 2.529v-1.874zm-4.158 0a.65.65 0 000-1.3h-.536a.65.65 0 000 1.3h.536z"
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              />
            </g>
          </svg>
          <div id="achievement-template-11" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Laracasts Veteran
            </h4>
            <p>Earned once your experience points passes 100,000.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once your experience points hits 10,000."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M32.021 29.95c.274.423.795 1.448 1.564 3.074l-.778-2.41-.368-.862.265-.127a.926.926 0 00.439-1.239l-.844-1.746a.941.941 0 00-1.247-.435l-.528.252-4.128-4.085 1.446 2.855c.92.24 1.575.764 1.962 1.573l-2.327 1.11c-.432.206-.708.64-.708 1.116v4.613c0 .093-.029.183-.083.259l-.825 1.148a.449.449 0 01-.729 0l-.825-1.148a.442.442 0 01-.084-.259v-4.613c0-.476-.275-.91-.707-1.117l-3.575-1.704a.94.94 0 00-1.247.435l-.844 1.746a.926.926 0 00.438 1.24l3.544 1.689c.459.218.738.691.705 1.196l-.472 7.322a1.237 1.237 0 01-.549.949c-.32.214-.724.269-1.09.147L14 35.232a6.912 6.912 0 001.501-2.18c1.336-3.005.841-5.887 1.056-7.63.751-6.103 4.002-8.88 8.94-8.88 4.937 0 8.188 2.777 8.94 8.88.219 1.785-.214 5.11 1.182 8.217.363.81.9 1.513 1.611 2.109l-6.663 5.181c-.367.122-.77.067-1.09-.147a1.237 1.237 0 01-.549-.949l-.472-7.322a1.238 1.238 0 01.705-1.197l2.86-1.363z" />
                <path d="M35.11 10.863c-.294-.173-1.711 1.64-2.017 1.48-.366-.19.377-2.349 0-2.518a23.13 23.13 0 00-4.852-1.561c-.41-.082-.377 2.607-.79 2.554-.337-.043-.31-2.747-.648-2.771a18.21 18.21 0 00-4.395.217.209.209 0 00-.175.218l.098 1.637a.037.037 0 01-.072.013l-.502-1.582a.21.21 0 00-.23-.144c-.595.082-.991.144-1.587.408a.209.209 0 00-.121.224l.452 2.758a.105.105 0 01-.055.11.107.107 0 01-.123-.016l-2.23-2.059a.211.211 0 00-.236-.035 17.846 17.846 0 00-4.407 3.022.546.546 0 00-.013.785l3.783 3.757a.552.552 0 00.759.016c4.376-3.97 11.12-3.97 15.495 0 .217.198.551.19.76-.016l3.782-3.757a.545.545 0 00-.013-.785c-.78-.727-1.687-1.38-2.662-1.955z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-16" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Ten Thousand Strong
            </h4>
            <p>Earned once your experience points hits 10,000.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once you have completed your first Laracasts lesson."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M17.745 19.313l3.229 3.228a1.703 1.703 0 11-2.408 2.408l-3.229-3.228a1.703 1.703 0 112.408-2.408zM24.647 26.215l6.916 6.916a1.703 1.703 0 11-2.408 2.408l-6.916-6.916a1.703 1.703 0 012.408-2.408z" />
                <path d="M16.109 18.876l18.582-4.828a1.752 1.752 0 012.129 1.23 1.7 1.7 0 01-1.211 2.097l-18.582 4.827a1.752 1.752 0 01-2.13-1.23 1.7 1.7 0 011.212-2.096z" />
                <path d="M28.684 33.859l4.827-18.582a1.7 1.7 0 012.073-1.218l.024.007a1.752 1.752 0 011.23 2.13L32.01 34.776a1.7 1.7 0 01-2.072 1.218l-.025-.007a1.752 1.752 0 01-1.23-2.13zM28.046 25.31l-6.712 6.712a1.733 1.733 0 11-2.45-2.45l6.71-6.713a1.733 1.733 0 012.45 2.45zM18.052 35.303l-1.009 1.01a1.733 1.733 0 11-2.45-2.45l1.009-1.011a1.733 1.733 0 012.45 2.45z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-1" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Start Your Engines
            </h4>
            <p>Earned once you have completed your first Laracasts lesson.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once you have earned your first 1000 experience points."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g className="achievement-badge-icon">
                <path
                  d="M39.59 27.276a7.757 7.757 0 01-2.465-5.651c0-1.1.237-2.182.69-3.18a14.104 14.104 0 011.893 7.055c0 .625-.046 1.21-.118 1.776z"
                  fill="#F2F2F2"
                  fillRule="nonzero"
                />
                <g
                  transform="translate(11.271 12.543)"
                  fill="#FFF"
                  fillRule="nonzero"
                >
                  <circle cx="14.229" cy="6.499" r="6.458" />
                  <path d="M1.913 5.901c.453.999.69 2.081.69 3.181a7.759 7.759 0 01-2.437 5.623 11.347 11.347 0 01-.146-1.748c0-2.569.696-4.974 1.893-7.056z" />
                </g>
                <path
                  d="M25.5 39.708c-7.562 0-8.536-1.228-8.952-6.432 1.86-2.013 5.257-3.255 8.952-3.255 3.695 0 7.093 1.242 8.952 3.255-.416 5.204-1.39 6.432-8.952 6.432zm3.552-2.583c.503 0 .969-.313.969-2.583s-.466-2.584-.969-2.584c-.503 0-.969.313-.969 2.584 0 2.27.466 2.583.97 2.583zm-7.104-5.167c-.503 0-.969.313-.969 2.584 0 2.27.466 2.583.969 2.583.503 0 .969-.313.969-2.583s-.466-2.584-.97-2.584z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
                <path
                  d="M35.708 33.673c.018-.191.038-.372.053-.572a.65.65 0 00-.152-.468C33.554 30.225 29.68 28.73 25.5 28.73s-8.054 1.496-10.109 3.904a.65.65 0 00-.152.468c.003.046.008.085.012.13-1.734-1.157-2.89-2.692-3.483-4.571 2.13-1.712 3.399-4.299 3.399-7.035 0-1.55-.42-3.061-1.183-4.415a14.184 14.184 0 0110.724-5.878c-3.903.398-6.958 3.703-6.958 7.71 0 4.273 3.476 7.75 7.75 7.75s7.75-3.477 7.75-7.75c0-4.007-3.055-7.312-6.958-7.71a14.183 14.183 0 0110.724 5.878 8.992 8.992 0 00-1.183 4.415c0 2.773 1.299 5.387 3.477 7.097-.567 2.14-1.757 3.782-3.602 4.95z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
                <path
                  d="M39.59 27.276a7.757 7.757 0 01-2.465-5.651c0-1.1.237-2.182.69-3.18a14.104 14.104 0 011.893 7.055c0 .625-.046 1.21-.118 1.776z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
                <path
                  d="M11.438 27.248a7.82 7.82 0 00.649-.704c-.26-.093-.509-.197-.762-.298.026.341.062.676.113 1.002z"
                  fill="#000"
                  fillRule="nonzero"
                  opacity=".1"
                />
              </g>
            </g>
          </svg>
          <div id="achievement-template-3" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">First Thousand</h4>
            <p>
              Earned once you have earned your first 1000 experience points.
            </p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when you have been with Laracasts for 1 year."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                transform="translate(11 11)"
                fill="#FFF"
                className="achievement-badge-icon"
              >
                <path
                  d="M28.871 10.879c-.308-.987-1.11-1.692-2.096-1.841l-6.873-1.04-3.074-6.49C16.388.578 15.495 0 14.5 0c-.995 0-1.887.578-2.328 1.508l-3.074 6.49-6.873 1.04c-.985.149-1.788.854-2.096 1.84a2.767 2.767 0 00.657 2.773l4.974 5.051-1.174 7.133a2.742 2.742 0 001.032 2.646c.455.344.988.519 1.524.519.412 0 .827-.104 1.21-.314L14.5 25.32l6.148 3.367a2.494 2.494 0 002.734-.205 2.742 2.742 0 001.033-2.646l-1.174-7.133 4.973-5.05a2.767 2.767 0 00.657-2.773z"
                  fillRule="nonzero"
                  opacity=".3"
                />
                <path d="M13.256 13.01c.383-.088.534.435 1.294.435.74 0 .955-.52 1.324-.435.37.085.304.457 0 .78-.304.321-.676.622-1.324.622-.548 0-.945-.244-1.294-.623-.298-.322-.383-.691 0-.779z" />
                <path
                  d="M23.454 20l.96 5.835a2.742 2.742 0 01-1.032 2.646 2.494 2.494 0 01-2.734.205L14.5 25.32l-6.148 3.367c-.383.21-.798.314-1.21.314a2.517 2.517 0 01-1.524-.52 2.742 2.742 0 01-1.032-2.645L5.546 20h17.908z"
                  fillRule="nonzero"
                />
                <circle cx={11} cy={12} r={1} />
                <circle cx={18} cy={12} r={1} />
              </g>
            </g>
          </svg>
          <div id="achievement-template-4" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">One Year Member</h4>
            <p>Earned when you have been with Laracasts for 1 year.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when you have been with Laracasts for 2 years."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g className="achievement-badge-icon" fill="#FFF">
                <path
                  d="M39.871 21.879c-.308-.987-1.11-1.692-2.096-1.841l-6.873-1.04-3.074-6.49C27.388 11.578 26.495 11 25.5 11c-.995 0-1.887.578-2.328 1.508l-3.074 6.49-6.873 1.04c-.985.149-1.788.854-2.096 1.84a2.767 2.767 0 00.657 2.773l4.974 5.051-1.174 7.133a2.742 2.742 0 001.032 2.646c.455.344.988.519 1.524.519.412 0 .827-.104 1.21-.314L25.5 36.32l6.148 3.367a2.494 2.494 0 002.734-.205 2.742 2.742 0 001.033-2.646l-1.174-7.133 4.973-5.05a2.767 2.767 0 00.657-2.773z"
                  fillRule="nonzero"
                  opacity=".3"
                />
                <path
                  d="M36.901 27l-2.66 2.702 1.174 7.133a2.742 2.742 0 01-1.033 2.646 2.494 2.494 0 01-2.734.205L25.5 36.32l-6.148 3.367c-.383.21-.798.314-1.21.314a2.517 2.517 0 01-1.524-.52 2.742 2.742 0 01-1.032-2.645l1.174-7.133L14.099 27H36.9z"
                  fillRule="nonzero"
                />
                <circle cx={22} cy={23} r={1} />
                <circle cx={29} cy={23} r={1} />
                <path d="M24.256 24.01c.383-.088.534.435 1.294.435.74 0 .955-.52 1.324-.435.37.085.304.457 0 .78-.304.321-.676.622-1.324.622-.548 0-.945-.244-1.294-.623-.298-.322-.383-.691 0-.779z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-5" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Two Year Member</h4>
            <p>Earned when you have been with Laracasts for 2 years.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when you have been with Laracasts for 3 years."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                className="achievement-badge-icon"
                fill="#FFF"
                fillRule="nonzero"
              >
                <path
                  d="M38.871 21.879c-.308-.987-1.11-1.692-2.096-1.841l-6.873-1.04-3.074-6.49C26.388 11.578 25.495 11 24.5 11c-.995 0-1.887.578-2.328 1.508l-3.074 6.49-6.873 1.04c-.985.149-1.788.854-2.096 1.84a2.767 2.767 0 00.657 2.773l4.974 5.051-1.174 7.133a2.742 2.742 0 001.032 2.646c.455.344.988.519 1.524.519.412 0 .827-.104 1.21-.314L24.5 36.32l6.148 3.367a2.494 2.494 0 002.734-.205 2.742 2.742 0 001.033-2.646l-1.174-7.133 4.973-5.05a2.767 2.767 0 00.657-2.773z"
                  opacity=".3"
                />
                <path d="M10.587 21h27.826c.2.255.356.551.458.879a2.767 2.767 0 01-.657 2.772l-4.973 5.051 1.174 7.133a2.742 2.742 0 01-1.033 2.646 2.494 2.494 0 01-2.734.205L24.5 36.32l-6.148 3.367c-.383.21-.798.314-1.21.314a2.517 2.517 0 01-1.524-.52 2.742 2.742 0 01-1.032-2.645l1.174-7.133-4.974-5.05a2.767 2.767 0 01-.657-2.773c.102-.328.258-.624.458-.879zm12.619 3.22c-.383.089-.298.457 0 .78.35.378.745.622 1.294.622.648 0 1.02-.3 1.324-.622.304-.322.369-.695 0-.78-.37-.084-.584.436-1.324.436-.76 0-.911-.523-1.294-.435zM21 24a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-6" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Three Year Member
            </h4>
            <p>Earned when you have been with Laracasts for 3 years.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when you have been with Laracasts for 4 years."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                className="achievement-badge-icon"
                fill="#FFF"
                fillRule="nonzero"
              >
                <path
                  d="M39.871 21.879c-.308-.987-1.11-1.692-2.096-1.841l-6.873-1.04-3.074-6.49C27.388 11.578 26.495 11 25.5 11c-.995 0-1.887.578-2.328 1.508l-3.074 6.49-6.873 1.04c-.985.149-1.788.854-2.096 1.84a2.767 2.767 0 00.657 2.773l4.974 5.051-1.174 7.133a2.742 2.742 0 001.032 2.646c.455.344.988.519 1.524.519.412 0 .827-.104 1.21-.314L25.5 36.32l6.148 3.367a2.494 2.494 0 002.734-.205 2.742 2.742 0 001.033-2.646l-1.174-7.133 4.973-5.05a2.767 2.767 0 00.657-2.773z"
                  opacity=".3"
                />
                <path d="M21.518 16h7.964l1.42 2.997 6.873 1.04c.985.15 1.788.855 2.096 1.842a2.767 2.767 0 01-.657 2.772l-4.973 5.051 1.174 7.133a2.742 2.742 0 01-1.033 2.646 2.494 2.494 0 01-2.734.205L25.5 36.32l-6.148 3.367c-.383.21-.798.314-1.21.314a2.517 2.517 0 01-1.524-.52 2.742 2.742 0 01-1.032-2.645l1.174-7.133-4.974-5.05a2.767 2.767 0 01-.657-2.773c.308-.987 1.11-1.692 2.096-1.841l6.873-1.04L21.518 16zm2.738 8.01c-.383.088-.298.457 0 .78.35.378.746.622 1.294.622.648 0 1.02-.3 1.324-.623.304-.322.37-.694 0-.779-.37-.085-.584.435-1.324.435-.76 0-.91-.523-1.294-.435zM22 24a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-7" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Four Year Member
            </h4>
            <p>Earned when you have been with Laracasts for 4 years.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when you have been with Laracasts for 5 years."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                className="achievement-badge-icon"
                fill="#FFF"
                fillRule="nonzero"
              >
                <path
                  d="M39.871 21.879c-.308-.987-1.11-1.692-2.096-1.841l-6.873-1.04-3.074-6.49C27.388 11.578 26.495 11 25.5 11c-.995 0-1.887.578-2.328 1.508l-3.074 6.49-6.873 1.04c-.985.149-1.788.854-2.096 1.84a2.767 2.767 0 00.657 2.773l4.974 5.051-1.174 7.133a2.742 2.742 0 001.032 2.646c.455.344.988.519 1.524.519.412 0 .827-.104 1.21-.314L25.5 36.32l6.148 3.367a2.494 2.494 0 002.734-.205 2.742 2.742 0 001.033-2.646l-1.174-7.133 4.973-5.05a2.767 2.767 0 00.657-2.773z"
                  opacity=".3"
                />
                <path d="M39.871 21.879a2.767 2.767 0 01-.657 2.772l-4.973 5.051 1.174 7.133a2.742 2.742 0 01-1.033 2.646 2.494 2.494 0 01-2.734.205L25.5 36.32l-6.148 3.367c-.383.21-.798.314-1.21.314a2.517 2.517 0 01-1.524-.52 2.742 2.742 0 01-1.032-2.645l1.174-7.133-4.974-5.05a2.767 2.767 0 01-.657-2.773c.308-.987 1.11-1.692 2.096-1.841l6.873-1.04 3.074-6.49c.44-.93 1.333-1.508 2.328-1.508.995 0 1.887.578 2.328 1.508l3.074 6.49 6.873 1.04c.985.149 1.788.854 2.096 1.84zM22 24a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2zm-3.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-8" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Five Year Member
            </h4>
            <p>Earned when you have been with Laracasts for 5 years.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned when at least one Laracasts series has been fully completed."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M13.573 32.96a1.95 1.95 0 01.553-1.38c.362-.37.847-.573 1.36-.573h21.163v3.87H15.523c-1.065 0-1.94-.86-1.95-1.916z" />
                <path d="M37.646 37.984h-22.11a5.049 5.049 0 01-5.036-5.027c-.007-2.786 2.233-5.058 4.985-5.058h22.161c.472 0 .854.387.854.863v.346a.859.859 0 01-.854.863h-22.16c-.94 0-1.78.449-2.316 1.146a2.97 2.97 0 000 3.64 2.98 2.98 0 002.353 1.156h22.123c.472 0 .854.386.854.863v.345a.859.859 0 01-.854.863zM25.392 14.83c.308-.49.795-1.19 1.41-1.862.52-.57 1.54-1.303 1.54-1.303.154-.11.138-.264-.037-.341l-1.232-.549a.465.465 0 00-.527.126s-.912 1.245-1.985 3.897c-3.318-1.43-6.472.573-6.472 4.054 0 3.636 2.938 9.16 6.91 7.493 4.184 1.724 6.912-3.856 6.912-7.493 0-3.511-2.835-5.57-6.519-4.023z" />
                <path d="M24.649 13.652a.418.418 0 00.377-.36s.123-1.422-.918-2.414c-1.044-.992-2.534-.874-2.534-.874a.418.418 0 00-.377.36s-.125 1.422.917 2.415c1.041.991 2.535.873 2.535.873z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-13" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              School In Session
            </h4>
            <p>
              Earned when at least one Laracasts series has been fully
              completed.
            </p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned after your first post on the Laracasts forum."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                fill="white"
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <path
                className="achievement-badge-icon"
                d="M32.086 11.901a1.813 1.813 0 00-1.823 1.803v6.31c0-.996-.816-1.803-1.823-1.803a1.813 1.813 0 00-1.823 1.803c0-.996-.816-1.803-1.823-1.803a1.813 1.813 0 00-1.823 1.803v-7.211c0-.996-.816-1.803-1.823-1.803a1.813 1.813 0 00-1.823 1.803v12.619s-3.346-3.606-5.47-3.606c-1.56 0-1.822.669-1.822 1.803 0 .89 1.247 1.215 3.174 4.114 1.114 1.676.759 2.49 2.504 4.114.307.286.814.671 1.438 1.046.033.03.08.06.145.088.077.033.13.074.202.108.113.063.224.124.342.184 1.235.836 1.31 3.2 1.31 3.866 0 1.35.431 1.803 1.787 1.803h7.328c1.299 0 1.823-.537 1.823-1.803v-2.704c0-1.457 1.823-5.59 1.823-9.915V13.704c0-.996-.816-1.803-1.823-1.803z"
                fill="#FFF"
              />
            </g>
          </svg>
          <div id="achievement-template-15" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Welcome To The Community
            </h4>
            <p>Earned after your first post on the Laracasts forum.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned once 100 Laracasts lessons have been completed."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <path
                d="M27.124 13.605l12.924 6.432a1.714 1.714 0 010 3.069l-5.076 2.526V31c0 3.314-4.24 6-9.472 6-5.231 0-9.472-2.686-9.472-6v-5.37l-2.584-1.285v5.178c.514.298.862.844.862 1.477 0 .947-.772 1.714-1.723 1.714-.95 0-1.722-.767-1.722-1.714 0-.633.348-1.18.861-1.476v-6.035l-.77-.383a1.714 1.714 0 010-3.069l12.924-6.432-.14 2.945-10.09 5.021 9.623 4.79-.134 2.808-4.524-2.252V31c0 1.586 3.009 3.429 6.889 3.429 3.88 0 6.889-1.843 6.889-3.429v-4.083l-4.524 2.252-.134-2.808 9.623-4.79-10.09-5.021-.14-2.945z"
                fill="#FFF"
                className="achievement-badge-icon"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <div id="achievement-template-17" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Full Time Learner
            </h4>
            <p>Earned once 100 Laracasts lessons have been completed.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title='Earned once you receive your first "Best Reply" award on the Laracasts forum.'
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <path
                className="achievement-badge-icon"
                d="M37 21.436v2.017a.805.805 0 00-.043.139 7.865 7.865 0 01-.648 2.319 15.834 15.834 0 01-2.909 4.298c-2.43 2.656-5.229 4.812-8.207 6.727a.284.284 0 01-.358 0 43.56 43.56 0 01-6.72-5.197 21.742 21.742 0 01-3.846-4.732 8.913 8.913 0 01-1.045-6.576c1.09-5.09 7.123-7.17 10.881-3.758.322.29.605.627.927.96.02-.035.04-.068.064-.1 1.68-1.974 3.756-2.856 6.24-2.418 2.724.478 4.51 2.188 5.378 4.938.12.455.215.918.286 1.383z"
                fill="#FFF"
              />
            </g>
          </svg>
          <div id="achievement-template-18" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Pay It Forward</h4>
            <p>
              Earned once you receive your first "Best Reply" award on the
              Laracasts forum.
            </p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned if you are a paying Laracasts subscriber."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <path
                d="M38.765 16.978c-4.404-7.629-14.16-10.243-21.787-5.838C9.348 15.544 6.735 25.3 11.14 32.927c4.404 7.629 14.159 10.243 21.787 5.838 7.629-4.405 10.244-14.16 5.838-21.787zm-7.433 19.024c-6.102 3.524-13.906 1.433-17.43-4.67-3.524-6.102-1.432-13.907 4.67-17.43 6.103-3.523 13.907-1.432 17.43 4.67 3.524 6.104 1.433 13.907-4.67 17.43zm.39-11.698c.762.445.76 1.161-.003 1.602l-8.288 4.785c-.763.44-1.384.082-1.388-.798L22 20.225c-.004-.88.61-1.236 1.37-.792l8.353 4.871zM19.19 19.73l1.912.584-.292.957-1.912-.585.292-.956zm-.3 9.642l1.879-.684.342.94-1.88.684-.342-.94zM18 23h2v1h-2v-1zm0 3h2v1h-2v-1z"
                fill="#FFF"
                className="achievement-badge-icon"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <div id="achievement-template-19" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Subscriber</h4>
            <p>Earned if you are a paying Laracasts subscriber.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned if you have a lifetime subscription to Laracasts."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g fill="#FFF" className="achievement-badge-icon">
                <path d="M36.858 37.591c3.066-3.182 6.053-1.576 6.053-1.576-1.96 3.632-6.053 1.576-6.053 1.576zM28.464 40.732a.252.252 0 01-.232-.157.26.26 0 01.132-.339c7.447-3.236 11.786-7.353 12.9-12.238.738-3.242-.131-6.221-.99-8.152-.935-2.097-2.053-3.432-2.065-3.444a.263.263 0 01.027-.364.25.25 0 01.357.028c.048.056 1.176 1.405 2.14 3.567.893 2 1.793 5.098 1.021 8.48-1.15 5.056-5.59 9.292-13.192 12.597a.245.245 0 01-.097.022zM35.585 10c4.266 1.569 2.736 5.976 2.736 5.976C33.479 12.9 35.585 10 35.585 10zM40.32 10.854c3.508 4.177.585 6.829.585 6.829-2.883-3.737-.584-6.83-.584-6.83zM44.255 17.683c1.444 4.58-1.631 5.122-1.631 5.122-1.94-4.063 1.631-5.122 1.631-5.122zM42.985 27.927c3.353-.413 2.393-4.268 2.393-4.268-3.121.763-2.393 4.268-2.393 4.268z" />
                <path d="M40.317 33.902c.538-4.718 4.32-4.255 4.32-4.255.151 3.076-4.32 4.255-4.32 4.255zM37.723 40.635c-3.625 2.56-5.188-.864-5.188-.864 2.115-2.087 5.188.864 5.188.864z" />
                <path d="M35.13 42.383c-2.33 2.496-6.054-.935-6.054-.935 1.004-2.044 6.053.935 6.053.935zM27.362 41.585s2.694 1.022 2.575 3.415c0 0-2.818-1.145-2.575-3.415zM7.459 36.014s2.987-1.604 6.053 1.577c.002 0-4.09 2.056-6.053-1.577zM21.041 40.732a.252.252 0 00.232-.157.26.26 0 00-.132-.339C13.694 37 9.355 32.883 8.242 27.998c-.738-3.242.13-6.221.99-8.152.934-2.097 2.053-3.432 2.064-3.444a.263.263 0 00-.027-.364.25.25 0 00-.357.028c-.048.056-1.175 1.405-2.14 3.567-.892 2-1.792 5.098-1.02 8.48 1.15 5.056 5.59 9.292 13.191 12.597.03.014.065.022.098.022zM12.05 15.976s-1.53-4.41 2.735-5.976c0 0 2.106 2.9-2.736 5.976zM8.6 17.683s-2.922-2.652.585-6.83c0 0 2.298 3.093-.584 6.83zM6.882 22.805s-3.075-.543-1.632-5.122c0 0 3.571 1.06 1.632 5.122zM4.128 23.659s-.962 3.855 2.392 4.268c0 0 .728-3.505-2.392-4.268z" />
                <path d="M4.868 29.646s3.783-.46 4.32 4.256c0 .002-4.47-1.177-4.32-4.256zM16.97 39.77s-1.565 3.426-5.188.865c0 .002 3.073-2.951 5.188-.865z" />
                <path d="M20.43 41.45s-3.725 3.428-6.054.933c0-.002 5.05-2.979 6.053-.934zM19.568 45c-.119-2.393 2.576-3.415 2.576-3.415.242 2.27-2.576 3.415-2.576 3.415z" />
                <g fillRule="nonzero">
                  <path d="M25.056 25.973l3.015 2.272 1.15-9.992-9.288 3.86.924.696a1.287 1.287 0 01-1.548 2.055l-2.63-1.981a1.318 1.318 0 01-.533-.609 1.278 1.278 0 01-.086-.737 1.281 1.281 0 01.874-1.002l13.293-5.523c.45-.188.946-.107 1.31.168.365.273.578.728.522 1.212l-1.658 14.411a1.284 1.284 0 01-1.442 1.127 1.318 1.318 0 01-.731-.345l-4.721-3.557-1.384 1.836a1.31 1.31 0 01-2.091-1.576l4.316-5.728a1.31 1.31 0 112.091 1.576l-1.383 1.837zm-5.043 6.691l-.649.861a1.31 1.31 0 01-2.091-1.576l.649-.86a1.31 1.31 0 112.091 1.575z" />
                </g>
              </g>
            </g>
          </svg>
          <div id="achievement-template-20" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">Lifer</h4>
            <p>Earned if you have a lifetime subscription to Laracasts.</p>
          </div>
        </li>
        <li
          className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white transition duration-200 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-primary-200 focus:bg-primary-500 sm:w-8 sm:h-8 lg:w-10 lg:h-10 sm:rounded-lg lg:rounded-xl"
          title="Earned if you share a link to Laracasts on social media. Please email support@laracasts.com with your username and post URL to be awarded this badge."
        >
          <svg width={30} height={30} viewBox="0 0 50 50">
            <g fill="none" fillRule="evenodd">
              <circle
                className="tw-fill-current tw-transition-all"
                cx={25}
                cy={25}
                r={25}
              />
              <g
                fill="#FFF"
                fillRule="nonzero"
                className="achievement-badge-icon"
              >
                <path d="M25.502 30.965c1.452 0 2.693-.489 3.727-1.466 1.033-.976 1.55-2.152 1.55-3.524v-7.984c0-1.373-.517-2.548-1.55-3.525C28.195 13.49 26.954 13 25.502 13c-1.45 0-2.693.489-3.726 1.466s-1.55 2.152-1.55 3.525v7.984c0 1.372.517 2.548 1.55 3.524 1.033.977 2.275 1.466 3.726 1.466z" />
                <path d="M34.686 23.277a1.042 1.042 0 00-.742-.296c-.285 0-.533.099-.742.296a.935.935 0 00-.313.702v1.996c0 1.923-.723 3.569-2.168 4.936-1.445 1.367-3.185 2.05-5.219 2.05-2.033 0-3.773-.683-5.218-2.05-1.446-1.367-2.168-3.013-2.168-4.936v-1.996a.934.934 0 00-.314-.702 1.043 1.043 0 00-.742-.296c-.286 0-.533.099-.742.296a.934.934 0 00-.313.702v1.996c0 2.298.81 4.296 2.432 5.996 1.621 1.7 3.625 2.674 6.01 2.924v2.059h-4.22c-.287 0-.534.099-.743.296a.934.934 0 00-.313.702c0 .27.104.504.313.702.209.197.456.296.742.296h10.552c.286 0 .534-.099.742-.296a.934.934 0 00.314-.702.934.934 0 00-.314-.702 1.043 1.043 0 00-.742-.296h-4.22v-2.06c2.385-.249 4.388-1.223 6.01-2.923 1.62-1.7 2.432-3.698 2.432-5.996v-1.996a.934.934 0 00-.314-.702z" />
              </g>
            </g>
          </svg>
          <div id="achievement-template-21" className="hidden">
            <h4 className="tw-font-bold tw-text-sm tw-mb-1">
              Laracasts Evangelist
            </h4>
            <p>
              Earned if you share a link to Laracasts on social media. Please
              email support@laracasts.com with your username and post URL to be
              awarded this badge.
            </p>
          </div>
        </li>
      </div>
    </div>
  );
}
