import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disables image optimization, as it is not supported with static exports.
   * The GitHub Action (`configure-pages`) also does this, but it's good practice to have it here.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
