import { Settings, Moon, Users, LogOut } from "lucide-react";

const UserDropdown = (isOpen,onClose) => {
    if (!isOpen ) return null;
  return (
    <div className="absolute -right-6 mt-2 w-80 bg-[#0A0A0A] rounded-lg border border-white/10 backdrop-blur-md py-1 z-10">
      <div className="flex flex-row px-4 py-2 border-b border-white/10">
        <div className="w-20 h-20 rounded-none bg-gradient-to-r from-purple-400 to-yellow-300 text-3xl font-thin text-blue-800 flex items-center justify-center">
          JD
        </div>
        <div className="flex flex-col p-4">
          <div className="font-thin tracking-wide text-xl text-white">
            John Doe
          </div>
          <div className="text-sm text-gray-400 font-extralight">
            john.doe@example.com
          </div>
        </div>
      </div>
      
      <button
      onClick={() => {        
        onClose();
      }}
        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-400 hover:bg-white/5 transition-colors duration-300 font-extralight"
      >
        <Settings size={18} className="text-violet-400" />
        Account settings
      </button>
      
      <button
      onClick={() => {       
        onClose();
      }}
        className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-400 hover:bg-white/5 transition-colors duration-300 font-extralight"
      >
        <Moon size={18} className="text-violet-400" />
        Theme
      </button>
      
      <div className="border-t border-white/10">
        <button
        onClick={() => {            
            onClose();
          }}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-400 hover:bg-white/5 transition-colors duration-300 font-extralight"
        >
          <Users size={18} className="text-violet-400" />
          Switch account
        </button>
        
        <button
        onClick={() => {            
            onClose();
          }}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-400 hover:bg-white/5 transition-colors duration-300 font-extralight"
        >
          <LogOut size={18} className="text-violet-400" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;