import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarChartArrowDown = (
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
            d='M2.095 1.256a.75.75 0 0 0-.19 1.488c3.424.438 6.107 1.075 8.905 2.372 2.709 1.257 5.558 3.148 9.303 6.134H19a.75.75 0 1 0 0 1.5h2A1.75 1.75 0 0 0 22.75 11V9a.75.75 0 0 0-1.5 0v1.239c-3.883-3.11-6.894-5.131-9.81-6.483-2.98-1.383-5.827-2.05-9.345-2.5ZM2 10a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V10Zm16 8a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Zm-6-6a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowDown);
export default ForwardRef;
