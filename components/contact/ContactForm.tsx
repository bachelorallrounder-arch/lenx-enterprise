"use client";

import { Upload } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#071B4D]">
          Request a Quote
        </h2>

        <p className="mt-3 text-slate-600">
          Submit your component sourcing, PCB, or project
          requirements and our team will get back to you.
        </p>
      </div>

      <form
        className="space-y-6"
        encType="multipart/form-data"
      >
        {/* Contact Information */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name *
            </label>

            <input
              type="text"
              required
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company Name
            </label>

            <input
              type="text"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address *
            </label>

            <input
              type="email"
              required
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number *
            </label>

            <input
              type="tel"
              required
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>
        </div>

        {/* Enquiry */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Enquiry Type *
          </label>

          <select
            required
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              outline-none
              transition
              focus:border-[#0066FF]
            "
          >
            <option value="">
              Select Enquiry Type
            </option>

            <option>
              Product Sourcing
            </option>

            <option>
              PCB Manufacturing
            </option>

            <option>
              PCB Assembly
            </option>

            <option>
              Prototype Validation
            </option>

            <option>
              Hard-to-Find Components
            </option>

            <option>
              General Enquiry
            </option>
          </select>
        </div>

        {/* Product Details */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Part Number(s)
            </label>

            <input
              type="text"
              placeholder="e.g. TPS650352-Q1"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Manufacturer
            </label>

            <input
              type="text"
              placeholder="e.g. Texas Instruments"
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                outline-none
                transition
                focus:border-[#0066FF]
              "
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Required Quantity
          </label>

          <input
            type="number"
            min="1"
            placeholder="Enter quantity"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              outline-none
              transition
              focus:border-[#0066FF]
            "
          />
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Project Details / Message *
          </label>

          <textarea
            required
            rows={6}
            placeholder="Tell us about your requirements..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              transition
              focus:border-[#0066FF]
            "
          />
        </div>

        {/* BOM Upload */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Upload BOM / RFQ File (Optional)
          </label>

          <label
            className="
              flex
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-2xl
              border-2
              border-dashed
              border-slate-300
              p-8
              transition
              hover:border-[#0066FF]
            "
          >
            <Upload
              size={32}
              className="text-[#0066FF]"
            />

            <p className="mt-4 font-medium text-slate-700">
              Upload BOM, Datasheet, RFQ or Project Files
            </p>

            <p className="mt-1 text-sm text-slate-500">
              PDF, XLSX, XLS, CSV, ZIP
            </p>

            <input
              type="file"
              className="hidden"
              accept="
                .pdf,
                .xlsx,
                .xls,
                .csv,
                .zip
              "
            />
          </label>
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-[#0066FF]
            px-6
            py-4
            text-base
            font-semibold
            text-white
            transition
            hover:bg-[#0052CC]
          "
        >
          Submit RFQ
        </button>
      </form>
    </div>
  );
}