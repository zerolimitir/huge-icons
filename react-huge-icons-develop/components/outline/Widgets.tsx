import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWidgets = (
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
        <rect width={8} height={8} x={2} y={14} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={8} height={8} x={2} y={2} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <rect width={8} height={8} x={14} y={14} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.1 8.071a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-2.829 2.828a2 2 0 0 1-2.828 0L13.1 8.071Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWidgets);
export default ForwardRef;
