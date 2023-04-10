import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCartRemove = (
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
            d='M2.75 1.25a.75.75 0 0 0 0 1.5h2C5.44 2.75 6 3.31 6 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H7.5a2.75 2.75 0 0 0-2.75-2.75h-2ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11.702 8.202a.75.75 0 0 1 1.06 0L14 9.439l1.237-1.237a.75.75 0 1 1 1.061 1.06L15.061 10.5l1.237 1.237a.75.75 0 1 1-1.06 1.061L14 11.561l-1.238 1.237a.75.75 0 0 1-1.06-1.06l1.237-1.238-1.237-1.237a.75.75 0 0 1 0-1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCartRemove);
export default ForwardRef;
