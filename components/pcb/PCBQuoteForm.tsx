"use client";

import { useState } from "react";

import Container from "@/components/shared/Container";

export default function PCBQuoteForm() {
  const [assembly, setAssembly] = useState("yes");
  const [sourcing, setSourcing] = useState("yes");

  return (
    <section
      id="pcb-quote"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            PCB Quote Request
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            Submit Your PCB Requirements
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Share your PCB specifications, BOM and project details.
            Our team will review your requirements and provide a
            customized quotation.
          </p>
        </div>

        <div
          className="
            mx-auto
            mt-16
            max-w-6xl
            rounded-[40px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-xl
            lg:p-12
          "
        >
          <form className="space-y-12">
            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Contact Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  type="text"
                  placeholder="Company Name *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            {/* PCB Specs */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                PCB Specifications
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <select className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]">
                  <option>PCB Type</option>
                  <option>Single Layer PCB</option>
                  <option>Double Layer PCB</option>
                  <option>Multi Layer PCB</option>
                </select>

                <input
                  type="number"
                  placeholder="Quantity"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  type="text"
                  placeholder="Board Size (mm)"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />

                <input
                  type="number"
                  placeholder="Number of Layers"
                  className="h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Additional Requirements
              </h3>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-4 font-medium text-slate-700">
                    PCB Assembly Required?
                  </p>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setAssembly("yes")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${
                        assembly === "yes"
                          ? "bg-[#0066FF] text-white"
                          : "border border-slate-300"
                      }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setAssembly("no")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${
                        assembly === "no"
                          ? "bg-[#0066FF] text-white"
                          : "border border-slate-300"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <p className="mb-4 font-medium text-slate-700">
                    Component Sourcing Required?
                  </p>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSourcing("yes")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${
                        sourcing === "yes"
                          ? "bg-[#0066FF] text-white"
                          : "border border-slate-300"
                      }`}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setSourcing("no")}
                      className={`rounded-xl px-6 py-3 font-medium transition ${
                        sourcing === "no"
                          ? "bg-[#0066FF] text-white"
                          : "border border-slate-300"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Files */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Upload Files
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="file"
                  className="rounded-xl border border-slate-300 p-4"
                />

                <input
                  type="file"
                  className="rounded-xl border border-slate-300 p-4"
                />
              </div>

              <div className="mt-3 text-sm text-slate-500">
                Upload Gerber Files, BOM Files, Drawings or Other Documents.
              </div>
            </div>

            {/* Notes */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#071B4D]">
                Project Requirements
              </h3>

              <textarea
                rows={6}
                placeholder="Describe your PCB project requirements..."
                className="w-full rounded-2xl border border-slate-300 p-5 outline-none focus:border-[#0066FF]"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="
                  rounded-xl
                  bg-[#0066FF]
                  px-10
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0052cc]
                "
              >
                Request PCB Quote
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}