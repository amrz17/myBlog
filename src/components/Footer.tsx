import { socials } from "../const/index.ts";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-color3 text-white">
      <div className="flex flex-col lg:justify-between w-full gap-8 p-6">
        <div className="flex justify-between">
          <h2 className="text-xl">Thanks for coming!</h2>
          <h2 className="hidden">Create by Muhammad Amer</h2>
          <div className="flex gap-2">
            {socials.map((social) => {
              const Icons = social.icon;
              return (
                <div key={social.name}>
                  <ul>
                    <li>
                      <Icons size={30} />
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <h2 className="">Create by Muhammad Amer</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
