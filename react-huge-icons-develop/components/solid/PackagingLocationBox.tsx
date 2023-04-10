import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingLocationBox = (
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
            d='M15 12.562h1.582c.264-.838.418-1.68.418-2.5 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.9 4.476 9.296 1.043 1.246 2.708 1.523 4.026.83a3.469 3.469 0 0 1-.002-.126v-4a3.5 3.5 0 0 1 3.5-3.5Zm-5-2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3 6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Zm5.75 0a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingLocationBox);
export default ForwardRef;
