import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPortraitBold = (
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
        <rect width={10} height={18} x={7} y={3} fill='currentColor' opacity={0.4} rx={3} />
        <path
            fill='currentColor'
            d='M17 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2V7ZM7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2v10Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;
