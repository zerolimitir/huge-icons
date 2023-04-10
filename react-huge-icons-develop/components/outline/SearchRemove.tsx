import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchRemove = (
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
            d='M13.798 14.859a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM9.202 8.14a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-1.06 5.657a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.717-4.596a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm6.61 13.328a.75.75 0 1 0 1.061-1.06l-1.06 1.06Zm-2.439-4.56a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm1.22-6.47a8.75 8.75 0 0 1-8.75 8.75v1.5c5.66 0 10.25-4.59 10.25-10.25h-1.5Zm-8.75 8.75a8.75 8.75 0 0 1-8.75-8.75h-1.5c0 5.66 4.59 10.25 10.25 10.25v-1.5ZM2.75 11.5a8.75 8.75 0 0 1 8.75-8.75v-1.5C5.84 1.25 1.25 5.84 1.25 11.5h1.5Zm8.75-8.75a8.75 8.75 0 0 1 8.75 8.75h1.5c0-5.66-4.59-10.25-10.25-10.25v1.5Zm3.359 11.048L12.03 10.97l-1.06 1.06 2.828 2.829 1.06-1.06ZM12.03 10.97 9.202 8.14 8.142 9.2l2.828 2.83 1.06-1.061Zm-2.828 3.889 2.828-2.829-1.06-1.06-2.829 2.828 1.06 1.06Zm2.828-2.829 2.829-2.828-1.06-1.06-2.83 2.828 1.061 1.06Zm10.5 9.44-3.5-3.5-1.06 1.06 3.5 3.5 1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchRemove);
export default ForwardRef;
