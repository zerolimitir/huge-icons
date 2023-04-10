import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailNotification = (
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
            d='M6.416 8.376a.75.75 0 0 0-.832 1.248l.832-1.248Zm3.365 3.145.416-.624-.416.624Zm4.438 0-.416-.624.416.624Zm.906.297a.75.75 0 1 0-.832-1.248l.832 1.248ZM13.803 4.75a.75.75 0 0 0 0-1.5v1.5Zm8.947 7.447a.75.75 0 0 0-1.5 0h1.5ZM21.25 7A2.25 2.25 0 0 1 19 9.25v1.5A3.75 3.75 0 0 0 22.75 7h-1.5ZM19 9.25A2.25 2.25 0 0 1 16.75 7h-1.5A3.75 3.75 0 0 0 19 10.75v-1.5ZM16.75 7A2.25 2.25 0 0 1 19 4.75v-1.5A3.75 3.75 0 0 0 15.25 7h1.5ZM19 4.75A2.25 2.25 0 0 1 21.25 7h1.5A3.75 3.75 0 0 0 19 3.25v1.5ZM5.584 9.624l3.781 2.52.832-1.247-3.781-2.521-.832 1.248Zm3.781 2.52a4.75 4.75 0 0 0 5.27 0l-.832-1.247a3.25 3.25 0 0 1-3.606 0l-.832 1.248Zm5.27 0 .49-.326-.832-1.248-.49.327.832 1.248ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V8h-1.5v10h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM6 3.25A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5Zm0 1.5h7.803v-1.5H6v1.5Zm15.25 7.447V18h1.5v-5.803h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailNotification);
export default ForwardRef;
