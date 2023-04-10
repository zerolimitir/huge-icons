import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlasses = (
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
            d='M18 2.25a.75.75 0 0 0 0 1.5v-1.5ZM6 3.75a.75.75 0 0 0 0-1.5v1.5ZM9.25 17.5a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5ZM6.5 20.25a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5ZM3.75 17.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75-2.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5Zm13.75 2.75a2.75 2.75 0 0 1-2.75 2.75v1.5a4.25 4.25 0 0 0 4.25-4.25h-1.5Zm-2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5Zm-2.75-2.75a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75-2.75a2.75 2.75 0 0 1 2.75 2.75h1.5a4.25 4.25 0 0 0-4.25-4.25v1.5ZM10.75 18c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 18h1.5ZM12 16.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 15.25v1.5Zm6-13A2.25 2.25 0 0 1 20.25 6h1.5A3.75 3.75 0 0 0 18 2.25v1.5ZM20.25 6v11.5h1.5V6h-1.5ZM6 2.25A3.75 3.75 0 0 0 2.25 6h1.5A2.25 2.25 0 0 1 6 3.75v-1.5ZM2.25 6v11.5h1.5V6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
