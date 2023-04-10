import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLineChartDescending = (
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
            d='M14 6a2 2 0 1 0-3.934.513l-5.033 3.774a2 2 0 1 0 .9 1.2l5.034-3.774a1.99 1.99 0 0 0 1.438.246l5.943 8.914a2 2 0 1 0 1.248-.832l-5.943-8.914C13.872 6.806 14 6.417 14 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLineChartDescending);
export default ForwardRef;
