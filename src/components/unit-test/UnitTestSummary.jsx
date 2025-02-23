import React from "react";
import { Download } from "lucide-react";

const testResults = [
  { id: "1", file: "src/components/App.test.js", passed: 5, failed: 0 },
  { id: "2", file: "src/utils/helpers.test.js", passed: 3, failed: 1 },
  { id: "3", file: "src/hooks/useData.test.js", passed: 2, failed: 2 },
];

export default function UnitTestSummary() {
  const handleDownloadResults = () => {
    console.log("Download test results");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex justify-center items-center p-4">
      <div className="w-full max-w-md px-4 py-10 border border-white/10 backdrop-blur-md rounded-lg mt-20">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-white/10">
          <h2 className="text-lg sm:text-xl text-white font-thin tracking-wide">
            Unit Test Summary
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Table Container with horizontal scroll for small screens */}
          <div className="w-full overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-white/10">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-normal text-gray-400 whitespace-nowrap">
                        File
                      </th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-normal text-gray-400 whitespace-nowrap">
                        Passed
                      </th>
                      <th className="text-left py-3 px-4 text-xs sm:text-sm font-normal text-gray-400 whitespace-nowrap">
                        Failed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {testResults.map((result) => (
                      <tr key={result.id}>
                        <td className="py-3 px-4 text-xs sm:text-sm text-gray-300 font-extralight break-all sm:break-normal">
                          {result.file}
                        </td>
                        <td className="py-3 px-4 text-xs sm:text-sm text-emerald-400 font-extralight whitespace-nowrap">
                          {result.passed}
                        </td>
                        <td className="py-3 px-4 text-xs sm:text-sm text-red-400 font-extralight whitespace-nowrap">
                          {result.failed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Download Button - Full width on mobile, auto width on larger screens */}
          <button
            onClick={handleDownloadResults}
            className="mt-6 w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-md text-xs sm:text-sm font-extralight transition-colors duration-300"
          >
            <Download size={16} className="text-violet-400" />
            Download Test Results
          </button>
        </div>
      </div>
    </div>
  );
}
