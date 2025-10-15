"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "8801612793448";
  const message = encodeURIComponent("হ্যালো 👋, আমি জানতে চাচ্ছি...");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-2xl p-4 w-72 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">Chat with us 💬</h4>
              <button onClick={() => setOpen(false)}>
                <FaTimes className="w-5 h-5 text-gray-500 hover:text-gray-700 transition" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              আমাদের টিম অনলাইনে আছে। সরাসরি WhatsApp এ মেসেজ করুন 👇
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full text-center block py-2 rounded-lg hover:bg-green-600 transition"
            >
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp className="w-6 h-6" />

        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping"></span>
      </motion.button>
    </div>
  );
};

export default WhatsAppChat;
