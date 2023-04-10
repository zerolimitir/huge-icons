import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRepeat = (
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
            d='M17.53 4.47a.75.75 0 0 0-1.06 1.06l.72.72H10A4.75 4.75 0 0 0 5.25 11v1a.75.75 0 0 0 1.5 0v-1A3.25 3.25 0 0 1 10 7.75h7.19l-.72.72a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L17.53 4.47ZM6.47 19.53a.75.75 0 0 0 1.06-1.06l-.72-.72H14A4.75 4.75 0 0 0 18.75 13v-1a.75.75 0 0 0-1.5 0v1A3.25 3.25 0 0 1 14 16.25H6.81l.72-.72a.75.75 0 1 0-1.06-1.06l-1.293 1.293a1.75 1.75 0 0 0 0 2.474L6.47 19.53Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
