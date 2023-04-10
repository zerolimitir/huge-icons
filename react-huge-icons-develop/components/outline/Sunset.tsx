import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSunset = (
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
            d='m12.707 6.793-.53-.53.53.53Zm1.823-.763a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-3.237.763.53-.53-.53.53ZM10.53 4.97a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm0-1a.75.75 0 0 0 1.5 0h-1.5Zm9.058 4.752a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-2.474.354a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM4.752 7.69a.75.75 0 0 0-1.06 1.061l1.06-1.06Zm.354 2.475a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3 15.25a.75.75 0 0 0 0 1.5v-1.5Zm18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-15 1.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9 1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM6.75 16c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 16h1.5ZM12 10.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 9.25v1.5Zm1.237-3.427L14.53 6.03l-1.06-1.06-1.293 1.293 1.06 1.06Zm-1.414-1.06L10.53 4.97 9.47 6.03l1.293 1.293 1.06-1.06ZM11.25 2v4.5h1.5V2h-1.5Zm.927 4.263a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11.25 3v2h1.5V3h-1.5Zm0-1v2h1.5V2h-1.5Zm7.998 5.691-1.414 1.415 1.06 1.06 1.415-1.414-1.061-1.06ZM3.69 8.752l1.415 1.414 1.06-1.06L4.752 7.69l-1.06 1.061ZM3 16.75h18v-1.5H3v1.5Zm3 3h12v-1.5H6v1.5Zm3 3h6v-1.5H9v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSunset);
export default ForwardRef;
