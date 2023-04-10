import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLogin = (
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
            d='M15.853 10.28a.75.75 0 1 0-1.06-1.06L13.5 10.513a1.75 1.75 0 0 0 0 2.474l1.293 1.293a.75.75 0 1 0 1.06-1.06l-.72-.72h6.117a.75.75 0 0 0 0-1.5h-6.116l.72-.72ZM6.75 20.5H14a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0A3.25 3.25 0 0 1 14 19h-3.786a4.737 4.737 0 0 1-3.464 1.5Zm3.464-16H14a3.25 3.25 0 0 1 3.25 3.25.75.75 0 0 0 1.5 0A4.75 4.75 0 0 0 14 3H6.75c1.366 0 2.598.577 3.464 1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 7.75a4.75 4.75 0 0 1 9.5 0v8a4.75 4.75 0 1 1-9.5 0v-8Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
