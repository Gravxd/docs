import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grav.wtf",
      },
    ],
  },
});