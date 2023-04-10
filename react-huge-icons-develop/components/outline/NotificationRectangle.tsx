import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationRectangle = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='m18 11.9-.15-.735.15.735ZM12.1 6l.735.15L12.1 6Zm4.9 5.25A4.25 4.25 0 0 1 12.75 7h-1.5A5.75 5.75 0 0 0 17 12.75v-1.5Zm0-8.5A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25v1.5Zm-3 18.5H6v1.5h8v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM17.25 18A3.25 3.25 0 0 1 14 21.25v1.5A4.75 4.75 0 0 0 18.75 18h-1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5Zm11.25 6.65V18h1.5v-6.1h-1.5Zm4-4.9a4.252 4.252 0 0 1-3.4 4.165l.3 1.47A5.752 5.752 0 0 0 22.75 7h-1.5Zm-3.4 4.165a4.279 4.279 0 0 1-.85.085v1.5c.393 0 .777-.04 1.15-.115l-.3-1.47ZM6 6.75h6.1v-1.5H6v1.5Zm6.75.25c0-.292.03-.577.085-.85l-1.47-.3A5.773 5.773 0 0 0 11.25 7h1.5Zm.085-.85A4.252 4.252 0 0 1 17 2.75v-1.5a5.752 5.752 0 0 0-5.635 4.6l1.47.3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationRectangle);
export default ForwardRef;
