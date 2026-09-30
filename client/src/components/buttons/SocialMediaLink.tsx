import type { ReactElement } from "react";

type SocialMediaLinkType = {
    href: string;
    icon: ReactElement;
}
export const SocialMediaLink = ({href, icon} : SocialMediaLinkType) => (
    <a href={href} target="_blank" className="h-fit w-fit bg-black rounded-full text-white p-4">
        {icon}
    </a>
)