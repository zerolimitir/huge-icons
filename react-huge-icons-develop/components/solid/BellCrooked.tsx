import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellCrooked = (
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
            d='M18.79 4.825c-2.284-2.283-5.967-2.443-8.567-.372L7.826 6.362a3.817 3.817 0 0 1-2.065.822c-1.59.129-2.344 2.068-1.234 3.178l8.725 8.725c1.11 1.11 3.05.357 3.179-1.234.06-.75.347-1.47.821-2.065l1.91-2.397c2.07-2.6 1.91-6.283-.373-8.566Zm-7.15 15.591c-1.12.469-2.5.215-3.458-.742-.957-.957-1.21-2.338-.74-3.458a.642.642 0 0 1 1.058-.167l3.294 3.616a.475.475 0 0 1-.155.751Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellCrooked);
export default ForwardRef;
