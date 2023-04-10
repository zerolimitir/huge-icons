import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgClapperboard = (
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
            d='m12.332 17.445-.416-.624.416.624Zm1.796-1.197.416.624-.416-.624Zm0-2.496-.416.624.416-.624Zm-1.796-1.197.416-.624-.416.624ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm3.25 12.553v2.394h1.5v-2.394h-1.5Zm3.498 4.266 1.796-1.197-.832-1.248-1.796 1.197.832 1.248Zm1.796-4.941-1.796-1.197-.832 1.248 1.796 1.197.832-1.248Zm0 3.744a2.25 2.25 0 0 0 0-3.744l-.832 1.248a.75.75 0 0 1 0 1.248l.832 1.248Zm-5.294-.675c0 1.797 2.003 2.87 3.498 1.872l-.832-1.248a.75.75 0 0 1-1.166-.624h-1.5Zm1.5-2.394a.75.75 0 0 1 1.166-.624l.832-1.248c-1.495-.997-3.498.075-3.498 1.872h1.5ZM2 8.75h20v-1.5H2v1.5Zm15.376-7.166-4 6 1.248.832 4-6-1.248-.832Zm-8 0-4 6 1.248.832 4-6-1.248-.832Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClapperboard);
export default ForwardRef;
