// src/app/thank-you/page.tsx

export default function ThankYouPage() {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Cảm ơn bạn đã đăng ký!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ sớm nhất có thể.
        </p>
        <a
          href="/" // Link back to the homepage
          className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
        >
          Quay lại Trang Chủ
        </a>
      </div>
    );
  }