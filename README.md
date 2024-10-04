<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener</title>
</head>
<body>

<h1>URL Shortener</h1>

<p>A simple URL shortener built using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>React.js</strong>. This project allows users to shorten long URLs and provides a QR code for easy access.</p>

<h2>Features</h2>
<ul>
    <li><strong>URL Shortening</strong>: Shorten any lengthy URL.</li>
    <li><strong>QR Code Generation</strong>: Automatically generate a QR code for the shortened URL.</li>
    <li><strong>Nano ID</strong>: For generating unique, secure shortened URLs.</li>
    <li><strong>Frontend</strong>: Built using <strong>React.js</strong>.</li>
    <li><strong>Backend</strong>: API built using <strong>Express.js</strong>.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Frontend</strong>: React.js, Tailwind CSS</li>
    <li><strong>Backend</strong>: Node.js, Express.js</li>
    <li><strong>Database</strong>: MongoDB (optional for storing URLs)</li>
    <li><strong>QR Code Generation</strong>: Using the <code>qrcode</code> package</li>
    <li><strong>Unique IDs</strong>: Using the <code>nanoid</code> package</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/khushalRathi-DEV/URL-SHORTNER.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd URL-SHORTNER</code></pre>
    </li>
    <li>Install the dependencies for both the backend and frontend:
        <ul>
            <li><strong>Backend</strong>:
                <pre><code>cd server
npm install</code></pre>
            </li>
            <li><strong>Frontend</strong>:
                <pre><code>cd ../client
npm install</code></pre>
            </li>
        </ul>
    </li>
    <li>Create a <code>.env</code> file in the root of the <strong>server</strong> directory and set the following variables:
        <pre><code>PORT=5000
MONGO_URI=&lt;your-mongodb-connection-string&gt;</code></pre>
    </li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Start the <strong>backend</strong> server:
        <pre><code>cd server
npm start</code></pre>
    </li>
    <li>Start the <strong>frontend</strong> React app:
        <pre><code>cd ../client
npm start</code></pre>
    </li>
    <li>Access the app on <code>http://localhost:3000</code>.</li>
</ol>

<h2>API Endpoints</h2>

<h3>POST /api/url/shorten</h3>

<p>Shortens a given URL.</p>

<p><strong>Request:</strong></p>
<pre><code>{
  "longUrl": "https://example.com/very-long-url"
}</code></pre>

<p><strong>Response:</strong></p>
<pre><code>{
  "shortUrl": "http://localhost:5000/&lt;nanoid&gt;",
  "qrCode": "&lt;base64-encoded-qr-code&gt;"
}</code></pre>

<h2>Future Enhancements</h2>
<ul>
    <li>User authentication for personalized URL management.</li>
    <li>URL analytics to track the number of visits.</li>
    <li>Custom URL alias support.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more information.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Feel free to open a pull request or submit issues to help improve this project.</p>

<hr>

<h3>Author</h3>
<p><a href="mailto:khushalrathi200416@gmail.com">Khushal Rathi</a></p>

</body>
</html>
