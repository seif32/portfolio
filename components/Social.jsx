import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/seif32" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/seif-el-din-mohamed-19b83a327/",
  },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link className={iconStyles} key={index} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
