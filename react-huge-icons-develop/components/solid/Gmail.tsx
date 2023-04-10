import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGmail = (
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
            d='m2.03 6.512 8.206 5.968a3 3 0 0 0 3.528 0l8.207-5.968A4 4 0 0 0 18 3H6a4 4 0 0 0-3.97 3.512ZM22 8.964l-7.06 5.134a5 5 0 0 1-5.88 0L2 8.964V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8.964Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGmail);
export default ForwardRef;
