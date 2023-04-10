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
            d='M21.47 22.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.94-3.06a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM2.75 11.5a8.75 8.75 0 0 1 8.75-8.75v-1.5C5.84 1.25 1.25 5.84 1.25 11.5h1.5Zm8.75-8.75a8.75 8.75 0 0 1 8.75 8.75h1.5c0-5.66-4.59-10.25-10.25-10.25v1.5Zm8.75 8.75a8.75 8.75 0 0 1-8.75 8.75v1.5c5.66 0 10.25-4.59 10.25-10.25h-1.5Zm-8.75 8.75a8.75 8.75 0 0 1-8.75-8.75h-1.5c0 5.66 4.59 10.25 10.25 10.25v-1.5Zm11.03 1.22-2-2-1.06 1.06 2 2 1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShortSeparated);
export default ForwardRef;
