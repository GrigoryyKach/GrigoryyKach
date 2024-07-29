import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/GrigoryyKach',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/hryhorii-kachurovskyi/',
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials;
