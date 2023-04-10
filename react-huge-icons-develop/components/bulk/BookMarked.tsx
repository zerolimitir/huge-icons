import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookMarked = (
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
        <path fill='currentColor' d='M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M9 9V2h6v7l-3-2.2L9 9ZM4 19a3 3 0 0 1 3-3h13v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarked);
export default ForwardRef;
