/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import createNextIntlPlugin from 'next-intl/plugin';

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = {};

export default withNextIntl(withPWA(nextConfig));
