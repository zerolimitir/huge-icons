import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeTwentyFour = (
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
            d='M21.25 12a.75.75 0 0 0 1.5 0h-1.5ZM9 22.75a.75.75 0 0 0 0-1.5v1.5Zm-3-20h12v-1.5H6v1.5ZM2.75 18V6h-1.5v12h1.5Zm18.5-12v6h1.5V6h-1.5ZM9 21.25H6v1.5h3v-1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 7v5l-3 1'
        />
        <path
            fill='currentColor'
            d='M11.25 18.5a.75.75 0 0 0 1.5 0h-1.5ZM12 22l-.45-.6a.75.75 0 0 0 .45 1.35V22Zm4 .75a.75.75 0 0 0 0-1.5v1.5Zm-.8-3.15-.45-.6.45.6Zm-2.45-1.1V18h-1.5v.5h1.5Zm2 .5-3.2 2.4.9 1.2 3.2-2.4-.9-1.2ZM12 22.75h4v-1.5h-4v1.5ZM15.25 18c0 .393-.185.764-.5 1l.9 1.2a2.75 2.75 0 0 0 1.1-2.2h-1.5ZM14 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 15.25v1.5ZM12.75 18c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 11.25 18h1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 16v1a2 2 0 0 0 2 2h2m0 0v-3m0 3v3m0-10-2-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeTwentyFour);
export default ForwardRef;
