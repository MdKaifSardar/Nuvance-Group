"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";

type CTA = { label: string; href: string };

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  imageSrc?: StaticImageData | string; // local import or remote URL
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function NuvanceHero({
  title = "Nuvance Group — Thoughtful Interiors",
  subtitle = "We craft warm, functional spaces — from residential to commercial. Modern design with lasting value.",
  ctaPrimary = { label: "Get a Consultation", href: "/contact" },
  ctaSecondary = { label: "View Portfolio", href: "/portfolio" },
  imageSrc = "/nuvance-hero.jpg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-32 top-0 w-[420px] h-[420px] md:w-[560px] md:h-[560px] bg-rose-50 rounded-full blur-3xl opacity-60 transform -rotate-12" />
      <div className="pointer-events-none absolute right-0 -bottom-32 w-[360px] h-[360px] bg-indigo-50 rounded-full blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <motion.div variants={fadeUp} className="md:col-span-7 lg:col-span-6">
            <p className="inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              Bespoke interior design
            </p>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              {title}
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl text-base sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-shadow focus:outline-none focus:ring-4 focus:ring-gray-200"
                aria-label={ctaPrimary.label}
              >
                {ctaPrimary.label}
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-800 bg-white shadow-sm"
                aria-label={ctaSecondary.label}
              >
                {ctaSecondary.label}
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 max-w-md">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 p-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-700">End-to-end service</div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 p-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-700">Experienced team</div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 p-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h4l3 8 4-16 3 8h4"
                    />
                  </svg>
                </div>
                <div className="text-sm text-gray-700">On-time delivery</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="md:col-span-5 lg:col-span-6 relative flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.98, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-lg rounded-3xl bg-white/70 p-4 shadow-2xl backdrop-blur-md ring-1 ring-gray-100"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={imageSrc}
                  alt="Interior preview"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>

              <motion.div
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute left-6 bottom-6 flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-md ring-1 ring-gray-100"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt="thumb"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Modern Living Room
                  </div>
                  <div className="text-xs text-gray-500">
                    3D layout & fit-out
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
