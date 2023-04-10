import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserRectangle = (
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
        <circle
            r={3}
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            transform='matrix(1 0 0 -1 12 9)'
        />
        <path
            fill='currentColor'
            d='M6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5ZM21.25 18a3.252 3.252 0 0 1-2.438 3.148l.374 1.453A4.752 4.752 0 0 0 22.75 18h-1.5Zm-2.438 3.148c-.259.066-.53.102-.812.102v1.5c.408 0 .806-.052 1.186-.15l-.374-1.452ZM12 15.75a6.25 6.25 0 0 1 6.249 6.137l1.5-.026A7.75 7.75 0 0 0 12 14.25v1.5Zm-6 5.5c-.281 0-.553-.036-.812-.102L4.814 22.6c.38.097.778.149 1.186.149v-1.5Zm-.812-.102A3.252 3.252 0 0 1 2.75 18h-1.5a4.752 4.752 0 0 0 3.564 4.6l.374-1.452Zm.563.74A6.25 6.25 0 0 1 12 15.75v-1.5a7.75 7.75 0 0 0-7.749 7.611l1.5.026Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRectangle);
export default ForwardRef;
