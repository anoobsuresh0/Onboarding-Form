// import React from 'react'

const MainPage = () => {
  return (
    <div className="grid grid-cols-6 h-full ">
      <div className="bg-white "></div>

      <div className=" col-span-4 mx-7  mt-[100px] ">
        <div>
          <h1>Basic Info</h1>
          <h4>
            Tell us a bit about yourself to get started with you new journey
          </h4>
        </div>

        <form>
          <div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              className="input-textBox"
            />
          </div>

          <div>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              className="input-textBox"
            />
          </div>
          {/* <label htmlFor="lname">Last Name</label> */}

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email id"
              className="input-textBox"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone No"
              pattern="[0-9]*"
              inputMode="numeric"
              className="input-textBox"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Resume:
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf, .doc, .docx"
              className="appearance-none border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="signature"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Signature:
            </label>
            <input
              type="file"
              id="signature"
              name="signature"
              accept=".png, .jpg, .jpeg"
              className="appearance-none border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="photograph"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Upload Photograph:
            </label>
            <input
              type="file"
              id="photograph"
              name="photograph"
              accept=".png, .jpg, .jpeg"
              className="appearance-none border border-gray-300 p-2 rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-white "></div>
    </div>
  );
};

export default MainPage;
