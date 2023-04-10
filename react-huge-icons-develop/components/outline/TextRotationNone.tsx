import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTextRotationNone = (
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
            d='M9 10.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 0h6v-1.5H9v1.5Z'
        />
        <path
            fill='currentColor'
            d='m12 3 .692-.288a.75.75 0 0 0-1.384 0L12 3ZM6.308 14.711a.75.75 0 0 0 1.384.578l-1.384-.578Zm10 .578a.75.75 0 0 0 1.384-.578l-1.384.578Zm-5-12.577-5 12 1.384.577 5-12-1.384-.577Zm6.384 12-5-12-1.384.576 5 12 1.384-.577Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m18 21 2-2m0 0-2-2m2 2H4'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationNone);
export default ForwardRef;
