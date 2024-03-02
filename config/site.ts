export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ORTxUNI",
	description: "Ayudando a tomar la decision correcta",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "LogIn",
      href: "/login",
    },
    {
      label: "Colaborador",
      href: "/colaborador",
    },
    {
      label: "Register",
      href: "/register",
    },
    {
      label: "About",
      href: "/about",
    },
	{
		label: "Dashboard",
		href: "/dashboard",
	  }
	],
	navMenuItems: [
		{
			label: "Register",
			href: "/register",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
