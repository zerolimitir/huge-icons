import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRemoveCircle = (
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
            d='M14.298 15.359a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM9.702 8.64a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 5.657a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.717-4.596a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm0 4.596L9.702 8.641l-1.06 1.06 5.656 5.658 1.06-1.06Zm-5.657 1.06 5.657-5.656-1.06-1.06-5.658 5.656 1.06 1.06ZM12 22.75c5.937 0 10.75-4.813 10.75-10.75h-1.5A9.25 9.25 0 0 1 12 21.25v1.5ZM1.25 12c0 5.937 4.813 10.75 10.75 10.75v-1.5A9.25 9.25 0 0 1 2.75 12h-1.5ZM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75v-1.5Zm0 1.5A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRemoveCircle);
export default ForwardRef;
