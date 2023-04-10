import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFigma = (
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
        <rect width={12} height={6} x={6} y={3} stroke='currentColor' strokeWidth={1.5} rx={3} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Zm0 6a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z'
        />
        <circle cx={15} cy={12} r={3} stroke='currentColor' strokeWidth={1.5} />
    </svg>
);
const ForwardRef = forwardRef(SvgFigma);
export default ForwardRef;
