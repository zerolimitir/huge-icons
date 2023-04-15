import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglassEnd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.557 14.71c-.196.1-.315.231-1.249 1.39-.568.704-1.076 1.37-1.13 1.48a.984.984 0 0 0 .482 1.325l.2.094h4.28l.2-.094a.984.984 0 0 0 .482-1.325c-.054-.11-.562-.776-1.13-1.48-.934-1.159-1.053-1.29-1.249-1.39A.882.882 0 0 0 12 14.6a.882.882 0 0 0-.443.11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglassEnd);
export default ForwardRef;
