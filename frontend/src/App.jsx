import { useState } from "react";
import axios from "axios"; // Use axios via npm/yarn or import directly

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null); // Change to null for better conditional rendering

  function handleSubmit(e) {
    e.preventDefault(); // Prevents page reload
    axios.post('http://localhost:3000/api/short', { originalUrl })
      .then((res) => {
        // Assuming the backend response contains shortUrl and qrCodeImg
        setShortUrl(res.data); // Expecting res.data to be an object with shortUrl and qrCodeImg
        console.log("API RESPONSE", res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            type="text"
            name="originalUrl"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2"
            placeholder="Enter URL to shorten"
          />
          <button
            className="bg-blue-600 rounded-md text-white py-2 font-semibold hover:bg-blue-700"
            type="submit"
          >
            Shorten
          </button>
        </form>

        {/* Conditional rendering for shortUrl */}
        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">Shortened URL:</p>
            <a
              href={shortUrl.shortUrl} // Updated to shortUrl.shortUrl
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2"
              target="_blank"
            >
              {shortUrl.shortUrl}
            </a>
            
            {/* Conditional rendering for QR code if it exists */}
            {shortUrl.qrCodeImg && (
              <div className="mt-4">
                <img src={shortUrl.qrCodeImg} alt="Generated QR Code" className="mx-auto" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
