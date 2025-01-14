const App = () => {
  return (
    <div className="mx-auto bg-slate-900 max-w-[1300px]">
      
      {/* Navbar */}
      <div className="bg-slate-950 py-4 shadow-md">
        <div className="flex flex-wrap justify-between items-center px-8">
          {/* Left Side */}
          <div className="text-white text-lg font-semibold py-2">
            The Trusted Prop
          </div>
          
          {/* Middle Content */}
          <div className="text-white text-lg font-medium space-x-10 hidden md:flex">
            <span>PropFirms</span>
            <span>Tools</span>
            <span>Blogs</span>
            <span>Compare Firms</span>
          </div>
          
          {/* Right Side (Login) */}
          <div className="text-white py-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-md">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="bg-slate-950 m-5">
        <div className="flex items-center justify-center w-full h-[300px] rounded-lg shadow-md">
          <div className="text-center">
            <p className="md:text-4xl text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
              <span>Welcome Back,</span>
            </p>
            <h1 className="text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 mt-2">
              Dilip's Dashboard
            </h1>
          </div>
        </div>

        <div className="bg-slate-950 md:px-4 mx-auto rounded-2xl py-14 border md:flex justify-between">
          <div className="flex flex-col justify-between px-8 md:px-32 ml-0">
            <p className="ml-0 text-xl font-semibold text-gray-500 mt-3">
              TrustPoints <span className="ml-28 bg-gradient-to-r from-slate-700 px-3 py-1 rounded-full">History</span>
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white">4,287</h1>
            <p className="text-sky-800 font-bold text-lg">
              250 Points More To Next Tier
              <progress value={0.5} />
            </p>
            <button className="w-44 py-2 px-4 font-normal bg-gradient-to-r from-indigo-500 rounded-2xl text-yellow-100">
              Claim 5k Account
            </button>
          </div>

          <div className="text-gray-400 px-10 bg-slate-900 rounded-3xl">
            <h1 className="font-semibold text-slate-500 text-2xl">Redeem Points Level</h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-24">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">5k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">5000</h1>
                    <p>Points</p>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">10k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">10,0000</h1>
                    <p>Points</p>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">25k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">20,000</h1>
                    <p>Points</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">50k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">40,000</h1>
                    <p>Points</p>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">100k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">60,000</h1>
                    <p>Points</p>
                  </div>
                </div>
                <div className="flex justify-between py-4">
                  <div>
                    <h1 className="font-bold text-xl text-white">200k</h1>
                    <p>Account</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-white">80,000</h1>
                    <p>Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="md:grid-cols-3 grid mt-5 justify-between gap-10">
          <div className="w-full md:w-[400px] h-[200px] bg-slate-900 rounded-lg shadow-lg p-6 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-lg text-slate-500 font-semibold">Wallet Balance</h2>
              <p className="text-6xl text-slate-200 font-bold mt-2">$484</p>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 text-xl px-2 rounded">
              Withdraw Balance
            </button>
          </div>

          <div className="w-full md:w-[400px] h-[200px] bg-slate-900 rounded-lg shadow-lg p-6 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-lg font-semibold text-slate-500">Your Favourite Firm</h2>
              <p className="text-4xl text-slate-200 font-bold mt-2">Funding Pips</p>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-sm text-white font-semibold py-1 px-2 rounded">
              Change Firm
            </button>
          </div>

          <div className="w-full md:w-[400px] h-[200px] bg-slate-900 rounded-lg shadow-lg p-6 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-lg font-semibold text-slate-500">Your Reviews</h2>
              <p className="text-6xl font-bold mt-2 text-slate-200">29</p>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-xs text-white font-semibold py-1 px-2 rounded">
              Add a Review
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="text-white">
          <div className="p-4">
            {/* Header Row */}
            <div className="grid grid-cols-10 gap-2 bg-blue-500 text-white font-bold py-2">
              <div>PropFirm Name</div>
              <div>Challenge Type</div>
              <div>Challenge Size</div>
              <div>Prize Before</div>
              <div>Prize After</div>
              <div>Points</div>
              <div>Coupon</div>
              <div>Discount</div>
              <div>Status</div>
              <div>Upload Invoice</div>
            </div>

            {/* Data Row */}
            {[...Array(7)].map((_, index) => (
              <div key={index}>
                <div className="grid grid-cols-10 gap-2 py-2">
                  <div>Alpha Trading</div>
                  <div>Three Phase Challenge</div>
                  <div>1,00,000</div>
                  <div>100</div>
                  <div>94</div>
                  <div>54</div>
                  <div>THE TRUSTED</div>
                  <div>43$</div>
                  <div>Pending</div>
                  <div>Upload</div>
                </div>
                <hr className="border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
