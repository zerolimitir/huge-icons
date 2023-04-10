import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailFast = (
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
            d='M1.25 12a.75.75 0 0 0 1.5 0h-1.5ZM8 20.25a.75.75 0 0 0 0 1.5v-1.5ZM6.416 7.376a.75.75 0 0 0-.832 1.248l.832-1.248Zm3.365 3.145.416-.624-.416.624Zm4.438 0-.416-.624.416.624Zm4.197-1.897a.75.75 0 1 0-.832-1.248l.832 1.248ZM2 14.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 1.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2-15h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5Zm-18.5 5V7h-1.5v5h1.5ZM18 20.25H8v1.5h10v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Zm-.416 6.374 3.781 2.52.832-1.247-3.781-2.521-.832 1.248Zm9.05 2.52 3.782-2.52-.832-1.248-3.781 2.52.832 1.249Zm-5.269 0a4.75 4.75 0 0 0 5.27 0l-.832-1.247a3.25 3.25 0 0 1-3.606 0l-.832 1.248ZM2 15.75h6v-1.5H2v1.5Zm0 3h6v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailFast);
export default ForwardRef;
