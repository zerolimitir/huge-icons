import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLogout = (
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
            d='M19.146 13.44a.75.75 0 0 0 1.061 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.475L20.207 9.44a.75.75 0 0 0-1.06 1.061l.72.72H13.75a.75.75 0 0 0 0 1.5h6.116l-.72.72ZM6.75 20.75H14A4.75 4.75 0 0 0 18.75 16a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 1 14 19.25h-3.786a4.737 4.737 0 0 1-3.464 1.5Zm3.464-16H14A3.25 3.25 0 0 1 17.25 8a.75.75 0 0 0 1.5 0A4.75 4.75 0 0 0 14 3.25H6.75c1.366 0 2.598.577 3.464 1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 8a4.75 4.75 0 0 1 9.5 0v8A4.75 4.75 0 1 1 2 16V8Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
