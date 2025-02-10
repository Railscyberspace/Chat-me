import React, { useState } from "react";

export default function PersonalBlog() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your appointment request has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-lg">Rails Abam</h1>
        <p className="text-2xl text-gray-700 mt-2">IAM Security Engineer</p>
        <div className="mt-4 text-gray-600">
          <p>Email: <a href="mailto:railsdevabam@gmail.com" className="text-indigo-500 hover:underline">railsdevabam@gmail.com</a></p>
          <p>Phone: <span className="font-medium">08157510843</span></p>
          <p>Location: Lagos, Nigeria</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/railsabam/" className="text-indigo-500 hover:underline">linkedin.com/in/railsabam</a></p>
        </div>
      </header>

      <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b-4 border-indigo-300 pb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Hi, I'm <span className="font-bold text-indigo-600">Rails Abam</span>, a seasoned IAM Security Engineer with a passion for designing and implementing secure, efficient identity and access management solutions. I have a proven track record in cloud identity migration, regulatory compliance, and zero-trust architecture, ensuring the highest levels of security for organizations.
        </p>
      </section>

      <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b-4 border-indigo-300 pb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-4 text-lg">
          <li>Okta: SAML, OAuth2, OIDC, RBAC, MFA, SSO</li>
          <li>Compliance: GDPR, HIPAA, PCI-DSS, SOX</li>
          <li>Microsoft Entra ID, SailPoint, NetIQ Access Manager</li>
          <li>Zero-trust architecture, API Security</li>
          <li>Bash, Python, PowerShell</li>
          <li>SOAP, SIEM/SOAR, ABAC</li>
          <li>Agile, Scrum, Strong communication</li>
          <li>Critical Thinking, Problem-Solving</li>
          <li>NIST SP 63A, ISO 27001</li>
          <li>Cloud Platforms: Azure, AWS, Google Cloud</li>
          <li>IAM Integration, CI/CD pipelines, Incident Response</li>
          <li>IAM Policy, Risk Assessments, Log Monitoring</li>
          <li>Team Collaboration, Customer Support</li>
        </ul>
      </section>

      <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b-4 border-indigo-300 pb-2">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>
            <strong>Microsoft Entra ID & Azure Integration</strong>: Integrated Azure B2B and B2C IAM solutions with Microsoft Entra ID for enhanced identity management. <a href="http://docs.google.com/document/d/1Z61T8dczNM5rqQnn-TWItCi3gaLxfe_Yl5axE8QxJwU/edit?usp=sharing" className="text-indigo-500 hover:underline">View Project</a>
          </li>
        </ul>
      </section>

      <section className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b-4 border-indigo-300 pb-2">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit Appointment Request
          </button>
        </form>
      </section>

      <footer className="text-center mt-12 text-gray-600">
        <p className="text-lg">Thank you for visiting my blog. Feel free to <a href="mailto:railsdevabam@gmail.com" className="text-indigo-500 hover:underline">reach out</a>!</p>
      </footer>
    </div>
  );
}
