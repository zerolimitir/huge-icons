import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallHospital = (
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
            d='M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1.25-7a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V7.75h2.5V9a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v1.25h-2.5V5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 20.222V18.91a2 2 0 0 0-1.257-1.857l-1.479-.592a2 2 0 0 0-2.531.963l-.066.132s-2.223-.445-4-2.223c-1.778-1.777-2.223-4-2.223-4l.132-.066a2 2 0 0 0 .963-2.531l-.592-1.479A2 2 0 0 0 5.09 6H3.778C2.796 6 2 6.796 2 7.778 2 15.633 8.368 22 16.222 22c.982 0 1.778-.796 1.778-1.778Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallHospital);
export default ForwardRef;
