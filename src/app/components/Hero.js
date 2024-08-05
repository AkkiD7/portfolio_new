"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Col, Row } from "antd";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Frontend Developer.", "Software Developer."],
      typeSpeed: 40,
      loop: true,
    });

    AOS.init();

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="hero">
        <div className="mainDiv bg-[#f9f9f9] mt-1">
          <div className="mainDivChild">
            <Row gutter={16}>
              <Col
                xs={24}
                sm={8}
                className="display flex justify-center items-center order-1 sm:order-2"
              >
                <div
                  className="hero-right bg-[url('/images/pic-logo.png')] bg-cover bg-no-repeat border-2 border-[#2d2e32] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] h-[25rem] w-[25rem] animate-morph"
                  data-aos="slide-left"
                  data-aos-duration="1000"
                ></div>
              </Col>
              <Col
                xs={24}
                sm={16}
                className="text-center order-2 sm:order-1"
                data-aos="slide-right"
                data-aos-duration="1000"
              >
                <div className="text-6xl leading-normal">
                  Hi, My name is <span className="text-[#147efb]">Akshay</span>
                  <div>and I am a passionate</div>
                  <span className="job-title text-[#147efb]" ref={el}></span>
                </div>
                <div className="buttons mt-10 flex gap-3 justify-center">
                  <button className="px-5 text-xl font-bold text-center border-2 border-black rounded-full bg-transparent text-black hover:bg-[#147efb] hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
                    Download Resume
                  </button>
                  <Link href="https://github.com/akkid7">
                    <img
                      src="/images/github.png"
                      width={64}
                      height={64}
                      alt="GitHub"
                      className="tech-stack-img transform transition-transform duration-300 ease-in-out hover:animate-flipHorizontal"
                    />
                  </Link>
                  <Link href="https://linkedin.com/in/akkid7">
                    <img
                      src="/images/linkdein.png"
                      width={64}
                      height={64}
                      alt="LinkedIn"
                      className="tech-stack-img transform transition-transform duration-300 ease-in-out hover:animate-flipHorizontal"
                    />
                  </Link>
                </div>

                <div className="tech-stack mt-10 mb-10 flex flex-wrap gap-3 items-center justify-center">
                  <div className="text-2xl font-bold">Tech Stack |</div>
                  <div className="flex flex-wrap gap-5">
                    <div className="space-y-2">
                      <img
                        src="https://skillicons.dev/icons?i=html,css"
                        alt="HTML & CSS"
                        className="tech-stack-img hover:scale-110 transform duration-300 ease-in-out"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=js,react"
                        alt="JavaScript & React"
                        className="tech-stack-img hover:scale-110 transform duration-300 ease-in-out"
                      />
                    </div>
                    <div className="space-y-2">
                      <img
                        src="https://skillicons.dev/icons?i=nodejs,express"
                        alt="Node.js & Express"
                        className="tech-stack-img hover:scale-110 transform duration-300 ease-in-out"
                      />
                      <img
                        src="https://skillicons.dev/icons?i=nextjs,mongodb"
                        alt="Next.js & MongoDB"
                        className="tech-stack-img hover:scale-110 transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
