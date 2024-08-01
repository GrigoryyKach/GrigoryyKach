"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    decs: "+380 95 863 21 99",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    decs: "hryhorii.k.dev@gmail.com",
  },
  {
    icon: <FaTelegram />,
    title: "Telegram",
    decs: "@hrigoriikachurovskyi",
  },
]

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [serviceLabel, setServiceLabel] = useState("Select a service");
  const toast = useToast().toast;
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (value, label) => {
    setForm({ ...form, service: value });
    setServiceLabel(label);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_297fw79',
      'template_wqqjxfn',
      {
        from_name: `${form.firstname} ${form.lastname}`,
        to_name: 'Hryhorii',
        from_email: form.email,
        to_email: 'hryhorii.k.dev@gmail.com',
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
      'eIEV7Y8QgnhBxkwvt'
    )
      .then(() => {
        setIsLoading(false);
        toast({
          title: 'Thank you!',
          description: 'I will get back to you as soon as possible.',
        });

        setForm({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setServiceLabel("Select a service");
      }, (error) => {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: 'Oops...',
          description: 'Something went wrong. Try again later!',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.log(error);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together!</h3>
              <p className="text-white/60">
                If you are ready to offer me a job - fill out the form and click <span className="text-accent">Send Message</span> button.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={form.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={form.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {/* select */}
              <Select
                value={form.service}
                onValueChange={(value, label) => handleSelectChange(value, label)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={serviceLabel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="html">HTML/CSS/JS Layout</SelectItem>
                    <SelectItem value="react/next">React.js/Next.js Development</SelectItem>
                    <SelectItem value="vue/nuxt">Vue.js/Nuxt.js Development</SelectItem>
                    <SelectItem value="react native">React Native Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your message here."
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              {/* btn */}
              <Button
                disabled={isLoading}
                size="md"
                className="max-w-40 cursor-pointer"
              >
                {isLoading
                  ? <Loader2 className="h-4 w-4 animate-spin" />
                  : "Send message"
                }
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.decs}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
