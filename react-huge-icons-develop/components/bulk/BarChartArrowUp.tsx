import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowUp = (
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
            d='M20 8a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V10a2 2 0 0 1 2-2ZM4 16a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2Zm8-4a2 2 0 0 1 2 2v6a2 2 0 1 1-4 0v-6a2 2 0 0 1 2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.25 2a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0V3.761c-3.883 3.11-6.894 5.131-9.81 6.483-2.98 1.383-5.827 2.05-9.345 2.5a.75.75 0 0 1-.19-1.488c3.424-.437 6.107-1.075 8.905-2.372 2.709-1.257 5.558-3.148 9.303-6.134H19a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowUp);
export default ForwardRef;
