import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSearchShort = (
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
            d='m18.63 21.422.53-.53-.53.53Zm2.792-2.793.53-.53-.53.53Zm-1.392-2.452a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm-2.792 2.793a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM2.75 10.5a7.75 7.75 0 0 1 7.75-7.75v-1.5a9.25 9.25 0 0 0-9.25 9.25h1.5Zm7.75-7.75a7.75 7.75 0 0 1 7.75 7.75h1.5a9.25 9.25 0 0 0-9.25-9.25v1.5Zm7.75 7.75a7.75 7.75 0 0 1-7.75 7.75v1.5a9.25 9.25 0 0 0 9.25-9.25h-1.5Zm-7.75 7.75a7.75 7.75 0 0 1-7.75-7.75h-1.5a9.25 9.25 0 0 0 9.25 9.25v-1.5Zm10.391 2.641a1.224 1.224 0 0 1-1.731 0l-1.061 1.061a2.725 2.725 0 0 0 3.853 0l-1.06-1.06Zm0-1.731a1.224 1.224 0 0 1 0 1.731l1.061 1.061a2.725 2.725 0 0 0 0-3.853l-1.06 1.06Zm-1.921-1.922 1.921 1.922 1.061-1.061-1.922-1.922-1.06 1.06Zm.19 3.653-1.922-1.921-1.06 1.06 1.92 1.922 1.062-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShort);
export default ForwardRef;
