import React from "react"

const linkIcon = (
  <svg className="w-4 inline-block ml-1 align-baseline" viewBox="2 2 20 20">
    <path
      className="fill-current"
      d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
    ></path>
  </svg>
)

const Experience: React.FC<{mainTitle?:string, subTitle?: string, location?: string, from?:string,to?:string,link?:string,tags?:string[]}> = ({
  mainTitle = "",
  subTitle = "",
  location,
  from,
  to,
  link,
  children,
  tags = [],
}) => {
  const timeTitle = from
    ? to
      ? from === to
        ? from
        : `${from} - ${to}`
      : `${from} - Present`
    : null

  return (
    <div className="pt-3">
      <div className="text-md font-bold text-gray-700">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {mainTitle} {linkIcon}
          </a>
        ) : (
          mainTitle
        )}
      </div>
      <div className="text-gray-500 tracking-tight">
        {location}
        {location && timeTitle && " · "}
        {timeTitle}
        {subTitle && timeTitle && " | "}
        {subTitle}
      </div>
      <div className="">{children}</div>
      {tags.length > 0 && (
        <div className="mt-2 mb-1 flex items-center flex-wrap">
          {tags.map(tag => (
            <div
              key={tag}
              className="text-xs text-gray-700 mr-2 my-2 py-2 px-3 bg-gray-100 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Experience
