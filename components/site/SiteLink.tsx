import type { ComponentPropsWithoutRef } from 'react';
import { sitePath } from '@/data/site';

type SiteLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string;
};

export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return <a href={sitePath(href)} {...props}>{children}</a>;
}
