import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Page: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [manualCode, setManualCode] = useState<boolean>(false);
  const [manualInput, setManualInput] = useState<string>('');

  const handleScan: QrReader.props['onScan'] = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError: QrReader.props['onError'] = (err) => {
    console.error(err);
  };

  const handleManualCodeSubmit = () => {
    if (manualInput.trim() !== '') {
      setResult(manualInput.trim());
    }
  };

  const handleManualClick = () => {
    setManualCode(prevState => !prevState);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          {manualCode ? (
            <button
              onClick={handleManualClick}
              className="px-4 py-2 bg-custom-green text-white rounded-md"
            >
              Scan QR
            </button>
          ) : (
            <button
              onClick={handleManualClick}
              className="px-4 py-2 bg-custom-green text-white rounded-md"
            >
              Enter Code
            </button>
          )}
        </div>
        <div className="w-[80vw] max-w-md">
          {manualCode ? (
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="Enter QR code manually"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
              />
              <button
                onClick={handleManualCodeSubmit}
                className="px-4 py-2 bg-custom-green text-white rounded-md"
              >
                Submit
              </button>
            </div>
          ) : (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          )}
        </div>
        {result && <p className="mt-4">Result: {result}</p>}
      </div>
    </div>
  );
};

export default Page;
