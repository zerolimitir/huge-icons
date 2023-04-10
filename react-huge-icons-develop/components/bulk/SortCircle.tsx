import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortCircle = (
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
        <rect width={6} height={6} x={14} y={4} fill='currentColor' opacity={0.4} rx={3} />
        <rect width={6} height={6} x={14} y={14} fill='currentColor' opacity={0.4} rx={3} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.055 19.816a2.75 2.75 0 0 1-4.11 0l-1.506-1.693a.75.75 0 0 1 1.122-.997l1.505 1.694c.057.064.118.12.184.17V5.01a1.225 1.225 0 0 0-.184.17L4.56 6.873a.75.75 0 1 1-1.122-.997l1.506-1.693a2.75 2.75 0 0 1 4.11 0l1.506 1.693a.75.75 0 1 1-1.122.997L7.934 5.18a1.26 1.26 0 0 0-.184-.17v13.98a1.28 1.28 0 0 0 .184-.17l1.505-1.694a.75.75 0 0 1 1.122.997l-1.506 1.693Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortCircle);
export default ForwardRef;
