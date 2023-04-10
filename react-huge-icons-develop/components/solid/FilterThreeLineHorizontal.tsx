import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLineHorizontal = (
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
            d='M3 5.75h6.354a2.751 2.751 0 0 0 5.293 0H21a.75.75 0 0 0 0-1.5h-6.354a2.751 2.751 0 0 0-5.292 0H3a.75.75 0 0 0 0 1.5Zm14 3.5a2.75 2.75 0 1 0 2.646 3.5H21a.75.75 0 0 0 0-1.5h-1.354a2.751 2.751 0 0 0-2.646-2ZM2.25 12a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm2.104 7.75H3a.75.75 0 0 1 0-1.5h1.354a2.751 2.751 0 1 1 0 1.5ZM11.25 19a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineHorizontal);
export default ForwardRef;
