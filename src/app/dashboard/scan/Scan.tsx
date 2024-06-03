import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const Page: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [manualCode, setManualCode] = useState<boolean>(false);
  const [manualInput, setManualInput] = useState<string>('');

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleManualCodeSubmit = () => {
    if (manualInput.trim() !== '') {
      setResult(manualInput.trim());
    }
  };

  const handleManualClick = () => {
    setManualCode((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 w-full max-w-md">
        <div className="flex space-x-4">
          <button
            onClick={handleManualClick}
            className="px-4 py-2 bg-custom-green text-white rounded-md"
          >
            {manualCode ? 'Scan QR' : 'Enter Code'}
          </button>
        </div>
        <div className="w-full">
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
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          )}
        </div>
        {result && <p className="mt-4 text-center text-custom-dark-green font-bold">Result: {result}</p>}
      </div>
    </div>
  );
};

export default Page;
