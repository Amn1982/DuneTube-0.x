import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-12 border-t border-slate-200 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center md:flex-row md:justify-between md:text-left">
        <p>
          © {new Date().getFullYear()} DuneTube · {t("footer.rights")}
        </p>
        <nav className="flex items-center gap-4 text-xs font-semibold text-primary-dark">
          <a href="/terms" className="transition hover:text-primary">
            {t("footer.terms")}
          </a>
          <a href="/privacy" className="transition hover:text-primary">
            {t("footer.privacy")}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
