import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPageSeparator = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m20 14-2-2 2-2M4 14l2-2-2-2m3-5v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5m0 14v-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPageSeparator);
export default ForwardRef;
