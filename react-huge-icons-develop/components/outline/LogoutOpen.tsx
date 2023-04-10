import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLogoutOpen = (
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
            d='M17.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-4a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm0 5.06 1.293-1.293-1.06-1.06-1.293 1.293 1.06 1.06Zm1.293-3.767L18.53 9.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm0 2.474a1.75 1.75 0 0 0 0-2.474l-1.06 1.06a.25.25 0 0 1 0 .354l1.06 1.06Z'
        />
        <path
            fill='currentColor'
            d='M19 12.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-9.75 6.016a.75.75 0 0 0 1.5 0h-1.5Zm13.5 0a.75.75 0 0 0-1.5 0h1.5Zm-1.5-10a.75.75 0 0 0 1.5 0h-1.5Zm-10.5 0a.75.75 0 0 0-1.5 0h1.5Zm.14 12.594.417-.624-.416.624Zm2 1.333-.415.624.416-.624Zm0-17.854-.415-.624.416.624Zm-2 1.334-.415-.624.416.624ZM10 4.516a.75.75 0 0 0 0 1.5v-1.5Zm0 14a.75.75 0 0 0 0 1.5v-1.5Zm9-7.266h-6v1.5h6v-1.5ZM4.75 17.266v-10h-1.5v10h1.5Zm10.5 0c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 0 0 2.75-2.75h-1.5ZM14 6.016c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 4.516v1.5Zm-8.693-.72 2-1.333-.832-1.248-2 1.334.832 1.248Zm3.943-.293V19.53h1.5V5.003h-1.5ZM7.307 20.57l-2-1.333-.832 1.248 2 1.333.832-1.248ZM4.75 18.196V6.336h-1.5v11.86h1.5Zm.557 1.04a1.25 1.25 0 0 1-.557-1.04h-1.5c0 .92.46 1.778 1.225 2.288l.832-1.248Zm3.943.293a1.25 1.25 0 0 1-1.943 1.04l-.832 1.248c1.827 1.219 4.275-.091 4.275-2.288h-1.5ZM7.307 3.963a1.25 1.25 0 0 1 1.943 1.04h1.5c0-2.196-2.448-3.506-4.275-2.288l.832 1.248Zm-2.832.086A2.75 2.75 0 0 0 3.25 6.337h1.5c0-.418.209-.809.557-1.04l-.832-1.248ZM10 6.016h4v-1.5h-4v1.5Zm4 12.5h-4v1.5h4v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogoutOpen);
export default ForwardRef;
