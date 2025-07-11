"use client"

import React, { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.phone) newErrors.phone = "Field is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message) newErrors.message = "Message is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted!", formData)
    }
  }

  return (
    <div className="w-full flex flex-row h-[calc(100vh-20px)]">
      <div className="w-1/2 h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-[423px] h-[589px] bg-[#232325] justify-center items-center flex-col gap-3 rounded-2xl p-10">
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-full flex-col">
              <label className="mb-3" htmlFor="">
                Name
              </label>
              <input
                type="text"
                className="p-4 w-full h-[42px] rounded-2xl border-1"
                id={"name"}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="flex w-full flex-col">
              <label className="mb-3" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-4 w-full h-[42px] rounded-2xl border-1"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-3" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="p-4 w-full h-[42px] rounded-2xl border-1"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-3" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              className="p-4 w-full h-[42px] rounded-2xl border-1"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-3" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 w-full h-[103px] rounded-2xl border-1"
              id="message"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
          <div className="flex w-full justify-end">
            <button type="submit" className="w-[75px] h-[31px] text-[16px] rounded-2xl bg-white text-black">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-[url('/assets/background_contact_web.png')] bg-cover"></div>
    </div>
  )
}

export default ContactPage
