import type { ReactElement } from "react";

type SocialMediaLinkType = {
    href: string;
    icon: ReactElement;
    className?: string;
}
export const SocialMediaLink = ({href, icon, className} : SocialMediaLinkType) => (
    <a href={href} target="_blank" className={`h-fit w-fit bg-black rounded-full text-white ${className}`}>
        {icon}
    </a>
)