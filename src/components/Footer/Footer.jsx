import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="m-2 bg-white rounded-lg shadow md:m-4 dark:bg-gray-800">
      <div className="flex items-center w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &#169; {`Copyright ${new Date().getFullYear()}`}{" "}
          <Link to="/Netflix-GPT/" className="hover:underline">
            Netflix-GPT
          </Link>
          <br />
          Made with ❤️ by{" "}
          <a href="https://faranheit.ninja/" className="hover:underline">
            Faran Mohammad
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
