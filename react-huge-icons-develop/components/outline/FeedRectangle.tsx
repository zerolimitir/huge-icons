import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFeedRectangle = (
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
            d='M8.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.407-6.744a.75.75 0 1 0-.186 1.488l.186-1.488Zm6.163 7.837a.75.75 0 1 0 1.488-.186l-1.488.186ZM6 5.25a.75.75 0 0 0 0 1.5v-1.5ZM17.25 18a.75.75 0 0 0 1.5 0h-1.5ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm-.093 10.494a7.325 7.325 0 0 1 6.349 6.349l1.488-.186a8.825 8.825 0 0 0-7.651-7.651l-.186 1.488ZM6 6.75c6.213 0 11.25 5.037 11.25 11.25h1.5c0-7.042-5.708-12.75-12.75-12.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFeedRectangle);
export default ForwardRef;
