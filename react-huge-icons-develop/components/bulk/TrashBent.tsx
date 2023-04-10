import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrashBent = (
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
            d='M9.724 22h4.551a4 4 0 0 0 3.99-3.715l.723-12.123C16.862 5.416 14.495 5 12 5s-4.862.416-6.989 1.162l.724 12.123A4 4 0 0 0 9.725 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14.75 4.416V4a2.75 2.75 0 1 0-5.5 0v.416c-2.385.29-4.613.952-6.579 1.91a.75.75 0 1 0 .657 1.348C5.82 6.46 8.796 5.75 12 5.75c3.204 0 6.18.71 8.671 1.924a.75.75 0 1 0 .657-1.348c-1.965-.958-4.193-1.62-6.578-1.91ZM10 9.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrashBent);
export default ForwardRef;
