import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCapsule = (
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
            d='m16.849 15.801 2.36-2.36a6.117 6.117 0 1 0-8.65-8.65l-2.36 2.36c.03.023.06.048.089.076l8.485 8.485a.746.746 0 0 1 .076.09Zm-1.048 1.048a.764.764 0 0 1-.089-.076L7.227 8.288a.755.755 0 0 1-.076-.09l-2.36 2.36a6.117 6.117 0 0 0 8.65 8.65l2.36-2.359Zm.618-10.33a.75.75 0 0 1 1.061 0 3.75 3.75 0 0 1 0 5.304.75.75 0 1 1-1.06-1.06 2.25 2.25 0 0 0 0-3.182.75.75 0 0 1 0-1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsule);
export default ForwardRef;
