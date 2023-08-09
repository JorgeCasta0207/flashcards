import './NavBar.css'
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    
<nav className="bg-primary">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
    <img className="h-10 w-auto" src={logo} alt="Quiz Lit"/>


      <div className="flex flex-1 items-center justify-self-center">
    
      <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
      <input placeholder="Type here to study any set..." className="icon w-1/2 focus:outline-none rounded-full p-1 pl-[30px] placeholder-secondary text-secondary bg-accent shadow-[inset_0_2px_4.5px_rgba(0,0,0,0.6)] truncate ..."/>

           
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-secondary p-2 text-black font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px] transition-all duration-150">
          <h1>Login / Signup</h1>
        </button>
    {/*profile pic for future use
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

        </div>
        */}
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
 { /* mobile here */ }
    
  </div>
</nav>
  )
}

export default NavBar