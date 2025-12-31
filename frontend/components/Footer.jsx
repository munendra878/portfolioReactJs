export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">

        {/* Name & Role */}
        <h3 className="text-xl font-semibold text-white">
          Munendrasinh Radheshyam Baghel
        </h3>
        <p className="text-sm text-gray-400">
          PHP Developer • Full-Stack Developer • MCA Student • .NET Developer
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
          <span>📍 Mehsana, Gujarat, India</span>
          <span>📧 mohitbaghel086@gmail.com</span>
          <span>📱 +91 8000819488</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Munendrasinh Baghel — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
