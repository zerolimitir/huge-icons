import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLineChartAscending = (
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
            d='M22 6a2 2 0 0 1-3.033 1.713l-5.033 3.774a2 2 0 0 1-2.967 2.225l-5.033 3.775A2.003 2.003 0 0 1 4 20a2 2 0 1 1 1.034-3.713l5.032-3.774a2.002 2.002 0 0 1 2.968-2.226l5.032-3.774A2.003 2.003 0 0 1 20 4a2 2 0 0 1 2 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartAscending);
export default ForwardRef;
