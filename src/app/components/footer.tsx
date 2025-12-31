import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Community", href: "#" },
      { name: "Support", href: "#" },
      { name: "Status", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/stratora-logo.jpg"
                alt="Stratora logo"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Next-generation observability & infrastructure monitoring platform
              for modern cloud-native applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:border-purple-500/50 hover:text-purple-400 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stratora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none -z-10" />
    </footer>
  );
}
