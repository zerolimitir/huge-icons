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
            d='M6.75 3.25A4.75 4.75 0 0 0 2 8v8a4.75 4.75 0 0 0 4.75 4.75H14A4.75 4.75 0 0 0 18.75 16a.75.75 0 0 0-1.5 0A3.25 3.25 0 0 1 14 19.25H9.464A4.733 4.733 0 0 0 10.75 16V8c0-1.257-.488-2.4-1.286-3.25H14A3.25 3.25 0 0 1 17.25 8a.75.75 0 0 0 1.5 0A4.75 4.75 0 0 0 14 3.25H6.75Zm12.396 11.28a.75.75 0 0 1 0-1.06l.72-.72H13.75a.75.75 0 0 1 0-1.5h6.116l-.72-.72a.75.75 0 0 1 1.061-1.06l1.293 1.293a1.75 1.75 0 0 1 0 2.474l-1.293 1.293a.75.75 0 0 1-1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
