import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAddCircle = (
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
            d='M12.75 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5ZM16 12.75a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 8v8h1.5V8h-1.5ZM16 11.25H8v1.5h8v-1.5Zm-4 11.5c5.937 0 10.75-4.813 10.75-10.75h-1.5A9.25 9.25 0 0 1 12 21.25v1.5ZM1.25 12c0 5.937 4.813 10.75 10.75 10.75v-1.5A9.25 9.25 0 0 1 2.75 12h-1.5ZM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75v-1.5Zm0 1.5A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAddCircle);
export default ForwardRef;
