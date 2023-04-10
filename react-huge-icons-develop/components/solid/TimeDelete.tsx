import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeDelete = (
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
            d='M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v7a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 18 2.75H6A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h7a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V6Zm19.402 9.348a.75.75 0 0 1 0 1.061L19.06 18l1.59 1.591a.75.75 0 0 1-1.06 1.06L18 19.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06L16.938 18l-1.59-1.591a.75.75 0 1 1 1.06-1.06L18 16.938l1.591-1.59a.75.75 0 0 1 1.06 0ZM12 5.25a.75.75 0 0 1 .75.75v4.145a2 2 0 1 1-1.531 3.697L9.53 15.53a.75.75 0 0 1-1.06-1.06l1.688-1.689a2 2 0 0 1 1.092-2.636V6a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeDelete);
export default ForwardRef;
