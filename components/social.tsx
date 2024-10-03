"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub />, path: "https://github.com/vantaibui" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tai-bui-37b815202/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/bui.vantai.311" },
];

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link className={iconStyles} key={index} href={social.path}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
