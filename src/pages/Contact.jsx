import Layout from "../components/layout/Layout";
import Form from "../components/Form";
import { CiPhone, CiMail } from "react-icons/ci";

export default function Contact() {
  const Contacts = [
    { icon: <CiPhone size={25} />, title: "070-000 00 00" },
    { icon: <CiMail size={25} />, title: "john.doe@gmail.com" },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-2 h-[700px] rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-8">
          <h1 className="text-4xl font-semibold">Get in Touch</h1>
          <p className="mt-2 tracking-wide leading-6 font-light">
            We love to hear from our guests and future cruisers! Whether you
            have questions about our cruises, need assistance with booking, or
            simply want to share your experiences, our dedicated team is here to
            help.
          </p>
          <h2 className="mt-4 text-lg font-medium">Contact information</h2>
          <ul className="mt-4">
            {Contacts.map((contact, index) => (
              <li className="flex items-center gap-2 font-light" key={index}>
                {contact.icon}
                {contact.title}
              </li>
            ))}
            <li className="flex items-center mt-8">
              <span>Office Hours:</span>
              <span className="font-light italic ml-2">
                Monday-Friday: 9:00 AM to 5:00 PM
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 p-8">
          <Form />
        </div>
      </div>
    </Layout>
  );
}
