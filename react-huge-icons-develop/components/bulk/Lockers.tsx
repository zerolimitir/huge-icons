import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLockers = (
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
            fillRule='evenodd'
            d='M18.25 19H19c.259 0 .51-.032.75-.094V21a.75.75 0 0 1-1.5 0v-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M22 6a3 3 0 0 0-3-3h-7v16h7a3 3 0 0 0 3-3V6ZM2 7h10V3H5a3 3 0 0 0-3 3v1Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M22 7H12V3h7a3 3 0 0 1 3 3v1Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5 3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7V3H5Zm3.25 11a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm6.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockers);
export default ForwardRef;
