import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-0 text-center bg-zinc-50 dark:bg-black lg:text-left">
      <div className="p-4 text-center bg-black/5 text-surface dark:text-white">
        © {new Date().getFullYear()} Copyright:{" "}
        <Link to="/Netflix-GPT/">Netflix-GPT</Link>|
        <a href="https://faranheit.ninja/">Made with ❤️ by Faran Mohammad</a>
      </div>
    </footer>
  );
};

export default Footer;
