import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookHelp = (
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
            d='M17 2H7a3 3 0 0 0-3 3v10.646A4.484 4.484 0 0 1 7 14.5h13V5a3 3 0 0 0-3-3Zm-6.25 5A1.25 1.25 0 1 1 12 8.25a.75.75 0 0 0 0 1.5A2.75 2.75 0 1 0 9.25 7a.75.75 0 0 0 1.5 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6 3.646a3 3 0 0 0 0 6h10a3 3 0 0 0 3-3v-3H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookHelp);
export default ForwardRef;
