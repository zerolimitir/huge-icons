import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSend = (
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
            d='m21.446 7.099-.586-.468.586.468ZM11.14 20.015l.587.467-.587-.467Zm-5.353-9.49-.545.515.545-.516Zm-3.09-3.263.545-.515-.545.515ZM4.611 3.75h14.778v-1.5H4.611v1.5Zm16.25 2.881L10.552 19.547l1.173.935L22.032 7.567 20.86 6.63ZM7.226 18.455v-6.208h-1.5v6.208h1.5ZM6.33 10.01 3.24 6.747 2.153 7.778l3.09 3.262 1.087-1.03Zm.897 2.238a3.25 3.25 0 0 0-.897-2.238l-1.089 1.03c.314.332.486.763.486 1.207h1.5Zm3.326 7.3c-1.107 1.387-3.326.575-3.326-1.092h-1.5c0 3.17 4.06 4.457 5.999 2.027l-1.173-.935ZM4.611 2.25c-2.89 0-4.48 3.394-2.46 5.528l1.09-1.031C2.18 5.627 2.957 3.75 4.61 3.75v-1.5Zm14.778 1.5c1.578 0 2.387 1.734 1.471 2.881l1.172.936c1.747-2.19.116-5.317-2.643-5.317v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
