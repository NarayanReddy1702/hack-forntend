import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { MdErrorOutline } from "react-icons/md";
import Loader from "../components/Loader";

const ReportAProblem = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const navigate = useNavigate();
  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dquhi2lbk"); // change this
    data.append("cloud_name", "dquhi2lbk"); // change this

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dquhi2lbk/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const file = await res.json();
      console.log(file);

      setUrl(file.secure_url);
      console.log("Uploaded:", file.secure_url);
      if (file.secure_url != "") {
        setIsUploaded(true);
        toast("Report Submited", {
          icon: <TiTick />,
          style: {
            color: "white",
            backgroundColor: "green",
          },
        });
      } else {
        toast("Error", {
          icon: <MdErrorOutline />,
          style: {
            color: "white",
            backgroundColor: "red",
          },
        });
      }
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="w-full lg:min-h-screen bg-black flex flex-col items-center justify-center py-5 px-2">
      <h1 className="text-white font-semibold text-3xl mb-5">
        Report A <span className="text-blue-600">Problem</span>
      </h1>
      <div className="max-w-xs lg:max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <Toaster />
        <div className="flex flex-col gap-4">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="file:py-2 file:px-4 file:border border-1 border-blue-600 px-10 py-5 rounded-xl file:rounded file:text-sm file:cursor-pointer file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <div className="flex flex-col">
            <label htmlFor="reportProblem" className="mb-2">
              What's the Problem ?
            </label>
            <input
              className="border-1 border-blue-500 px-4 py-1 rounded-sm text-black placeholder:text-black "
              type="text"
              id="reportProblem"
              placeholder="Enter Your Problem "
            />
          </div>
          <button
            onClick={uploadImage}
            className="bg-blue-600 text-white py-2 px-4 cursor-pointer rounded hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
        </div>

        {url && (
          <div className="mt-6 text-center">
            <p className="font-medium mb-2 cursor-pointer">Uploaded Image:</p>
            <img
              src={url}
              alt="uploaded"
              className="w-48 h-auto rounded-lg border border-gray-200 shadow-sm mx-auto"
            />
          </div>
        )}
        <div className="flex w-full justify-center">
          {isUploaded && (
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Go To Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportAProblem;
