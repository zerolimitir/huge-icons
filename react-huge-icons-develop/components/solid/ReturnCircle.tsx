import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReturnCircle = (
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
            d='M2.75 12a9.25 9.25 0 0 1 16.651-5.55.75.75 0 0 0 1.311-.213l1-3a.75.75 0 0 0-1.424-.474l-.58 1.743A10.72 10.72 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0Zm20 0a.75.75 0 0 0-1.5 0 9.25 9.25 0 0 1-16.651 5.55.75.75 0 0 0-1.311.213l-1 3a.75.75 0 1 0 1.424.474l.58-1.743A10.72 10.72 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75ZM7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Zm6.75 1a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturnCircle);
export default ForwardRef;
