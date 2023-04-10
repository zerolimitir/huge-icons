import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookSearch = (
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
            d='M17 2H7a3 3 0 0 0-3 3v10.646A4.484 4.484 0 0 1 7 14.5h13V5a3 3 0 0 0-3-3ZM9.75 8a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 4.25a3.75 3.75 0 1 0 2.068 6.879l.902.901a.75.75 0 1 0 1.06-1.06l-.901-.902A3.75 3.75 0 0 0 12 4.25ZM7 16a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookSearch);
export default ForwardRef;
