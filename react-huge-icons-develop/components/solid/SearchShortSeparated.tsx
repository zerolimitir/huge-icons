import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchShortSeparated = (
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
            d='M20.25 11.5a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0ZM11.5 21.75c5.66 0 10.25-4.59 10.25-10.25S17.16 1.25 11.5 1.25 1.25 5.84 1.25 11.5 5.84 21.75 11.5 21.75Zm9.03-2.28a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06l-2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShortSeparated);
export default ForwardRef;
