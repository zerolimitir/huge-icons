import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPortraitLineCenter = (
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
            d='M7.75 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Zm14 0a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <rect width={10} height={18} x={7} y={3} fill='currentColor' opacity={0.4} rx={3} />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitLineCenter);
export default ForwardRef;
