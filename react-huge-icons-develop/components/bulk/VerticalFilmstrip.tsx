import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVerticalFilmstrip = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17 22V2h1a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-1ZM7 22V2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.75 8.75H5.25v-1.5h13.5v1.5Zm0 8H5.25v-1.5h13.5v1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstrip);
export default ForwardRef;
