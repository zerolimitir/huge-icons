import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileDouble = (
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
            d='M12 22v.75h.75V22H12ZM6 2.75h2v-1.5H6v1.5ZM11.25 6v16h1.5V6h-1.5ZM12 21.25H6v1.5h6v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5Zm2-18.5A3.25 3.25 0 0 1 11.25 6h1.5A4.75 4.75 0 0 0 8 1.25v1.5Zm-2-1.5A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
        <path
            fill='currentColor'
            d='M12 8v-.75h-.75V8H12Zm0 14h-.75v.75H12V22Zm0-13.25h6v-1.5h-6v1.5ZM21.25 12v6h1.5v-6h-1.5ZM18 21.25h-6v1.5h6v-1.5Zm-5.25.75V8h-1.5v14h1.5Zm8.5-4A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 8.75A3.25 3.25 0 0 1 21.25 12h1.5A4.75 4.75 0 0 0 18 7.25v1.5Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M16 12h2m-2 3h2M6 6h2M6 9h2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDouble);
export default ForwardRef;
