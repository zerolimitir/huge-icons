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
            d='M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.75 10a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 2.75A9.25 9.25 0 0 0 2.75 12a.75.75 0 0 1-1.5 0C1.25 6.063 6.063 1.25 12 1.25a10.72 10.72 0 0 1 7.708 3.256l.58-1.743a.75.75 0 0 1 1.424.474l-1 3a.75.75 0 0 1-1.31.213A9.235 9.235 0 0 0 12 2.75Zm10 8.5a.75.75 0 0 1 .75.75c0 5.937-4.813 10.75-10.75 10.75a10.72 10.72 0 0 1-7.708-3.256l-.58 1.743a.75.75 0 1 1-1.424-.474l1-3a.75.75 0 0 1 1.31-.213A9.25 9.25 0 0 0 21.25 12a.75.75 0 0 1 .751-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturnCircle);
export default ForwardRef;
