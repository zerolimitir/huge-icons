import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilmstripCircle = (
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
            d='M21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM12.75 6a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 14.25 6h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 8.25v-1.5ZM11.25 6a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 6h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 3.75v1.5ZM6.75 12a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 8.25 12h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 6 14.25v-1.5ZM5.25 12a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 3.75 12h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 6 9.75v1.5Zm12.25.75a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 19.75 12h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 15.25 12h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5ZM12.75 18a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 14.25 18h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 20.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 18h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 15.75v1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 22h10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilmstripCircle);
export default ForwardRef;
