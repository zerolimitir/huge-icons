import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBagFavourite = (
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
            d='M8.25 5a3.75 3.75 0 0 1 7.5 0v1.01a4 4 0 0 1 3.688 3.494l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8A4 4 0 0 1 8.25 6.01V5Zm6 0v1h-4.5V5a2.25 2.25 0 1 1 4.5 0ZM12 12l.265-.265a1.875 1.875 0 1 1 2.652 2.651l-1.856 1.857a1.5 1.5 0 0 1-2.122 0l-1.856-1.857a1.875 1.875 0 0 1 2.652-2.651L12 12Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagFavourite);
export default ForwardRef;
