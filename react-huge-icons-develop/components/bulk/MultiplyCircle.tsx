import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMultiplyCircle = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.641 8.641a.75.75 0 0 1 1.061 0L12 10.94l2.298-2.298a.75.75 0 1 1 1.06 1.06L13.062 12l2.298 2.298a.75.75 0 0 1-1.06 1.06L12 13.06l-2.298 2.3a.75.75 0 1 1-1.06-1.061L10.94 12l-2.3-2.298a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMultiplyCircle);
export default ForwardRef;
