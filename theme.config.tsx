import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src="https://grav.wtf/chromaroleicondiscord.png" alt="logo" width={32} height={32} />,
  project: {
    link: "https://github.com/Gravxd",
  },
  chat: {
    link: "https://discord.gg/chromalabs",
  },
  docsRepositoryBase: "https://github.com/Gravxd/docs",
  footer: {
    content: "",
  },
};

export default config;