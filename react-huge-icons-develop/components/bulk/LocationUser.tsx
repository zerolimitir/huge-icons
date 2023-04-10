import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationUser = (
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
            d='M12 22c3.375 0 9-6.202 9-11.111C21 5.979 16.97 2 12 2s-9 3.98-9 8.889C3 15.799 8.625 22 12 22Zm1.5-13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.503 4.87c.567.398 1.256.63 2.003.63a3.477 3.477 0 0 0 2.542-1.094A2.998 2.998 0 0 0 12 12a2.998 2.998 0 0 0-2.542 1.406c.163.172.344.328.54.465Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.863 15.1a5 5 0 1 0-5.725-8.2 5 5 0 0 0 5.725 8.2ZM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-3.503 4.87c.567.398 1.256.63 2.003.63a3.477 3.477 0 0 0 2.542-1.094A2.998 2.998 0 0 0 12 12a2.998 2.998 0 0 0-2.542 1.406c.163.172.344.328.54.465Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationUser);
export default ForwardRef;
